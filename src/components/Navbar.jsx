import React, { useState, useEffect } from 'react';

const navLinks = [
    { href: '#hero', label: 'Home' },
    { href: '#features', label: 'Features' },
    { href: '#demo', label: 'Live-Demo' },
    { href: '#pricing', label: 'Preise' },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md border-b border-system-border shadow-sm' : 'bg-transparent'}`}>
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                <a href="#hero" className="flex items-center gap-2">
                    <span className="text-2xl font-bold tracking-tight text-system-blue">PREMIUM</span>
                    <span className="text-xs font-semibold tracking-widest text-system-muted">WEB-SYSTEM</span>
                </a>

                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a key={link.href} href={link.href} className="text-sm font-medium text-system-muted hover:text-system-blue transition-colors">
                            {link.label}
                        </a>
                    ))}
                    <a href="#demo" className="px-6 py-2.5 bg-system-blue text-white text-sm font-bold rounded-lg hover:bg-system-blue-dark transition-all">
                        JETZT STARTEN
                    </a>
                </div>
            </div>
        </nav>
    );
}
