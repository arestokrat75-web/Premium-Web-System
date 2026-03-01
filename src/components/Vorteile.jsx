import React from 'react';
import { CheckCircle } from 'lucide-react';

const items = [
    'Kompletter Quellcode (React & Tailwind CSS)',
    'Einrichtung Ihrer WhatsApp-Nummer',
    'Anbindung an Ihren Google Kalender',
    'Hosting-Unterstützung (Schlüsselfertig)',
    'SEO-Optimierung für Google-Sichtbarkeit',
];

export default function Vorteile() {
    return (
        <section id="vorteile" className="py-24 bg-system-bg relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
                <div className="reveal">
                    <span className="text-system-blue font-bold tracking-[0.2em] uppercase text-sm mb-4 block">Lieferumfang</span>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">Warum bei mir <span className="text-system-blue text-gradient-blue">kaufen?</span></h2>
                    <p className="text-system-muted text-lg mb-10 leading-relaxed">
                        Ich liefere keine "Baustelle", sondern ein schlüsselfertiges System.
                        Sie geben mir Ihre Daten, und wenige Tage später ist Ihr Business digital auf Profi-Niveau.
                    </p>

                    <div className="space-y-4">
                        {items.map((item, i) => (
                            <div key={i} className="flex items-center gap-4 group">
                                <CheckCircle className="w-6 h-6 text-system-blue flex-shrink-0" />
                                <span className="text-lg font-medium text-system-text">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="reveal relative">
                    <div className="bg-white rounded-2xl p-10 border border-system-border blue-glow relative z-10">
                        <h3 className="text-2xl font-bold mb-4 text-system-blue italic">Interesse?</h3>
                        <p className="text-xl text-system-text leading-relaxed mb-8 font-medium">
                            "Schreiben Sie mir eine Nachricht mit Ihren Fragen! Ich erstelle für Sie eine hochmoderne, voll funktionsfähige Landingpage."
                        </p>
                        <a href="https://wa.me/38269568067" className="btn-primary inline-block text-center w-full sm:w-auto">
                            JETZT ANFRAGEN
                        </a>
                    </div>
                    {/* Decorative background element */}
                    <div className="absolute -top-10 -right-10 w-64 h-64 bg-system-blue/5 rounded-full blur-3xl" />
                </div>
            </div>
        </section>
    );
}
