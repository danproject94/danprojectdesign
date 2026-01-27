import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function HeroSection() {
    const [textIndex, setTextIndex] = useState(0);
    const [displayText, setDisplayText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    const phrases = ["um pack stream", "uma marca", "um site", "uma arte digital", "uma identidade visual"];
    const typingSpeed = isDeleting ? 40 : 80;
    const pauseTime = 2500;

    useEffect(() => {
        const currentPhrase = phrases[textIndex];

        const timeout = setTimeout(() => {
            if (!isDeleting) {
                setDisplayText(currentPhrase.substring(0, displayText.length + 1));
                if (displayText.length === currentPhrase.length) {
                    setTimeout(() => setIsDeleting(true), pauseTime);
                }
            } else {
                setDisplayText(currentPhrase.substring(0, displayText.length - 1));
                if (displayText.length === 0) {
                    setIsDeleting(false);
                    setTextIndex((prev) => (prev + 1) % phrases.length);
                }
            }
        }, typingSpeed);

        return () => clearTimeout(timeout);
    }, [displayText, isDeleting, textIndex]);

    return (
        <section className="relative w-full overflow-hidden border-b border-[#2A2A33] min-h-[90vh] flex items-center justify-center">
            <div className="absolute bottom-20 right-20 flex flex-col gap-2 items-end hidden lg:flex pointer-events-none">
                <div className="h-px w-32 bg-primary/50"></div>
                <div className="text-xs font-mono text-primary/50 uppercase tracking-widest">Project 2026 // Ready</div>
                <div className="h-px w-16 bg-primary/30"></div>
            </div>

            <div className="relative z-10 w-full px-6 lg:px-[120px]">
                <div className="relative w-full pt-8 md:pt-12 pb-12 md:pb-24">
                    <div className="relative">
                        {/* Decorative left border - Refined to match text group height */}
                        <motion.div
                            initial={{ height: 0 }}
                            animate={{ height: "100%" }}
                            transition={{ duration: 1, delay: 0.5 }}
                            className="absolute -left-8 top-0 bottom-0 w-1 bg-[#2A2A33] hidden md:block"
                        >
                            <div className="absolute top-0 left-0 w-full h-24 bg-primary"></div>
                            <div className="absolute bottom-0 left-0 w-full h-8 bg-primary"></div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="mb-6 flex items-center justify-start gap-3"
                        >
                            <span className="px-3 py-1 border border-primary text-primary text-[10px] md:text-xs font-bold uppercase tracking-widest bg-primary/5">Disponível para contratação</span>
                            <span className="text-text-gray/50 text-[10px] md:text-xs tracking-widest">/// 2026</span>
                        </motion.div>

                        {/* Integrated CTA Banner as the Primary Heading - Full Width */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="mb-8 w-full"
                        >
                            <div className="w-full md:w-full lg:w-full flex flex-col md:flex-row items-center justify-between gap-6 md:gap-10 bg-[#E10600] p-5 md:p-8 group hover:bg-[#ff0700] transition-all duration-300 shadow-[0_0_60px_rgba(225,6,0,0.5)] relative overflow-hidden h-auto md:min-h-0">
                                <div className="flex flex-col items-start md:items-start text-left md:text-left z-10 w-full md:w-auto">
                                    <h2 className="font-display text-sm md:text-2xl font-bold uppercase text-white mb-2">
                                        Seu projeto merece mais do que o comum.
                                    </h2>
                                    <div className="min-h-[5rem] md:min-h-[3rem] flex items-center w-full">
                                        <p className="font-display text-3xl md:text-4xl lg:text-6xl font-bold uppercase text-white tracking-tighter leading-[1.3] md:leading-[1.2] break-words hyphens-none">
                                            Comece agora com <span className="bg-white text-black pl-2 pr-4 mx-0 italic inline [box-decoration-break:clone] [-webkit-box-decoration-break:clone] select-none hyphens-none break-words align-middle">
                                                {displayText}
                                                <span className="animate-pulse ml-1">|</span>
                                            </span> que impõe respeito.
                                        </p>
                                    </div>
                                </div>
                                <span className="material-symbols-outlined text-4xl md:text-6xl text-white group-hover:translate-x-4 group-hover:-translate-y-4 transition-transform hidden lg:block z-10 opacity-40 group-hover:opacity-100 shrink-0">
                                    arrow_outward
                                </span>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                            className="flex flex-wrap justify-start gap-4"
                        >
                            <a href="https://wa.me/5519995732513?text=Ol%C3%A1%2C%20Dan!%0AEncontrei%20o%20DanProject%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto%20de%20pack%20stream%20%2F%20marca%20%2F%20identidade%20visual.%0APode%20me%20explicar%20como%20funciona%20o%20processo%20e%20os%20pr%C3%B3ximos%20passos%3F" target="_blank" className="w-full md:w-auto tech-clip-btn inline-flex cursor-pointer items-center justify-center bg-primary px-8 md:px-10 py-3 md:py-4 text-base md:text-lg font-display font-bold uppercase tracking-widest text-white hover:bg-white hover:text-primary transition-all shadow-[0_0_20px_rgba(225,6,0,0.5)]">
                                Entrar em Contato
                            </a>
                            <a href="#portfolio" className="w-full md:w-auto tech-clip-btn inline-flex cursor-pointer items-center justify-center border border-[#2A2A33] bg-surface-dark/50 backdrop-blur-sm px-8 md:px-10 py-3 md:py-4 text-base md:text-lg font-display font-bold uppercase tracking-widest text-white hover:border-primary hover:text-primary transition-all group">
                                <span className="group-hover:translate-x-1 transition-transform">Ver Projetos</span>
                                <span className="material-symbols-outlined ml-2 group-hover:translate-x-1 transition-transform">arrow_forward</span>
                            </a>
                        </motion.div>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-0 left-0 w-full h-8 bg-[#0B0B0E] border-t border-[#2A2A33] flex items-center overflow-hidden z-20">
                <div className="flex items-center gap-8 whitespace-nowrap animate-[marquee_20s_linear_infinite] opacity-50">
                    {/* Repeated content for marquee. Using array to generate. */}
                    {Array(4).fill(null).map((_, i) => (
                        <div key={i} className="flex gap-8 items-center">
                            <span className="text-sm font-mono text-primary uppercase">/// GAMING INSPIRATION</span>
                            <span className="text-sm font-mono text-white uppercase">VISUAL IDENTITY</span>
                            <span className="text-sm font-mono text-primary uppercase">/// STREAM PACKS</span>
                            <span className="text-sm font-mono text-white uppercase">ORIGINAL BRANDING</span>
                            <span className="text-sm font-mono text-primary uppercase">/// SOCIAL MEDIA</span>
                            <span className="text-sm font-mono text-white uppercase">GRAPHIC PERSONALITY</span>
                        </div>
                    ))}
                </div>
            </div>

            <style>
                {`
            @keyframes marquee {
                0% { transform: translateX(0); }
                100% { transform: translateX(-50%); }
            }
        `}
            </style>
        </section>
    );
}
