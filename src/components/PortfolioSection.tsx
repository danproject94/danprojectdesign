import { motion } from "framer-motion";
import { portfolioCategories } from "../data/portfolio";
import { Link } from "react-router-dom";

export default function PortfolioSection() {
    const projects = portfolioCategories;

    return (
        <section id="portfolio" className="w-full px-6 lg:px-[120px] py-16 md:py-24 relative min-h-screen flex flex-col justify-center overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute inset-0 cyber-grid-bg opacity-10 pointer-events-none"></div>
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none"></div>

            <div className="relative z-10 mb-20 flex flex-col md:flex-row items-center md:items-end justify-between gap-8 border-b border-[#2A2A33] pb-10">
                <div className="max-w-2xl text-center md:text-left">
                    <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
                        <div className="h-px w-12 bg-primary"></div>
                        <span className="text-[10px] font-mono text-primary uppercase tracking-[0.4em]">Selected Works // 2026</span>
                    </div>
                    <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tighter text-white leading-[0.8]">
                        Projetos <br /><span className="text-text-gray/40 italic">Selecionados</span>
                    </h2>
                </div>
                <div className="hidden md:flex flex-col items-end gap-2 pr-4 border-r border-primary/20">
                    <span className="text-[10px] font-mono text-text-gray/60 uppercase">System Status</span>
                    <div className="flex gap-1">
                        <span className="w-1.5 h-1.5 bg-primary animate-pulse"></span>
                        <span className="w-1.5 h-1.5 bg-primary animate-pulse delay-75"></span>
                        <span className="w-1.5 h-1.5 bg-primary animate-pulse delay-150"></span>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 relative z-10">
                {projects.map((project, index) => (
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0, scale: 0.95, y: 30 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        whileHover={{ y: -10 }}
                        className="group relative bg-[#0B0B0C] border border-[#1A1A1D] transition-all duration-500 hover:border-primary/40"
                    >
                        {/* Project Image Container */}
                        <Link to={`/portfolio/${project.id}`} className="block relative aspect-video w-full overflow-hidden bg-black">
                            {/* Project Background Image */}
                            <div
                                className="absolute inset-0 h-full w-full bg-contain bg-no-repeat bg-center transition-transform duration-1000 group-hover:scale-105 z-0"
                                style={{ backgroundImage: `url("${project.coverImage}")` }}
                            ></div>
                        </Link>

                        {/* Project Info */}
                        <div className="p-8 relative">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="font-display text-2xl font-bold text-white uppercase group-hover:text-primary transition-colors tracking-tight">{project.title}</h3>
                                <span className="material-symbols-outlined text-text-gray/40 group-hover:text-primary transition-colors text-xl">{project.icon}</span>
                            </div>
                            <p className="text-sm text-text-gray/60 font-light leading-relaxed italic mb-6">
                                "{project.description}"
                            </p>

                            <div className="flex items-center justify-between">
                                <Link to={`/portfolio/${project.id}`} className="text-[10px] font-mono text-text-gray hover:text-primary uppercase tracking-[0.2em] transition-colors border-b border-white/5 py-1">
                                    Ver Detalhes Project //
                                </Link>
                                <div className="flex gap-1">
                                    <div className="w-1 h-1 bg-white/10 group-hover:bg-primary transition-colors"></div>
                                    <div className="w-4 h-1 bg-white/10 group-hover:bg-primary/50 transition-colors"></div>
                                </div>
                            </div>
                        </div>

                        {/* Hover Border Accents */}
                        <div className="absolute top-0 left-0 w-1 h-0 group-hover:h-full bg-primary transition-all duration-500"></div>
                        <div className="absolute bottom-0 right-0 w-0 h-1 group-hover:w-full bg-primary transition-all duration-500 delay-100"></div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
