"use client";

import { motion } from "framer-motion";
import {
    Home,
    Paintbrush,
    Plug,
    Wrench,
    Shield,
    PhoneIncoming,
} from "lucide-react";

const services = [
    { icon: Home, title: "Renovation & Refurbishment", description: "Full home transformations from concept to completion." },
    { icon: Paintbrush, title: "Painting & Decoration", description: "Professional interior & exterior painting with premium finishes." },
    { icon: Plug, title: "Electrical Services", description: "Safe installations, rewiring, lighting design & smart home setup." },
    { icon: Wrench, title: "Plumbing Services", description: "Leaks, boilers, bathrooms — we fix and install everything." },
    { icon: Shield, title: "24/7 Emergency Electrician", description: "Power out? Faults? We’re there fast — any time, day or night." },
    { icon: PhoneIncoming, title: "24/7 Emergency Plumber", description: "Burst pipes? Blocked drains? Immediate response guaranteed." },
];

export default function Services() {
    return (
        <section id="services" className="py-20 bg-muted/30">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Our Professional Services
                    </h2>
                    <p className="text-xl text-muted-foreground">
                        Built on trust. Delivered with excellence.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => {
                        const Icon = service.icon;

                        return (
                            <motion.div
                                key={service.title}
                                initial={{ opacity: 0, y: 60 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.15, duration: 0.7, ease: "easeOut" }}
                            >
                                {/* Card with tap animation for mobile */}
                                <motion.div
                                    whileTap={{ scale: 0.95 }}  // Mobile tap feedback
                                    whileHover={{ y: -8 }}      // Desktop hover lift
                                    className="group relative bg-card rounded-2xl p-8 shadow-lg border 
                             hover:shadow-2xl transition-all duration-500 cursor-pointer
                             hover:bg-yellow-50 dark:hover:bg-yellow-950/20"
                                >
                                    {/* Yellow/orange accent on hover/tap */}
                                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-yellow-400/20 to-orange-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                    <div className="relative z-10">
                                        <motion.div
                                            whileHover={{ scale: 1.2, rotate: 8 }}
                                            whileTap={{ scale: 1.3, rotate: -8 }}
                                            transition={{ type: "spring", stiffness: 400 }}
                                            className="mb-6 inline-block"
                                        >
                                            <Icon className="h-16 w-16 text-primary 
                                      group-hover:text-yellow-600 
                                      transition-colors duration-300" />
                                        </motion.div>

                                        <h3 className="text-2xl font-bold mb-3 
                                   group-hover:text-yellow-600 
                                   transition-colors duration-300">
                                            {service.title}
                                        </h3>
                                        <p className="text-muted-foreground leading-relaxed">
                                            {service.description}
                                        </p>
                                    </div>

                                    <motion.div
                                        className="absolute bottom-0 left-0 h-1  bg-yellow-500"
                                        initial={{ width: 0 }}
                                        whileInView={{ width: "100%" }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 1.2, delay: index * 0.2 }}
                                    />
                                </motion.div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}