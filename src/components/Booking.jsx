import React, { useState } from 'react';
import { ChevronLeft, Check } from 'lucide-react';

export default function Booking() {
    const [step, setStep] = useState(1);

    const handleNext = () => setStep(step + 1);
    const handleBack = () => setStep(step - 1);

    return (
        <section id="demo" className="py-24 bg-system-bg">
            <div className="max-w-4xl mx-auto px-6">
                <div className="text-center mb-12 reveal">
                    <span className="text-system-blue font-bold tracking-[0.2em] uppercase text-sm mb-4 block">System-Demo</span>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">Erleben Sie die <span className="text-system-blue text-gradient-blue">Einfachheit</span></h2>
                    <p className="text-system-muted text-lg max-w-xl mx-auto leading-relaxed">
                        Testen Sie hier das interaktive Buchungssystem. Intuitiv, schnell und direkt mit Ihrem WhatsApp & Kalender verbunden.
                    </p>
                </div>

                <div className="bg-white rounded-2xl border border-system-border shadow-2xl overflow-hidden min-h-[500px] reveal blue-glow">
                    {/* Progress Bar */}
                    <div className="flex h-1.5 bg-system-bg">
                        <div className="bg-system-blue transition-all duration-500 h-full" style={{ width: `${(step / 4) * 100}%` }} />
                    </div>

                    <div className="p-8 md:p-12">
                        {step === 1 && (
                            <div className="animate-fade-in">
                                <h3 className="text-2xl font-bold mb-6">1. Service wählen</h3>
                                <div className="space-y-3">
                                    {['Basis Paket', 'Premium Paket', 'Business Strategie'].map((s) => (
                                        <button
                                            key={s}
                                            onClick={handleNext}
                                            className="w-full text-left p-6 rounded-xl border border-system-border hover:border-system-blue/40 hover:bg-system-blue/5 transition-all group flex justify-between items-center"
                                        >
                                            <span className="font-semibold text-lg group-hover:text-system-blue">{s}</span>
                                            <span className="text-system-blue font-bold opacity-0 group-hover:opacity-100 transition-opacity">Wählen →</span>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        {step === 2 && (
                            <div className="animate-fade-in">
                                <button onClick={handleBack} className="flex items-center gap-2 text-system-blue font-semibold mb-6 hover:translate-x-[-4px] transition-transform">
                                    <ChevronLeft /> Zurück
                                </button>
                                <h3 className="text-2xl font-bold mb-6">2. Experten wählen</h3>
                                <div className="grid md:grid-cols-2 gap-4">
                                    {['Max Web-Design', 'Anna SEO-Pro', 'Teamleitung'].map((e) => (
                                        <button key={e} onClick={handleNext} className="p-6 rounded-xl border border-system-border hover:border-system-blue/40 hover:bg-system-blue/5 transition-all text-center">
                                            <div className="w-16 h-16 bg-system-blue/10 rounded-full mx-auto mb-4 flex items-center justify-center text-system-blue text-xl font-bold">
                                                {e.charAt(0)}
                                            </div>
                                            <span className="font-semibold block">{e}</span>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        {step === 3 && (
                            <div className="animate-fade-in text-center py-10">
                                <h3 className="text-2xl font-bold mb-8 italic text-system-muted">...Simulierter interaktiver Kalender...</h3>
                                <button onClick={handleNext} className="btn-primary">WEITER</button>
                            </div>
                        )}

                        {step === 4 && (
                            <div className="animate-fade-in">
                                <h3 className="text-2xl font-bold mb-6 text-center">🎉 System bereit!</h3>
                                <div className="max-w-md mx-auto bg-system-bg p-8 rounded-2xl border border-system-border text-center">
                                    <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                                        <Check className="w-8 h-8" />
                                    </div>
                                    <p className="text-lg mb-6 leading-relaxed">
                                        Dies ist eine Demonstration. Bei einer realen Webseite würde jetzt die **WhatsApp-Benachrichtigung** versendet!
                                    </p>
                                    <button onClick={() => setStep(1)} className="text-system-blue font-bold hover:underline">ZURÜCK ZUM START</button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
