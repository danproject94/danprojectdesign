import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import PortfolioSection from '../components/PortfolioSection';
import ProcessSection from '../components/ProcessSection';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function Home() {
    const { hash } = useLocation();

    useEffect(() => {
        if (hash) {
            const element = document.getElementById(hash.replace('#', ''));
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [hash]);

    return (
        <main className="min-h-screen relative">
            <HeroSection />
            <AboutSection />
            <PortfolioSection />
            <ProcessSection />
        </main>
    );
}
