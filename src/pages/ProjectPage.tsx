import { useParams, Link } from 'react-router-dom';
import { portfolioCategories } from '../data/portfolio';
import ImageCarousel from '../components/ImageCarousel';
import { useEffect } from 'react';

export default function ProjectPage() {
    const { id } = useParams<{ id: string }>();
    const category = portfolioCategories.find(c => c.id === id);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!category) {
        return (
            <div className="min-h-screen bg-background-dark text-white flex flex-col items-center justify-center">
                <h1 className="text-4xl font-display mb-4">Projeto não encontrado</h1>
                <Link to="/#portfolio" className="text-primary hover:underline">Voltar para Home</Link>
            </div>
        );
    }

    return (
        <>
            <main className="pt-24 pb-16 px-4 md:px-[120px]">
                {/* Header da Categoria */}
                <div className="mb-16 border-b border-[#2A2A33] pb-8">
                    <Link to="/#portfolio" className="inline-flex items-center gap-2 text-text-gray hover:text-primary mb-6 transition-colors">
                        <span className="material-symbols-outlined text-sm">arrow_back</span>
                        <span className="text-sm font-mono uppercase tracking-wider">Voltar</span>
                    </Link>

                    <div className="flex items-center gap-4 mb-4">
                        <span className="material-symbols-outlined text-4xl text-primary">{category.icon}</span>
                        <h1 className="font-display text-5xl md:text-6xl font-bold uppercase">{category.title}</h1>
                    </div>
                    <p className="text-xl text-text-gray max-w-3xl font-light">{category.description}</p>
                </div>

                {/* Lista de Clientes / Projetos dessa Categoria */}
                <div className="flex flex-col gap-24">
                    {category.clients.length > 0 ? (
                        category.clients.map((client) => {
                            const isPortrait = client.layout === 'portrait';

                            return (
                                <section
                                    key={client.id}
                                    className={`grid grid-cols-1 gap-8 lg:gap-16 py-12 border-b border-[#2A2A33]/50 last:border-0 ${isPortrait
                                        ? 'lg:grid-cols-12'
                                        : 'lg:grid-cols-2'
                                        }`}
                                >
                                    {/* Coluna do Carrossel */}
                                    <div className={`${isPortrait
                                        ? 'lg:col-span-5'
                                        : 'lg:col-span-1'
                                        }`}>
                                        <ImageCarousel images={client.images} />
                                    </div>

                                    {/* Coluna de Texto */}
                                    <div className={`flex flex-col justify-center ${isPortrait
                                        ? 'lg:col-span-7'
                                        : 'lg:col-span-1'
                                        }`}>
                                        <div className="sticky top-24">
                                            <h2 className="font-display text-3xl md:text-4xl font-bold uppercase text-white mb-6 border-l-4 border-primary pl-6">
                                                {client.clientName}
                                            </h2>
                                            {client.description && (
                                                <div className="pl-7 border-l border-[#2A2A33] ml-[2px] space-y-4">
                                                    {client.description.split('\n\n').map((paragraph, idx) => (
                                                        <p key={idx} className="text-text-gray text-lg leading-snug font-light" style={{ hyphens: 'none' }}>
                                                            {paragraph}
                                                        </p>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </section>
                            );
                        })
                    ) : (
                        <div className="p-12 border border-dashed border-[#2A2A33] rounded-lg text-center">
                            <p className="text-text-gray font-mono uppercase">Em breve: Mais projetos nesta categoria.</p>
                        </div>
                    )}
                </div>
            </main>
        </>
    );
}
