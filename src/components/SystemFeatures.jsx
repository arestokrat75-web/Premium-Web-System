import React from 'react';
import { Calendar, MessageSquare, RefreshCw, Layout, DollarSign, Rocket } from 'lucide-react';

const highlights = [
    {
        id: 1,
        title: 'Intelligentes Buchungssystem',
        desc: 'Intuitive 4-Schritte-Führung für maximale Konversionsraten.',
        icon: <Calendar className="w-8 h-8" />,
    },
    {
        id: 2,
        title: 'WhatsApp-Integration',
        desc: 'Sofortige Benachrichtigung und direkte Kommunikation auf Ihr Handy.',
        icon: <MessageSquare className="w-8 h-8" />,
    },
    {
        id: 3,
        title: 'Google Sync',
        desc: 'Vollautomatische Synchronisation verhindert Doppelbuchungen in Echtzeit.',
        icon: <RefreshCw className="w-8 h-8" />,
    },
    {
        id: 4,
        title: 'Premium Design',
        desc: 'Modernste Ästhetik, optimiert für Mobile-First und höchste Ladegeschwindigkeit.',
        icon: <Layout className="w-8 h-8" />,
    },
    {
        id: 5,
        title: 'Keine Abogebühren',
        desc: 'Einmalige Einrichtung ohne monatliche Systemkosten oder versteckte Gebühren.',
        icon: <DollarSign className="w-8 h-8" />,
    },
    {
        id: 6,
        title: 'High-Speed-Performance',
        desc: 'Optimierte Ladezeiten und erstklassige Google Core Web Vitals für Ihr Business.',
        icon: <Rocket className="w-8 h-8" />,
    },
];

export default function SystemFeatures() {
    return (
        <section id="features" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-20 animate-fade-in">
                    <span className="text-system-blue font-bold tracking-[0.2em] uppercase text-sm mb-4 block">Highlights</span>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">Was dieses System <span className="text-system-blue text-gradient-blue">besonders macht</span></h2>
                    <p className="text-system-muted text-lg max-w-2xl mx-auto">
                        Maßgeschneidert und hochperformant. Wir setzen auf modernste Technik, um Ihre Besucher in zahlende Kunden zu verwandeln.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {highlights.map((item) => (
                        <div key={item.id} className="reveal p-8 rounded-2xl bg-system-bg border border-system-border hover:border-system-blue/30 transition-all duration-500 hover:blue-glow group">
                            <div className="w-14 h-14 rounded-xl bg-system-blue/10 flex items-center justify-center text-system-blue mb-6 group-hover:bg-system-blue group-hover:text-white transition-all duration-300">
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-3 group-hover:text-system-blue transition-colors">
                                {item.title}
                            </h3>
                            <p className="text-system-muted leading-relaxed">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
