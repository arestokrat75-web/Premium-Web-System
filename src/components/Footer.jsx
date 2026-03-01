import React from 'react';

export default function Footer() {
    return (
        <footer className="py-16 bg-system-bg border-t border-system-border">
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12 text-center md:text-left">
                <div>
                    <h4 className="text-xl font-bold text-system-blue mb-4 uppercase tracking-tighter">Premium Web-System</h4>
                    <p className="text-system-muted leading-relaxed">
                        Das moderne Komplettsystem für Ihr Business.
                        Individuell, leistungsstark und ohne monatliche Fixgebühren.
                    </p>
                </div>
                <div>
                    <h5 className="font-bold mb-4 uppercase text-xs tracking-widest text-system-muted">Navigation</h5>
                    <ul className="space-y-2 text-system-text font-medium">
                        <li><a href="#hero" className="hover:text-system-blue">Home</a></li>
                        <li><a href="#features" className="hover:text-system-blue">Features</a></li>
                        <li><a href="#vorteile" className="hover:text-system-blue">Vorteile</a></li>
                        <li><a href="#demo" className="hover:text-system-blue">Live-Demo</a></li>
                    </ul>
                </div>
                <div>
                    <h5 className="font-bold mb-4 uppercase text-xs tracking-widest text-system-muted">Kontakt</h5>
                    <p className="text-system-text font-bold mb-2">Bereit für den nächsten Schritt?</p>
                    <a href="https://wa.me/38269568067" className="text-system-blue font-bold hover:underline">
                        Schreiben Sie mir auf WhatsApp
                    </a>
                </div>
            </div>
            <div className="mt-16 pt-8 border-t border-system-border text-center text-system-muted text-xs">
                © {new Date().getFullYear()} Premium Web-System Team. Alle Rechte vorbehalten.
            </div>
        </footer>
    );
}
