import { motion } from 'framer-motion';

export default function AboutSection() {
    return (
        <section id="about" className="w-full px-6 lg:px-[120px] py-6 md:py-16 relative bg-background-dark min-h-[600px] flex flex-col justify-center">
            <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-16">
                <div className="flex-1 lg:py-16 px-0 lg:pl-0 lg:pr-8 flex flex-col justify-center relative">
                    <div className="absolute top-10 left-0 w-full h-px bg-[#2A2A33] lg:hidden"></div>
                    <div className="mb-8 flex items-center gap-3">
                        <div className="size-2 bg-primary"></div>
                        <div className="h-px w-12 bg-primary"></div>
                        <h3 className="font-display text-lg font-bold uppercase tracking-widest text-primary">Sobre</h3>
                    </div>
                    <h2 className="font-display text-4xl font-bold uppercase tracking-tight text-white md:text-5xl mb-8 leading-none">
                        O que <br /><span className="text-primary font-bold">eu faço</span>
                    </h2>
                    <div className="relative pl-6 border-l-2 border-[#2A2A33]">
                        <p className="text-text-gray text-lg leading-relaxed mb-6 font-light">
                            <span className="text-white font-bold">Não faço design para enfeitar.</span>
                        </p>
                        <p className="text-text-gray text-lg leading-relaxed mb-6 font-light">
                            Crio identidades visuais e artes estratégicas para streamers, marcas tech e profissionais que precisam se destacar em um ambiente competitivo.
                        </p>
                        <p className="text-text-gray text-lg leading-relaxed mb-6 font-light">
                            Meu foco é unir estética gamer, leitura visual clara e impacto imediato — sem design genérico, sem soluções fracas.
                        </p>
                    </div>
                    <div className="mt-10 grid grid-cols-2 gap-6">
                        <motion.div
                            whileHover={{ y: -5 }}
                            className="border border-[#2A2A33] bg-[#0B0B0E] p-6 group hover:border-primary/50 transition-colors"
                        >
                            <h4 className="font-display text-3xl md:text-4xl font-bold text-white mb-1">+2000</h4>
                            <p className="text-[10px] text-text-gray uppercase tracking-[0.2em] font-mono">Artes Criadas</p>
                            <div className="h-0.5 w-0 group-hover:w-full bg-primary transition-all duration-300 mt-2"></div>
                        </motion.div>
                        <motion.div
                            whileHover={{ y: -5 }}
                            className="border border-[#2A2A33] bg-[#0B0B0E] p-6 group hover:border-primary/50 transition-colors"
                        >
                            <h4 className="font-display text-3xl md:text-4xl font-bold text-white mb-1">100%</h4>
                            <p className="text-[10px] text-text-gray uppercase tracking-[0.2em] font-mono">Satisfação dos Clientes</p>
                            <div className="h-0.5 w-0 group-hover:w-full bg-primary transition-all duration-300 mt-2"></div>
                        </motion.div>
                    </div>
                </div>
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                    className="shrink-0 w-full lg:w-[450px] h-[550px] bg-[#0B0B0E] relative border border-[#2A2A33] flex items-center justify-center overflow-hidden group cursor-pointer"
                >
                    <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none">
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            className="size-64 border border-white rounded-full lg:border-2 absolute"
                        />
                        <div className="w-[80%] h-px bg-white lg:border-t-2"></div>
                        <div className="h-[80%] w-px bg-white lg:border-l-2 absolute"></div>
                    </div>
                    <div className="relative z-10 text-center px-6">
                        <motion.h3
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="relative font-display text-3xl md:text-5xl font-bold uppercase text-white leading-none tracking-tight"
                        >
                            Vamos tirar sua<br /><span className="text-primary">ideia do comum</span>
                        </motion.h3>
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="mt-4 flex justify-center gap-2 text-primary"
                        >
                            {[...Array(5)].map((_, i) => (
                                <span key={i} className="material-symbols-outlined text-sm">star</span>
                            ))}
                        </motion.div>
                    </div>
                    <div className="absolute top-4 left-4 size-4 border-l-2 border-t-2 border-primary group-hover:scale-125 transition-transform"></div>
                    <div className="absolute bottom-4 right-4 size-4 border-r-2 border-b-2 border-primary group-hover:scale-125 transition-transform"></div>
                </motion.div>
            </div>
        </section>
    );
}
