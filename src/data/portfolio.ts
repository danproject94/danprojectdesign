// Auxiliar para resolver assets dinamicamente do src/assets/portfolio
const portfolioAssets = import.meta.glob('../assets/portfolio/**/*.webp', { eager: true, import: 'default' }) as Record<string, string>;

const resolveAsset = (path: string) => {
    // Remove o prefixo /portfolio/ se existir para normalizar
    const cleanPath = path.startsWith('/portfolio/') ? path.replace('/portfolio/', '') : path;
    const assetPath = `../assets/portfolio/${cleanPath}`;
    return portfolioAssets[assetPath] || path;
};

export interface ClientProject {
    id: string;
    clientName: string;
    description?: string;
    images: string[];
}

export interface PortfolioCategory {
    id: string;
    title: string;
    category: string;
    icon: string;
    description: string;
    coverImage: string;
    clients: ClientProject[];
}

export const portfolioCategories: PortfolioCategory[] = [
    {
        id: "pack-stream",
        title: "Pack Stream",
        category: "Pack Stream",
        icon: "sports_esports",
        description: "Identidades completas para streamers que querem presença profissional e visual memorável. Pacote completo de overlays, alertas e telas para streamers em qualquer plataforma stream.",
        coverImage: resolveAsset("pack_stream_card.webp"),
        clients: [
            {
                id: "pack-stream-dexvyc",
                clientName: "Dexvyc",
                description: "Pack stream desenvolvido para o streamer Dexvyc, com conceito inspirado em magia e necromancia. \n\nArtes ilustradas destacam um mago necromante como avatar central, combinando tons de roxo com detalhes em vermelho e laranja para simbolizar o fogo, criando uma identidade visual marcante para o canal.",
                images: [
                    resolveAsset("pack-stream/client-1/PackStream-Image-00.webp"),
                    resolveAsset("pack-stream/client-1/PackStream-Image-01.webp"),
                    resolveAsset("pack-stream/client-1/PackStream-Image-02.webp"),
                    resolveAsset("pack-stream/client-1/PackStream-Image-03.webp"),
                    resolveAsset("pack-stream/client-1/PackStream-Image-04.webp"),
                    resolveAsset("pack-stream/client-1/PackStream-Image-05.webp"),
                    resolveAsset("pack-stream/client-1/PackStream-Image-06.webp")
                ]
            },
            {
                id: "pack-stream-raul-sussu",
                clientName: "Raul Sussu",
                description: "Identidade visual completa desenvolvida para o streamer Raul Sussu, criador focado em gameplay de jogos FPS e conteúdo competitivo. \n\nO projeto utiliza uma paleta em vermelho e azul escuro, com referências diretas ao universo dos FPS, destacando a intensidade das partidas, a alta performance em gameplay e a interação constante com o chat.",
                images: [
                    resolveAsset("pack-stream/client-2/PackStream-Imagem-01.webp"),
                    resolveAsset("pack-stream/client-2/PackStream-Imagem-02.webp"),
                    resolveAsset("pack-stream/client-2/PackStream-Imagem-03.webp"),
                    resolveAsset("pack-stream/client-2/PackStream-Imagem-04.webp"),
                    resolveAsset("pack-stream/client-2/PackStream-Imagem-05.webp")
                ]
            }
        ]
    },
    {
        id: "artes-graficas",
        title: "Artes Tech",
        category: "Artes Gráficas",
        icon: "brush",
        description: "Artes para criadores, equipes, comunidades e projetos digitais. Banners de alta resolução pensados para atrair audiência nas redes sociais e sites.",
        coverImage: resolveAsset("artes_graficas_card.webp"),
        clients: [
            {
                id: "artes-tech-powertec",
                clientName: "Powertec Gaming",
                description: "A Powertec Gaming surgiu de uma paixão familiar por tecnologia e games, com o propósito de entregar PCs gamer de alta performance com personalidade e confiança. \n\nDesde suas origens, a marca carrega dedicação, cuidado e compromisso com qualidade real.\n\nAs artes e banners promocionais foram desenvolvidos com uma estética agressiva e high-tech, destacando configurações de alto desempenho e periféricos premium. \n\nCada peça visual reforça o posicionamento da Powertec como uma marca brasileira focada em potência, transparência e conexão com a comunidade gamer.",
                images: [
                    resolveAsset("artes-tech/client-1/Artes-01.webp"),
                    resolveAsset("artes-tech/client-1/Artes-02.webp"),
                    resolveAsset("artes-tech/client-1/Artes-03.webp"),
                    resolveAsset("artes-tech/client-1/Artes-04.webp"),
                    resolveAsset("artes-tech/client-1/Artes-05.webp")
                ]
            },
            {
                id: "artes-tech-gamemax",
                clientName: "Gamemax",
                description: "Crio artes para a Gamemax desde 2021, com foco na divulgação de produtos no mercado brasileiro. \n\nO trabalho envolve peças visuais para fontes, gabinetes, aircoolers, watercoolers e ventoinhas, mantendo consistência visual, apelo gamer/tech e alinhamento com a identidade da marca.",
                images: [
                    resolveAsset("artes-tech/client-2/Artes-01.webp"),
                    resolveAsset("artes-tech/client-2/Artes-02.webp"),
                    resolveAsset("artes-tech/client-2/Artes-03.webp"),
                    resolveAsset("artes-tech/client-2/Artes-04.webp"),
                    resolveAsset("artes-tech/client-2/Artes-05.webp"),
                    resolveAsset("artes-tech/client-2/Artes-06.webp"),
                    resolveAsset("artes-tech/client-2/Artes-07.webp"),
                    resolveAsset("artes-tech/client-2/Artes-08.webp"),
                    resolveAsset("artes-tech/client-2/Artes-09.webp"),
                    resolveAsset("artes-tech/client-2/Artes-010.webp"),
                    resolveAsset("artes-tech/client-2/Artes-011.webp"),
                    resolveAsset("artes-tech/client-2/Artes-012.webp"),
                    resolveAsset("artes-tech/client-2/Artes-013.webp")
                ]
            }
        ]
    },
    {
        id: "identidade-visual",
        title: "Identidade Visual",
        category: "Identidade Visual",
        icon: "design_services",
        description: "Marcas, profissionais e empresas que precisam comunicar autoridade. Kits de branding completos incluindo logos, tipografia e manuais de marca.",
        coverImage: resolveAsset("identidade_visual_card.webp"),
        clients: [
            {
                id: "identidade-visual-beater",
                clientName: "Beater",
                description: "Criação da marca Beater. Uma identidade visual minimalista e impactante, focada em formas orgânicas e um conceito premium que transita bem entre o digital e o físico.",
                images: [
                    resolveAsset("identidade-visual/client-1/Identidade-Visual-01.webp"),
                    resolveAsset("identidade-visual/client-1/Identidade-Visual-02.webp"),
                    resolveAsset("identidade-visual/client-1/Identidade-Visual-03.webp"),
                    resolveAsset("identidade-visual/client-1/Identidade-Visual-04.webp"),
                    resolveAsset("identidade-visual/client-1/Identidade-Visual-05.webp"),
                    resolveAsset("identidade-visual/client-1/Identidade-Visual-06.webp"),
                    resolveAsset("identidade-visual/client-1/Identidade-Visual-07.webp"),
                    resolveAsset("identidade-visual/client-1/Identidade-Visual-08.webp")
                ]
            }
        ]
    }
];
