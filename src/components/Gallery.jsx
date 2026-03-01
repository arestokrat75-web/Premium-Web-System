import React from 'react';

const samples = [
    { id: 1, src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop', title: 'Business Dashboard' },
    { id: 2, src: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&auto=format&fit=crop', title: 'Service Landingpage' },
    { id: 3, src: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&auto=format&fit=crop', title: 'Modern Office' },
    { id: 4, src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop', title: 'Analytics View' },
    { id: 5, src: 'https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?w=800&auto=format&fit=crop', title: 'Creative Agency' },
    { id: 6, src: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&auto=format&fit=crop', title: 'Team Collaboration' },
];

export default function Gallery() {
    return (
        <section id="galerie" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16 reveal">
                    <span className="text-system-blue font-bold tracking-[0.2em] uppercase text-sm mb-4 block">Portfolio-Demo</span>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">Wie Ihre Webseite <span className="text-system-blue text-gradient-blue">aussehen könnte</span></h2>
                    <p className="text-system-muted text-lg max-w-2xl mx-auto">
                        Wir gestalten Ihre Landingpage nach Ihren Wünschen. Ob edel, modern oder klassisch – das System passt sich Ihrem Brand an.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {samples.map((img) => (
                        <div key={img.id} className="reveal group relative aspect-[4/3] overflow-hidden rounded-2xl bg-system-bg border border-system-border hover:border-system-blue/30 transition-all duration-500 hover:blue-glow">
                            <img
                                src={img.src}
                                alt={img.title}
                                className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                            />
                            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                                <p className="text-white font-bold text-lg">{img.title}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
