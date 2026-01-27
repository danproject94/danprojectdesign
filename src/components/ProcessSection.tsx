import { motion } from "framer-motion";

export default function ProcessSection() {
    const creations = [
        { number: "01", title: "Pack Stream", icon: "live_tv", desc: "Identidade completa para sua live." },
        { number: "02", title: "Gamer & Tech", icon: "sports_esports", desc: "Artes especializadas para o nicho." },
        { number: "03", title: "Branding", icon: "auto_awesome", desc: "Identidade visual estratégica." },
        { number: "04", title: "Social Media", icon: "share", desc: "Presença forte nas redes sociais." }
    ];

    const steps = [
        { number: "01", title: "Briefing", icon: "assignment", desc: "Alinhamento direto de objetivos." },
        { number: "02", title: "Conceito", icon: "architecture", desc: "Desenvolvimento da ideia visual." },
        { number: "03", title: "Criação", icon: "brush", desc: "Design de alta fidelidade." },
        { number: "04", title: "Ajustes", icon: "tune", desc: "Refinamento e polimento final." },
        { number: "05", title: "Entrega", icon: "rocket_launch", desc: "Arquivos finais prontos para uso." }
    ];

    return (
        <section id="process" className="w-full px-6 lg:px-[120px] py-12 md:py-24 border-t border-[#2A2A33] bg-[#08080A] relative min-h-screen flex flex-col justify-center overflow-hidden">
            {/* Background Accents*/}
            <div className="absolute inset-0 opacity-20 transition-opacity"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 blur-[150px] rounded-full pointer-events-none"></div>

            <div className="relative z-10 mb-24 flex flex-col items-center justify-center text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="mb-6 inline-flex items-center gap-4 bg-primary/10 px-8 py-2 border-l-2 border-primary"
                >
                    <span className="text-[10px] font-mono font-bold uppercase tracking-[0.5em] text-primary">Workflow_System</span>
                </motion.div>
                <h2 className="font-display text-5xl md:text-7xl font-bold uppercase tracking-tighter text-white leading-none">
                    Engenharia do <br /><span className="text-text-gray/40 italic">Design Premium</span>
                </h2>
            </div>

            {/* Creations Section */}
            <div className="relative z-10 max-w-7xl mx-auto w-full mb-32">
                <div className="mb-16 border-b border-primary/20 pb-4">
                    <h3 className="text-lg font-display font-bold uppercase text-white tracking-widest flex items-center justify-center gap-3">
                        <span className="size-2 bg-primary"></span> O que eu crio
                    </h3>
                </div>
                <div className="grid grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-4 lg:gap-12">
                    {creations.map((item, index) => (
                        <motion.div
                            key={item.number}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            className="group relative flex flex-col items-center text-center"
                        >
                            <div className="relative mb-10 z-10">
                                <div className="flex size-24 items-center justify-center bg-[#0B0B0C] border border-[#2A2A33] group-hover:border-primary/50 transition-all duration-500 shadow-[0_0_20px_rgba(0,0,0,0.5)] tech-clip-btn relative overflow-hidden">
                                    <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                    <span className="material-symbols-outlined text-4xl text-white group-hover:scale-110 group-hover:text-primary transition-all duration-500">{item.icon}</span>
                                </div>
                                <div className="absolute inset-0 bg-primary/20 blur-2xl opacity-0 group-hover:opacity-40 transition-opacity rounded-full"></div>
                                <div className="absolute -left-2 -top-2 md:-left-3 md:-top-3 flex size-8 md:size-10 items-center justify-center bg-black border border-[#2A2A33] group-hover:border-primary transition-colors z-20">
                                    <span className="relative text-[10px] md:text-sm font-mono font-bold text-primary">{item.number}</span>
                                </div>
                            </div>
                            <motion.div whileHover={{ y: -5 }} className="space-y-3">
                                <h4 className="font-display text-2xl font-bold uppercase text-white tracking-tight group-hover:text-primary transition-colors">
                                    {item.title}
                                </h4>
                                <div className="h-0.5 w-12 bg-primary/20 mx-auto hidden lg:block group-hover:w-full group-hover:bg-primary transition-all duration-500"></div>
                                <p className="text-sm leading-relaxed text-text-gray/60 font-light italic">{item.desc}</p>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* How it Works Section */}
            <div className="relative z-10 max-w-7xl mx-auto w-full">
                <div className="mb-16 border-b border-primary/20 pb-4">
                    <h3 className="text-lg font-display font-bold uppercase text-white tracking-widest flex items-center justify-center gap-3">
                        <span className="size-2 bg-primary"></span> Como funciona
                    </h3>
                </div>

                <div className="relative">
                    <div className="grid grid-cols-1 gap-16 md:grid-cols-3 lg:grid-cols-5 lg:gap-8">
                        {steps.map((step, index) => (
                            <motion.div
                                key={step.number}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.6 }}
                                className="group relative flex flex-col items-center text-center"
                            >
                                <div className="relative mb-10 z-10">
                                    <div className="flex size-24 items-center justify-center bg-[#0B0B0C] border border-[#2A2A33] group-hover:border-primary/50 transition-all duration-500 shadow-[0_0_20px_rgba(0,0,0,0.5)] tech-clip-btn relative overflow-hidden">
                                        <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                        <span className="material-symbols-outlined text-4xl text-white group-hover:scale-110 group-hover:text-primary transition-all duration-500">{step.icon}</span>
                                    </div>
                                    <div className="absolute inset-0 bg-primary/20 blur-2xl opacity-0 group-hover:opacity-40 transition-opacity rounded-full"></div>
                                    <div className="absolute -left-2 -top-2 md:-left-3 md:-top-3 flex size-8 md:size-10 items-center justify-center bg-black border border-[#2A2A33] group-hover:border-primary transition-colors z-20">
                                        <span className="relative text-[10px] md:text-sm font-mono font-bold text-primary">{step.number}</span>
                                    </div>
                                </div>
                                <motion.div whileHover={{ y: -5 }} className="space-y-3">
                                    <h4 className="font-display text-2xl font-bold uppercase text-white tracking-tight group-hover:text-primary transition-colors">
                                        {step.title}
                                    </h4>
                                    <div className="h-0.5 w-12 bg-primary/20 mx-auto hidden lg:block group-hover:w-full group-hover:bg-primary transition-all duration-500"></div>
                                    <p className="text-sm leading-relaxed text-text-gray/60 font-light italic">{step.desc}</p>
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
