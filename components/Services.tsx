"use client";

import { motion } from "framer-motion";
import {
    Home,
    Paintbrush,
    Plug,
    Wrench,
    Shield,
    PhoneIncoming,
    Sparkles,
} from "lucide-react";

const services = [
    { icon: Home, title: "Renovation & Refurbishment", desc: "Full home transformations from concept to completion." },
    { icon: Paintbrush, title: "Painting & Decoration", desc: "Professional interior & exterior painting with premium finishes." },
    { icon: Plug, title: "Electrical Services", desc: "Safe installations, rewiring, lighting & smart home setup." },
    { icon: Wrench, title: "Plumbing Services", desc: "Leaks, boilers, bathrooms — expert solutions." },
    { icon: Shield, title: "24/7 Emergency Electrician", desc: "Fast response, any time, day or night." },
    { icon: PhoneIncoming, title: "24/7 Emergency Plumber", desc: "Immediate help when you need it most." },
];

export default function Services() {
    const draw = {
        hidden: { pathLength: 0, opacity: 0 },
        visible: (i: number) => ({
            pathLength: 1,
            opacity: 1,
            transition: {
                pathLength: { delay: i * 0.4, duration: 1.8, ease: "easeInOut" },
                opacity: { delay: i * 0.4, duration: 0.01 },
            },
        }),
    };

    return (
        <section id="services" className="py-20 bg-background">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h2>
                    <p className="text-xl text-muted-foreground">Excellence in every detail</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
                    {services.map((service, index) => {
                        const Icon = service.icon;

                        return (
                            <motion.div
                                key={service.title}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className="group relative"
                            >
                                <div className="relative bg-card rounded-2xl p-10 shadow-xl border border-border 
                                hover:shadow-2xl hover:border-yellow-600/40 
                                transition-all duration-700 hover:-translate-y-4">
                                    {/* Elegant SVG Frame — Now Perfectly Sized & Visible */}
                                    <motion.svg
                                        className="absolute inset-0 w-full h-full pointer-events-none"
                                        viewBox="0 0 380 420"
                                        fill="none"
                                    >
                                        <motion.path
                                            d="M 30 15 
                         L 350 15 
                         L 365 30 
                         L 365 390 
                         L 350 405 
                         L 30 405 
                         L 15 390 
                         L 15 30 
                         Z"
                                            stroke="url(#gold)"
                                            strokeWidth="3"
                                            variants={draw}
                                            initial="hidden"
                                            whileInView="visible"
                                            viewport={{ once: true }}
                                            custom={index}
                                        />
                                        <defs>
                                            <linearGradient id="gold" x1="0%" y1="0%" x2="100%" y2="100%">
                                                <stop offset="0%" stopColor="#fCD34D" />
                                                <stop offset="50%" stopColor="#EAB308" />
                                                <stop offset="100%" stopColor="#F59E0B" />
                                            </linearGradient>
                                        </defs>
                                    </motion.svg>

                                    {/* Icon with floating + sparkle */}
                                    <motion.div
                                        whileHover={{ scale: 1.15 }}
                                        whileTap={{ scale: 1.25 }}
                                        transition={{ type: "spring", stiffness: 400 }}
                                        className="relative z-10 mb-8 flex justify-center"
                                    >
                                        <Icon className="h-16 w-16 text-primary group-hover:text-yellow-600 transition-colors duration-500" />
                                        <Sparkles className="absolute -top-3 -right-3 h-8 w-8 text-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                                    </motion.div>

                                    <h3 className="text-2xl font-bold text-center mb-4 group-hover:text-yellow-600 transition-colors duration-500">
                                        {service.title}
                                    </h3>
                                    <p className="text-center text-muted-foreground leading-relaxed">
                                        {service.desc}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}