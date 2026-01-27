import { motion } from 'framer-motion';

export default function ContactSection() {

    return (
        <section id="contact" className="border-t border-[#2A2A33] bg-background-dark py-24 relative overflow-hidden">
            <div className="relative z-10 w-full px-6 lg:px-[120px]">
                {/* Section Header */}
                <div className="mb-16 max-w-3xl">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="font-display text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tighter text-white mb-4"
                    >
                        Vamos tirar sua <br /><span className="text-primary italic">ideia do papel.</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-text-gray/80 font-light leading-relaxed max-w-2xl"
                    >
                        Entre em contato e receba uma proposta alinhada ao seu projeto, seja ele um pack stream, uma marca ou uma identidade visual completa.
                    </motion.p>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="mb-8"
                >
                    <p className="text-[10px] font-mono text-primary uppercase tracking-[0.4em]">Escolha o canal que preferir //</p>
                </motion.div>

                {/* Social Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                    {/* WhatsApp */}
                    <motion.a
                        href="https://wa.me/5519995732513?text=Ol%C3%A1%2C%20Dan!%0AEncontrei%20o%20DanProject%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto%20de%20pack%20stream%20%2F%20marca%20%2F%20identidade%20visual.%0APode%20me%20explicar%20como%20funciona%20o%20processo%20e%20os%20pr%C3%B3ximos%20passos%3F"
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -5, scale: 1.02 }}
                        className="group relative flex flex-col items-start p-10 bg-[#0B0B0C] border border-[#1A1A1D] hover:border-[#25D366]/30 transition-all duration-300"
                    >
                        <span className="absolute top-6 right-6 material-symbols-outlined text-text-gray/50 text-xl group-hover:text-[#25D366] transition-colors">arrow_outward</span>

                        <div className="flex size-14 items-center justify-center bg-[#1A1A1D] mb-8 group-hover:bg-[#25D366]/10 transition-colors">
                            <svg className="w-6 h-6 fill-current text-white group-hover:text-[#25D366] transition-colors" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"></path></svg>
                        </div>

                        <h3 className="font-display text-2xl font-bold text-white uppercase mb-2 group-hover:text-[#25D366] transition-colors tracking-wide">WhatsApp</h3>
                        <p className="text-sm text-text-gray/60 tracking-tight font-light">Projetos e Orçamentos</p>
                    </motion.a>

                    {/* Instagram */}
                    <motion.a
                        href="https://www.instagram.com/danproject94"
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        whileHover={{ y: -5, scale: 1.02 }}
                        className="group relative flex flex-col items-start p-10 bg-[#0B0B0C] border border-[#1A1A1D] hover:border-[#E1306C]/30 transition-all duration-300"
                    >
                        <span className="absolute top-6 right-6 material-symbols-outlined text-text-gray/50 text-xl group-hover:text-[#E1306C] transition-colors">arrow_outward</span>

                        <div className="flex size-14 items-center justify-center bg-[#1A1A1D] mb-8 group-hover:bg-[#E1306C]/10 transition-colors">
                            <svg className="w-6 h-6 fill-current text-white group-hover:text-[#E1306C] transition-colors" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3Z"></path></svg>
                        </div>

                        <h3 className="font-display text-2xl font-bold text-white uppercase mb-2 group-hover:text-[#E1306C] transition-colors tracking-wide">Instagram</h3>
                        <p className="text-sm text-text-gray/60 tracking-tight font-light">Exposição, Conteúdos e Conversas Rápidas</p>
                    </motion.a>

                    {/* Email */}
                    <motion.a
                        href="mailto:danielcosta-ms@outlook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        whileHover={{ y: -5, scale: 1.02 }}
                        className="group relative flex flex-col items-start p-10 bg-[#0B0B0C] border border-[#1A1A1D] hover:border-primary/30 transition-all duration-300"
                    >
                        <span className="absolute top-6 right-6 material-symbols-outlined text-text-gray/50 text-xl group-hover:text-primary transition-colors">arrow_outward</span>

                        <div className="flex size-14 items-center justify-center bg-[#1A1A1D] mb-8 group-hover:bg-primary/10 transition-colors">
                            <span className="material-symbols-outlined text-2xl text-white group-hover:text-primary transition-colors">mail</span>
                        </div>

                        <h3 className="font-display text-2xl font-bold text-white uppercase mb-2 group-hover:text-primary transition-colors tracking-wide">Email</h3>
                        <p className="text-sm text-text-gray/60 tracking-tight font-light">Propostas Formais</p>
                    </motion.a>
                </div>

                {/* Footer Content */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-t border-[#2A2A33] pt-8">
                    <div className="flex items-center gap-3">
                        {/*<span className="material-symbols-outlined text-primary">terminal</span>*/}
                        <div className="flex flex-col">
                            <span className="font-display text-xl font-bold uppercase tracking-wide text-white leading-none">DanProject</span>
                            <span className="text-[0.6rem] text-text-gray tracking-widest">© 2026</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="h-2 w-2 bg-primary animate-pulse rounded-full"></div>
                        <p className="text-xs text-text-gray text-center md:text-right font-mono uppercase tracking-wider">
                            Performance Visual & Brand Strategy
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
