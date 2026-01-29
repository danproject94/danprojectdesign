import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ImageCarouselProps {
    images: string[];
}

export default function ImageCarousel({ images }: ImageCarouselProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [aspectRatio, setAspectRatio] = useState<string>("16 / 9");
    const thumbnailsRef = useRef<HTMLDivElement>(null);

    const nextImage = () => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    const handleImageLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
        const { naturalWidth, naturalHeight } = e.currentTarget;
        setAspectRatio(`${naturalWidth} / ${naturalHeight}`);
    };

    // Efeito para centralizar a miniatura ativa
    useEffect(() => {
        if (thumbnailsRef.current) {
            const activeThumb = thumbnailsRef.current.children[currentIndex] as HTMLElement;
            if (activeThumb) {
                activeThumb.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            }
        }
    }, [currentIndex]);

    if (!images || images.length === 0) return null;

    const isVertical = (() => {
        const parts = aspectRatio.split(' / ');
        if (parts.length === 2) {
            return Number(parts[0]) / Number(parts[1]) < 1;
        }
        return false;
    })();

    return (
        <div className="relative w-full group flex flex-col items-center">
            {/* Wrapper Principal - Controla a largura máxima */}
            <div
                className="relative w-full transition-all duration-500 ease-in-out"
                style={{ maxWidth: isVertical ? '480px' : '1000px' }}
            >
                {/* Container da Imagem com Zonas de Clique */}
                <div
                    className="relative w-full flex justify-center items-center bg-black/20 group/carousel cursor-none"
                    style={{
                        aspectRatio: aspectRatio,
                        maxHeight: '75vh'
                    }}
                >
                    {/* Zonas de Clique Invisíveis */}
                    <div className="absolute inset-0 z-30 flex">
                        <div
                            onClick={prevImage}
                            className="flex-1 h-full cursor-w-resize"
                            title="Anterior"
                        />
                        <div
                            onClick={nextImage}
                            className="flex-1 h-full cursor-e-resize"
                            title="Próxima"
                        />
                    </div>

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, scale: 0.98 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 1.02 }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                            className="relative z-10 overflow-hidden"
                            style={{
                                borderRadius: '6px',
                                display: 'inline-block',
                                maxWidth: '100%',
                                maxHeight: '75vh'
                            }}
                        >
                            <img
                                src={images[currentIndex]}
                                alt={`Project view ${currentIndex + 1}`}
                                onLoad={handleImageLoad}
                                className="pointer-events-none"
                                style={{
                                    display: 'block',
                                    maxWidth: '100%',
                                    maxHeight: '75vh',
                                    width: 'auto',
                                    height: 'auto'
                                }}
                            />
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>

            {/* Barra de Miniaturas (Filmstrip) - Estilo Deslizante Sincronizado */}
            {images.length > 1 && (
                <div className="mt-10 w-full px-4">
                    <div
                        ref={thumbnailsRef}
                        className="flex gap-6 overflow-x-auto py-6 scrollbar-none snap-x snap-mandatory justify-start pl-6 pr-[50%]"
                    >
                        {images.map((img, idx) => (
                            <div
                                key={idx}
                                className="relative flex-shrink-0 snap-center"
                            >
                                <button
                                    onClick={() => setCurrentIndex(idx)}
                                    className={`relative block w-24 aspect-video transition-all duration-500 overflow-hidden ${idx === currentIndex
                                        ? "scale-110"
                                        : "opacity-40 hover:opacity-100 scale-100"
                                        }`}
                                    style={{ borderRadius: '4px' }}
                                >
                                    <div className={`absolute inset-0 border-2 transition-colors duration-500 z-20 ${idx === currentIndex ? "border-primary" : "border-white/10"
                                        }`} style={{ borderRadius: '4px' }} />
                                    <div className="absolute inset-0 overflow-hidden" style={{ borderRadius: '4px' }}>
                                        <img
                                            src={img}
                                            alt={`Thumbnail ${idx + 1}`}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    {idx === currentIndex && (
                                        <div className="absolute inset-0 shadow-[0_0_25px_rgba(225,6,0,0.5)] pointer-events-none z-10" style={{ borderRadius: '4px' }} />
                                    )}
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
