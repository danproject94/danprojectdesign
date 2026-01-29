// Auxiliar para resolver assets dinamicamente do src/assets/portfolio
const portfolioAssets = import.meta.glob('../assets/portfolio/**/*.{webp,png,jpg}', { eager: true, import: 'default' }) as Record<string, string>;

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
    layout?: 'balanced' | 'portrait';
}

export interface PortfolioCategory {
    id: string;
    title: string;
    category: string;
    icon: string;
    description?: string;
    coverImage: string;
    clients: ClientProject[];
}

export const portfolioCategories: PortfolioCategory[] = [
    {
        id: "streamers-criadores",
        title: "Streamers & Criadores",
        category: "Streamers & Criadores",
        icon: "sports_esports",
        description: "Identidades completas para streamers e criadores de conteúdo que querem presença profissional e visual memorável. \n\nPacote completo de overlays, alertas e telas para qualquer plataforma stream.",
        coverImage: resolveAsset("cards/pack-stream-card.webp"),
        clients: [
            {
                id: "pack-stream-dexvyc",
                clientName: "Dexvyc",
                description: "Pack stream desenvolvido para o streamer Dexvyc, com conceito inspirado em magia e necromancia. \n\nArtes ilustradas destacam um mago necromante como avatar central, combinando tons de roxo com detalhes em vermelho e laranja para simbolizar o fogo, criando uma identidade visual marcante para o canal.",
                images: [
                    resolveAsset("pack-stream/dexvyc/PackStream-Image-00.webp"),
                    resolveAsset("pack-stream/dexvyc/PackStream-Image-01.webp"),
                    resolveAsset("pack-stream/dexvyc/PackStream-Image-02.webp"),
                    resolveAsset("pack-stream/dexvyc/PackStream-Image-03.webp"),
                    resolveAsset("pack-stream/dexvyc/PackStream-Image-04.webp"),
                    resolveAsset("pack-stream/dexvyc/PackStream-Image-05.webp"),
                    resolveAsset("pack-stream/dexvyc/PackStream-Image-06.webp")
                ],
                layout: 'balanced'
            },
            {
                id: "pack-stream-raulsussu",
                clientName: "Raul Sussu",
                description: "Identidade visual completa desenvolvida para o streamer Raul Sussu, criador focado em gameplay de jogos FPS e conteúdo competitivo. \n\nO projeto utiliza uma paleta em vermelho e azul escuro, com referências diretas ao universo dos FPS, destacando a intensidade das partidas, a alta performance em gameplay e a interação constante com o chat.",
                images: [
                    resolveAsset("pack-stream/raulsussu/PackStream-Imagem-01.webp"),
                    resolveAsset("pack-stream/raulsussu/PackStream-Imagem-02.webp"),
                    resolveAsset("pack-stream/raulsussu/PackStream-Imagem-03.webp"),
                    resolveAsset("pack-stream/raulsussu/PackStream-Imagem-04.webp"),
                    resolveAsset("pack-stream/raulsussu/PackStream-Imagem-05.webp")
                ],
                layout: 'balanced'
            },
            {
                id: "pack-stream-draco",
                clientName: "Draco",
                description: "Pack stream criado para o Draco, explorando o encontro entre estética anime e ficção cósmica. \n\nTons de amarelo e roxo se fundem a efeitos futuristas e elementos de galáxia, criando uma identidade visual que transmite energia, fantasia e imersão — perfeita para gameplays como Genshin Impact e outros mundos mágicos.",
                images: [
                    resolveAsset("pack-stream/dracosvp/PackStream-Imagem01.webp"),
                    resolveAsset("pack-stream/dracosvp/PackStream-Imagem02.webp"),
                    resolveAsset("pack-stream/dracosvp/PackStream-Imagem03.webp"),
                    resolveAsset("pack-stream/dracosvp/PackStream-Imagem04.webp"),
                    resolveAsset("pack-stream/dracosvp/PackStream-Imagem05.webp"),
                    resolveAsset("pack-stream/dracosvp/PackStream-Imagem06.webp")
                ],
                layout: 'balanced'
            },
            {
                id: "pack-stream-mattheusdrt",
                clientName: "Mattheus DRT",
                description: "Pack Stream desenvolvido para o Mattheus DRT, pensado para jogos de tiro, ação e terror. \n\nO pack stream aposta em vermelho, amarelo e preto com uma linguagem urbana, crua e intensa, trazendo o clima de rua para a tela e amplificando a pressão, o ritmo e a agressividade da gameplay.",
                images: [
                    resolveAsset("pack-stream/mattheusdrt/PackStream-Imagem01.webp"),
                    resolveAsset("pack-stream/mattheusdrt/PackStream-Imagem02.webp"),
                    resolveAsset("pack-stream/mattheusdrt/PackStream-Imagem03.webp"),
                    resolveAsset("pack-stream/mattheusdrt/PackStream-Imagem04.webp"),
                    resolveAsset("pack-stream/mattheusdrt/PackStream-Imagem05.webp")
                ],
                layout: 'balanced'
            },
            {
                id: "pack-stream-maginaxp",
                clientName: "MaginaXP",
                description: "Pack Stream totalmente inspirado no universo Pokémon, criado para o streamer MaginaXP. \n\nA identidade visual resgata a nostalgia dos games clássicos como Pokémon, Mario Bros e Zelda, usando referências retrô e elementos icônicos para criar uma experiência acolhedora, divertida e cheia de memória afetiva.",
                images: [
                    resolveAsset("pack-stream/maginaxp/PackStream-Imagem00.webp"),
                    resolveAsset("pack-stream/maginaxp/PackStream-Imagem01.webp"),
                    resolveAsset("pack-stream/maginaxp/PackStream-Imagem02.webp"),
                    resolveAsset("pack-stream/maginaxp/PackStream-Imagem03.webp"),
                    resolveAsset("pack-stream/maginaxp/PackStream-Imagem04.webp")
                ],
                layout: 'balanced'
            }
        ]
    },
    {
        id: "marcas-gamer-tech",
        title: "Marcas Gamer & Tech",
        category: "Marcas Gamer & Tech",
        icon: "brush",
        description: "Artes e banners desenvolvidos para marcas gamer e tech, com foco em destacar produtos, performance e posicionamento visual em ambientes digitais competitivos.",
        coverImage: resolveAsset("cards/marcas-gamer-tech-card.webp"),
        clients: [
            {
                id: "marcas-gamer-tech-powertec",
                clientName: "Powertec Gaming",
                description: "A Powertec Gaming surgiu de uma paixão familiar por tecnologia e games, com o propósito de entregar PCs gamer de alta performance com personalidade e confiança. \n\nDesde suas origens, a marca carrega dedicação, cuidado e compromisso com qualidade real.\n\nAs artes e banners promocionais foram desenvolvidos com uma estética agressiva e high-tech, destacando configurações de alto desempenho e periféricos premium. \n\nCada peça visual reforça o posicionamento da Powertec como uma marca brasileira focada em potência, transparência e conexão com a comunidade gamer.",
                images: [
                    resolveAsset("marcas-gamer-tech/powertechgaming/Artes-01.webp"),
                    resolveAsset("marcas-gamer-tech/powertechgaming/Artes-02.webp"),
                    resolveAsset("marcas-gamer-tech/powertechgaming/Artes-03.webp"),
                    resolveAsset("marcas-gamer-tech/powertechgaming/Artes-04.webp"),
                    resolveAsset("marcas-gamer-tech/powertechgaming/Artes-05.webp"),
                    resolveAsset("marcas-gamer-tech/powertechgaming/Artes-06.webp")
                ],
                layout: 'portrait'
            },
            {
                id: "marcas-gamer-tech-gamemax",
                clientName: "Gamemax Brasil",
                description: "Crio artes para a Gamemax desde 2021, com foco na divulgação de produtos no mercado brasileiro. \n\nO trabalho envolve peças visuais para fontes, gabinetes, aircoolers, watercoolers e ventoinhas, mantendo consistência visual, apelo gamer/tech e alinhamento com a identidade da marca.",
                images: [
                    resolveAsset("marcas-gamer-tech/gamemax/Banner-Fans-Desktop.webp"),
                    resolveAsset("marcas-gamer-tech/gamemax/Banner-FontesGX-Desktop.webp"),
                    resolveAsset("marcas-gamer-tech/gamemax/Banner-GabineteVista-Desktop.webp"),
                    resolveAsset("marcas-gamer-tech/gamemax/Banner-Iceburg360-Desktop.webp"),
                    resolveAsset("marcas-gamer-tech/gamemax/Banner-Sigma520-Desktop.webp"),
                    resolveAsset("marcas-gamer-tech/gamemax/BannerAmazon00.webp"),
                    resolveAsset("marcas-gamer-tech/gamemax/BannerAmazon01.webp"),
                    resolveAsset("marcas-gamer-tech/gamemax/BannerAmazon02.webp"),
                    resolveAsset("marcas-gamer-tech/gamemax/BannerAmazon03.webp"),
                    resolveAsset("marcas-gamer-tech/gamemax/BannerAmazon04.webp")
                ],
                layout: 'balanced'
            }
        ]
    },
    {
        id: "identidades-visuais",
        title: "Identidades Visuais",
        category: "Identidades Visuais",
        icon: "palette",
        description: "Identidades visuais completas desenvolvidas para profissionais e empresas, com foco em posicionamento claro, personalidade visual e aplicação consistente em todos os pontos de contato da marca.",
        coverImage: resolveAsset("cards/identidades-visuais-card.webp"),
        clients: [
            {
                id: "identidade-visual-maira",
                clientName: "Maíra Falavina",
                description: "Identidade visual desenvolvida para Maíra Falavina, fisioterapeuta pélvica especializada na saúde da mulher.\n\nO projeto traduz seu perfil alto astral e sua conexão com a natureza através do girassol como ícone central e de uma paleta em roxo e lilás, criando uma marca acolhedora, feminina e sensível, sem perder profissionalismo e autoridade na área da saúde.",
                images: [
                    resolveAsset("outros-projetos/identidade-visual/mairafalavina/Marca-MairaFalavina-Imagem01.webp"),
                    resolveAsset("outros-projetos/identidade-visual/mairafalavina/Marca-MairaFalavina-Imagem02.webp"),
                    resolveAsset("outros-projetos/identidade-visual/mairafalavina/Marca-MairaFalavina-Imagem03.webp"),
                    resolveAsset("outros-projetos/identidade-visual/mairafalavina/Marca-MairaFalavina-Imagem04.webp"),
                    resolveAsset("outros-projetos/identidade-visual/mairafalavina/Marca-MairaFalavina-Imagem05.webp"),
                    resolveAsset("outros-projetos/identidade-visual/mairafalavina/Marca-MairaFalavina-Imagem06.webp"),
                    resolveAsset("outros-projetos/identidade-visual/mairafalavina/Marca-MairaFalavina-Imagem07.webp"),
                    resolveAsset("outros-projetos/identidade-visual/mairafalavina/Marca-MairaFalavina-Imagem08.webp"),
                    resolveAsset("outros-projetos/identidade-visual/mairafalavina/Marca-MairaFalavina-Imagem09.webp"),
                    resolveAsset("outros-projetos/identidade-visual/mairafalavina/Marca-MairaFalavina-Imagem10.webp"),
                    resolveAsset("outros-projetos/identidade-visual/mairafalavina/Marca-MairaFalavina-Imagem11.webp"),
                    resolveAsset("outros-projetos/identidade-visual/mairafalavina/Marca-MairaFalavina-Imagem12.webp")
                ],
                layout: 'balanced'
            },
            {
                id: "identidade-visual-tamires",
                clientName: "Tamires Seguchi",
                description: "Criação de identidade visual para Tamires Seguchi, especialista em estética e terapia natural.\n\nA marca nasceu com o propósito de cuidar do corpo, da pele e da alma, refletindo o uso de produtos terapêuticos e naturais. O visual transmite equilíbrio, cuidado e conexão, alinhando estética, saúde e bem-estar em uma linguagem suave e confiável.",
                images: [
                    resolveAsset("outros-projetos/identidade-visual/tamiresseguchi/Slide1.webp"),
                    resolveAsset("outros-projetos/identidade-visual/tamiresseguchi/Slide2.webp"),
                    resolveAsset("outros-projetos/identidade-visual/tamiresseguchi/Slide3.webp"),
                    resolveAsset("outros-projetos/identidade-visual/tamiresseguchi/Slide4.webp"),
                    resolveAsset("outros-projetos/identidade-visual/tamiresseguchi/Slide5.webp"),
                    resolveAsset("outros-projetos/identidade-visual/tamiresseguchi/Slide6.webp"),
                    resolveAsset("outros-projetos/identidade-visual/tamiresseguchi/Slide7.webp"),
                    resolveAsset("outros-projetos/identidade-visual/tamiresseguchi/Slide8.webp"),
                    resolveAsset("outros-projetos/identidade-visual/tamiresseguchi/Slide9.webp")
                ],
                layout: 'balanced'
            },
            {
                id: "identidade-visual-construforte",
                clientName: "Construforte Construtora",
                description: "Identidade visual desenvolvida para a Construforte Construtora, empresa do ramo da construção civil focada em transformar necessidades em realizações concretas.\n\nO projeto reforça valores como segurança, confiança e autoridade, representando a experiência de construir desde a casa própria até projetos personalizados, sempre com solidez e compromisso com o sonho de cada cliente.",
                images: [
                    resolveAsset("outros-projetos/identidade-visual/construforteconstrutora/Slide1.webp"),
                    resolveAsset("outros-projetos/identidade-visual/construforteconstrutora/Slide2.webp"),
                    resolveAsset("outros-projetos/identidade-visual/construforteconstrutora/Slide3.webp"),
                    resolveAsset("outros-projetos/identidade-visual/construforteconstrutora/Slide4.webp"),
                    resolveAsset("outros-projetos/identidade-visual/construforteconstrutora/Slide5.webp"),
                    resolveAsset("outros-projetos/identidade-visual/construforteconstrutora/Slide6.webp"),
                    resolveAsset("outros-projetos/identidade-visual/construforteconstrutora/Slide7.webp"),
                    resolveAsset("outros-projetos/identidade-visual/construforteconstrutora/Slide8.webp")
                ],
                layout: 'balanced'
            }
        ]
    },
    {
        id: "social-media-posts",
        title: "Social Media & Posts",
        category: "Social Media & Posts",
        icon: "photo_library",
        description: "Artes e posts desenvolvidos para redes sociais, com foco em engajamento visual, consistência de marca e comunicação estratégica em plataformas digitais.",
        coverImage: resolveAsset("cards/social-media-card.webp"),
        clients: [
            {
                id: "social-media-lsmotors",
                clientName: "LS Motors",
                description: "Identidade e posicionamento desenvolvidos para a LS Motors, marca fundada em 2024 com a missão de elevar a experiência de motociclistas e entusiastas do automobilismo.\n\nO projeto visual reflete adrenalina, performance e comunidade, acompanhando uma gama completa de serviços que vai do transporte e armazenamento seguro de motocicletas à organização de eventos esportivos e cursos de pilotagem.\n\nMais do que uma empresa, a LS Motors se apresenta como um ponto de encontro para quem vive motores, velocidade e liberdade como estilo de vida.",
                images: [
                    resolveAsset("outros-projetos/social-media/lsmotors/LS-Imagem01.webp"),
                    resolveAsset("outros-projetos/social-media/lsmotors/LS-Imagem02.webp"),
                    resolveAsset("outros-projetos/social-media/lsmotors/LS-Imagem03.webp"),
                    resolveAsset("outros-projetos/social-media/lsmotors/LS-Imagem04.webp"),
                    resolveAsset("outros-projetos/social-media/lsmotors/LS-Imagem05.webp"),
                    resolveAsset("outros-projetos/social-media/lsmotors/LS-Imagem06.webp"),
                    resolveAsset("outros-projetos/social-media/lsmotors/LS-Imagem07.webp"),
                    resolveAsset("outros-projetos/social-media/lsmotors/LS-Imagem08.webp"),
                    resolveAsset("outros-projetos/social-media/lsmotors/LS-Imagem09.webp"),
                    resolveAsset("outros-projetos/social-media/lsmotors/LS-Imagem10.webp")
                ],
                layout: 'portrait'
            },
            {
                id: "social-media-kings",
                clientName: "Kings Racing School",
                description: "Identidade e posicionamento desenvolvidos para a Kings Racing School, uma das maiores escolas de pilotagem do Brasil.\n\nFundada em 2010 por amantes da motovelocidade, a Kings cresceu junto com a comunidade do esporte e marcou a história ao realizar, em 2018, o primeiro Track Day noturno da América Latina no Autódromo de Interlagos.\n\nHoje, consolidada entre as três maiores escolas do país, a marca traduz experiência, inovação e paixão pela pilotagem em cada evento realizado ao longo do ano.",
                images: [
                    resolveAsset("outros-projetos/social-media/kingsracingschool/Kings-01.webp"),
                    resolveAsset("outros-projetos/social-media/kingsracingschool/Kings-02.webp"),
                    resolveAsset("outros-projetos/social-media/kingsracingschool/Kings-03.webp"),
                    resolveAsset("outros-projetos/social-media/kingsracingschool/Kings-04.webp"),
                    resolveAsset("outros-projetos/social-media/kingsracingschool/Kings-05.webp"),
                    resolveAsset("outros-projetos/social-media/kingsracingschool/Kings-06.webp")
                ],
                layout: 'portrait'
            }
        ]
    },
    {
        id: "sites-projetos",
        title: "Sites & Projetos",
        category: "Sites & Projetos",
        icon: "code",
        description: "Desenvolvimento de sites e projetos digitais com foco em experiência do usuário, design responsivo e performance.",
        coverImage: resolveAsset("cards/sites-projetos-card.webp"),
        clients: []
    }
];
