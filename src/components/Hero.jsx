import React from 'react';

export default function Hero() {
    return (
        <section id="hero" className="relative min-h-screen flex items-center bg-system-bg overflow-hidden">
            {/* Soft decorative background element */}
            <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-system-blue/5 rounded-full blur-[100px]" />
            <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-system-blue/10 rounded-full blur-[80px]" />

            <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
                <div className="animate-fade-in-up">
                    <div className="inline-block px-4 py-1.5 text-xs font-bold tracking-widest text-system-blue bg-system-blue/10 rounded-full mb-6 uppercase">
                        Hochmoderne Landingpages für Ihr Business
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8">
                        🚀 <span className="text-system-blue text-gradient-blue">Premium Webseite</span> – <br />
                        Das Komplettsystem.
                    </h1>

                    <p className="text-lg md:text-xl text-system-muted leading-relaxed mb-10 max-w-xl">
                        Bieten Sie Ihren Kunden ein erstklassiges Erlebnis – nicht nur eine einfache Webseite.
                        Wir erstellen für Sie eine voll funktionsfähige Landingpage inkl. Termin-Kalender & WhatsApp-Synchronisation.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <a href="#demo" className="btn-primary">LIVE-DEMO ANSEHEN</a>
                        <a href="#features" className="btn-secondary">FEATURES ENTDECKEN</a>
                    </div>

                    <div className="mt-12 flex items-center gap-6 opacity-60">
                        <div className="flex flex-col">
                            <span className="text-2xl font-bold text-system-text">100%</span>
                            <span className="text-xs text-system-muted uppercase tracking-wider">Performance</span>
                        </div>
                        <div className="w-px h-10 bg-system-border" />
                        <div className="flex flex-col">
                            <span className="text-2xl font-bold text-system-text">0€</span>
                            <span className="text-xs text-system-muted uppercase tracking-wider">Monatliche Kosten</span>
                        </div>
                        <div className="w-px h-10 bg-system-border" />
                        <div className="flex flex-col">
                            <span className="text-2xl font-bold text-system-text">Top-Rank</span>
                            <span className="text-xs text-system-muted uppercase tracking-wider">SEO-Optimiert</span>
                        </div>
                    </div>
                </div>

                <div className="relative animate-fade-in lg:block hidden">
                    <div className="relative z-10 bg-white rounded-2xl shadow-2xl p-4 border border-system-border blue-glow overflow-hidden">
                        {/* Fake UI Preview */}
                        <div className="w-full aspect-[4/3] bg-system-bg rounded-lg overflow-hidden border border-system-border relative">
                            <div className="absolute top-0 left-0 w-full h-8 bg-white border-b border-system-border flex items-center px-4 gap-1.5">
                                <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                                <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                                <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                            </div>
                            <div className="pt-12 p-6">
                                <div className="w-2/3 h-6 bg-system-blue/10 rounded-md mb-4" />
                                <div className="w-full h-4 bg-system-border rounded-md mb-2" />
                                <div className="w-full h-4 bg-system-border rounded-md mb-8" />
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="h-24 bg-white border border-system-border rounded-xl" />
                                    <div className="h-24 bg-white border border-system-border rounded-xl" />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Floating accents */}
                    <div className="absolute -top-8 -right-8 w-32 h-32 bg-system-blue/20 rounded-2xl -rotate-12 z-0 blur-xl" />
                    <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-system-blue/10 rounded-full z-0 blur-2xl" />
                </div>
            </div>
        </section>
    );
}
