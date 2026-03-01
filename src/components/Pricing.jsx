import React from 'react';
import { Check } from 'lucide-react';

const plans = [
    {
        name: 'Starter',
        price: '399',
        desc: 'Perfekt für den Einstieg.',
        features: ['Landingpage-Design', 'Mobile Optimierung', 'WhatsApp-Anbindung', 'Kontakt-Formular'],
        popular: false,
    },
    {
        name: 'Professional',
        price: '799',
        desc: 'Das beliebteste System.',
        features: ['Sämtliche Starter-Features', 'Interaktive Buchung', 'Google Kalender Sync', 'SEO-Grundoptimierung'],
        popular: true,
    },
    {
        name: 'Enterprise',
        price: 'Auf Anfrage',
        desc: 'Individuelle Lösungen.',
        features: ['Multi-Standort Support', 'Spezial-Features', 'Individuelle API-Anbindung', 'Premium Support'],
        popular: false,
    },
];

export default function Pricing() {
    return (
        <section id="pricing" className="py-24 bg-white relative">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16 reveal">
                    <span className="text-system-blue font-bold tracking-[0.2em] uppercase text-sm mb-4 block">Investition</span>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">Faire Preise ohne <span className="text-system-blue text-gradient-blue">Abofalle</span></h2>
                    <p className="text-system-muted text-lg max-w-2xl mx-auto leading-relaxed">
                        Einmalige Einrichtungskosten. Danach gehört das System Ihnen – keine monatlichen Support- oder Systemgebühren.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {plans.map((p, i) => (
                        <div
                            key={i}
                            className={`reveal p-8 rounded-2xl border transition-all duration-500 flex flex-col ${p.popular ? 'border-system-blue bg-white shadow-2xl scale-105 z-10 blue-glow' : 'border-system-border bg-system-bg'}`}
                        >
                            {p.popular && (
                                <span className="bg-system-blue text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest absolute -top-3 left-1/2 -translate-x-1/2">Beliebt</span>
                            )}
                            <h3 className="text-xl font-bold mb-2 uppercase tracking-wide">{p.name}</h3>
                            <div className="mb-4">
                                <span className="text-4xl font-bold text-system-text">{p.price === 'Auf Anfrage' ? '' : '€'}{p.price}</span>
                                {p.price !== 'Auf Anfrage' && <span className="text-system-muted text-sm ml-2">Einmalig</span>}
                            </div>
                            <p className="text-system-muted mb-8 text-sm">{p.desc}</p>

                            <div className="space-y-4 mb-10 flex-1 text-sm">
                                {p.features.map((f, j) => (
                                    <div key={j} className="flex items-center gap-3">
                                        <Check className="w-4 h-4 text-system-blue" />
                                        <span className="text-system-text font-medium">{f}</span>
                                    </div>
                                ))}
                            </div>

                            <a href="#demo" className={`block text-center py-3 rounded-lg font-bold transition-all ${p.popular ? 'bg-system-blue text-white hover:bg-system-blue-dark' : 'border border-system-blue text-system-blue hover:bg-system-blue/5'}`}>
                                Jetzt anfragen
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
