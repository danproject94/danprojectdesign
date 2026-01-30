import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

export default function Header() {
    const navigate = useNavigate();
    const location = useLocation();

    const navLinks = [
        { name: 'Portfólio', href: 'portfolio' },
        { name: 'Sobre', href: 'about' },
        { name: 'Processo', href: 'process' },
        { name: 'Contato', href: 'contact' },
    ];

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
        e.preventDefault();

        if (location.pathname === '/') {
            // Already on home page, just scroll
            const element = document.getElementById(targetId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            // On another page, navigate to home and then scroll
            navigate('/');
            // Small delay to allow home page to mount
            setTimeout(() => {
                const element = document.getElementById(targetId);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
        }
    };

    return (
        <header className="sticky top-0 z-50 w-full border-b border-[#2A2A33] bg-background-dark/90 backdrop-blur-md">
            <div className="w-full h-20 flex items-center justify-center md:justify-between px-6 lg:px-[120px]">
                <Link to="/" className="flex items-center gap-4 group">
                    <div className="flex flex-col leading-none">
                        <h1 className="font-display text-2xl md:text-3xl font-bold tracking-tighter text-white uppercase transition-colors group-hover:text-primary leading-none">
                            DanProject
                        </h1>
                    </div>
                </Link>

                <div className="hidden md:flex items-center gap-12">
                    <nav className="hidden lg:flex items-center gap-12">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={`#${link.href}`}
                                onClick={(e) => handleNavClick(e, link.href)}
                                className="text-xs font-mono font-medium text-text-gray hover:text-primary transition-all uppercase tracking-[0.3em] relative group py-2"
                            >
                                <span className="relative z-10">{link.name}</span>
                                <span className="absolute bottom-0 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-500"></span>
                                <span className="absolute -top-1 -right-2 text-[8px] text-primary opacity-0 group-hover:opacity-100 transition-opacity">//</span>
                            </a>
                        ))}
                    </nav>

                    <div className="flex items-center gap-4">
                        <div className="h-8 w-px bg-[#2A2A33] mx-2 hidden lg:block"></div>
                        <a
                            href="https://wa.me/5519995732513?text=Ol%C3%A1%2C%20Dan!%0AEncontrei%20o%20DanProject%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto%20de%20pack%20stream%20%2F%20marca%20%2F%20identidade%20visual.%0APode%20me%20explicar%20como%20funciona%20o%20processo%20e%20os%20pr%C3%B3ximos%20passos%3F"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center size-10 bg-[#0B0B0C] border border-[#1A1A1D] hover:border-[#25D366]/50 text-text-gray/60 hover:text-[#25D366] transition-all duration-300 relative overflow-hidden group"
                        >
                            <div className="absolute inset-0 bg-[#25D366]/5 translate-y-full group-hover:translate-y-0 transition-transform"></div>
                            <svg className="w-5 h-5 fill-current relative z-10" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"></path></svg>
                        </a>
                        <a
                            href="https://www.instagram.com/danproject94"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center size-10 bg-[#0B0B0C] border border-[#1A1A1D] hover:border-[#E1306C]/50 text-text-gray/60 hover:text-[#E1306C] transition-all duration-300 relative overflow-hidden group"
                        >
                            <div className="absolute inset-0 bg-[#E1306C]/5 translate-y-full group-hover:translate-y-0 transition-transform"></div>
                            <svg className="w-5 h-5 fill-current relative z-10" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path></svg>
                        </a>
                        <a
                            href="mailto:danielcosta-ms@outlook.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center size-10 bg-[#0B0B0C] border border-[#1A1A1D] hover:border-primary/50 text-text-gray/60 hover:text-primary transition-all duration-300 relative overflow-hidden group"
                        >
                            <div className="absolute inset-0 bg-primary/5 translate-y-full group-hover:translate-y-0 transition-transform"></div>
                            <span className="material-symbols-outlined text-xl relative z-10">mail</span>
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
}
