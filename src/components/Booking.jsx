import React, { useState } from 'react';
import { ChevronLeft, Check, Send } from 'lucide-react';

const serviceOptions = [
    { id: 'basis', name: 'Basis Paket (Standard Landingpage)', price: 'Ab 499€' },
    { id: 'premium', name: 'Premium Paket (Inkl. Kalender & WhatsApp)', price: 'Ab 899€' },
    { id: 'business', name: 'Business Strategie (Full Service)', price: 'Individuell' },
];

const experts = [
    { id: 'design', name: 'Design & UI/UX', role: 'Premium Optik' },
    { id: 'tech', name: 'Technik & Automatisierung', role: 'Kalender & WhatsApp' },
    { id: 'all', name: 'Komplettberatung', role: 'Schlüsselfertiges System' },
];

export default function Booking() {
    const [step, setStep] = useState(1);
    const [selection, setSelection] = useState({
        service: null,
        expert: null,
        name: ''
    });

    const handleNext = () => setStep(step + 1);
    const handleBack = () => setStep(step - 1);

    const sendWhatsApp = () => {
        const phone = "38269568067";
        const message = `*Anfrage: Premium Web System*%0A%0A` +
            `*Interesse an:* ${selection.service?.name}%0A` +
            `*Fokus:* ${selection.expert?.name}%0A` +
            `*Absender:* ${selection.name || 'Interessent'}`;

        window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
    };

    return (
        <section id="demo" className="py-24 bg-system-bg">
            <div className="max-w-4xl mx-auto px-6">
                <div className="text-center mb-12 reveal">
                    <span className="text-system-blue font-bold tracking-[0.2em] uppercase text-sm mb-4 block">Projekt Starten</span>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">Ihr System <span className="text-system-blue text-gradient-blue">konfigurieren</span></h2>
                    <p className="text-system-muted text-lg max-w-xl mx-auto leading-relaxed">
                        Wählen Sie Ihre gewünschten Features aus und senden Sie uns eine unverbindliche Anfrage direkt über dieses Tool.
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
                                <h3 className="text-2xl font-bold mb-6">1. Welches System benötigen Sie?</h3>
                                <div className="space-y-3">
                                    {serviceOptions.map((s) => (
                                        <button
                                            key={s.id}
                                            onClick={() => { setSelection({ ...selection, service: s }); handleNext(); }}
                                            className={`w-full text-left p-6 rounded-xl border transition-all group flex justify-between items-center ${selection.service?.id === s.id ? 'border-system-blue bg-system-blue/5' : 'border-system-border hover:border-system-blue/40'}`}
                                        >
                                            <div>
                                                <span className="font-semibold text-lg block group-hover:text-system-blue">{s.name}</span>
                                                <span className="text-sm text-system-muted">{s.price}</span>
                                            </div>
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
                                <h3 className="text-2xl font-bold mb-6">2. Worauf liegt Ihr Fokus?</h3>
                                <div className="grid md:grid-cols-2 gap-4">
                                    {experts.map((e) => (
                                        <button
                                            key={e.id}
                                            onClick={() => { setSelection({ ...selection, expert: e }); handleNext(); }}
                                            className={`p-6 rounded-xl border transition-all text-center ${selection.expert?.id === e.id ? 'border-system-blue bg-system-blue/5' : 'border-system-border hover:border-system-blue/40'}`}
                                        >
                                            <div className="w-16 h-16 bg-system-blue/10 rounded-full mx-auto mb-4 flex items-center justify-center text-system-blue text-xl font-bold">
                                                {e.name.charAt(0)}
                                            </div>
                                            <span className="font-semibold block">{e.name}</span>
                                            <span className="text-xs text-system-muted uppercase">{e.role}</span>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        {step === 3 && (
                            <div className="animate-fade-in max-w-md mx-auto">
                                <button onClick={handleBack} className="flex items-center gap-2 text-system-blue font-semibold mb-6 hover:translate-x-[-4px] transition-transform">
                                    <ChevronLeft /> Zurück
                                </button>
                                <h3 className="text-2xl font-bold mb-6 text-center">3. Wer fragt an?</h3>
                                <div className="space-y-4">
                                    <input
                                        type="text"
                                        placeholder="Ihr Name oder Firmenname"
                                        className="w-full px-6 py-4 bg-system-bg border border-system-border rounded-xl focus:border-system-blue outline-none transition-all"
                                        value={selection.name}
                                        onChange={(e) => setSelection({ ...selection, name: e.target.value })}
                                    />
                                    <button
                                        disabled={!selection.name}
                                        onClick={handleNext}
                                        className="w-full btn-primary disabled:opacity-50 disabled:grayscale"
                                    >
                                        ZUSAMMENFASSUNG ANSEHEN
                                    </button>
                                </div>
                            </div>
                        )}

                        {step === 4 && (
                            <div className="animate-fade-in text-center">
                                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8 animate-bounce">
                                    <Check className="w-10 h-10" />
                                </div>
                                <h3 className="text-3xl font-bold mb-4">Bereit für den Start!</h3>
                                <div className="inline-block text-left bg-system-bg p-6 rounded-2xl border border-system-border mb-8 max-w-md w-full">
                                    <p className="text-sm text-system-muted uppercase font-bold mb-4 border-b border-system-border pb-2">Ihre Konfiguration:</p>
                                    <div className="space-y-3">
                                        <div className="flex justify-between"><span className="text-system-muted">System:</span> <span className="font-bold">{selection.service?.name}</span></div>
                                        <div className="flex justify-between"><span className="text-system-muted">Fokus:</span> <span className="font-bold">{selection.expert?.name}</span></div>
                                        <div className="flex justify-between"><span className="text-system-muted">Kunde:</span> <span className="font-bold">{selection.name}</span></div>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-4 max-w-md mx-auto">
                                    <button
                                        onClick={sendWhatsApp}
                                        className="flex items-center justify-center gap-3 px-8 py-5 bg-[#25D366] text-white rounded-xl font-bold text-lg hover:shadow-2xl hover:scale-[1.02] transition-all shadow-lg text-center"
                                    >
                                        <Send className="w-6 h-6" />
                                        ANFRAGE PER WHATSAPP SENDEN
                                    </button>
                                    <button onClick={() => setStep(1)} className="text-system-muted hover:text-system-blue text-sm font-medium">Zurück zum Start</button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
