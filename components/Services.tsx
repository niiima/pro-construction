"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/index";
import { motion } from "framer-motion";
import {
    Hammer,
    Paintbrush,
    Plug,
    Wrench,
    Shield,
    PhoneIncoming,
    Home,
    Sparkles,
} from "lucide-react";

const services = [
    {
        icon: Home,
        title: "Renovation & Refurbishment",
        description: "Full home transformations from concept to completion.",
    },
    {
        icon: Paintbrush,
        title: "Painting & Decoration",
        description: "Professional interior & exterior painting with premium finishes.",
    },
    {
        icon: Plug,
        title: "Electrical Services",
        description: "Safe installations, rewiring, lighting design & smart home setup.",
    },
    {
        icon: Wrench,
        title: "Plumbing Services",
        description: "Leaks, boilers, bathrooms — we fix and install everything.",
    },
    {
        icon: Shield,
        title: "24/7 Emergency Electrician",
        description: "Power out? Faults? We’re there fast — any time, day or night.",
    },
    {
        icon: PhoneIncoming,
        title: "24/7 Emergency Plumber",
        description: "Burst pipes? Blocked drains? Immediate response guaranteed.",
    },
];

const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i: number) => ({
        pathLength: 1,
        opacity: 1,
        transition: {
            pathLength: { delay: i * 0.3, duration: 1.5, ease: "easeInOut" },
            opacity: { delay: i * 0.3, duration: 0.01 },
        },
    }),
};
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
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.15, duration: 0.6 }}
                                className="group relative"
                            >
                                {/* Card */}
                                <div className="relative bg-card rounded-2xl p-8 shadow-lg border hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 overflow-hidden">
                                    {/* Background subtle pattern on hover */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                                    {/* Icon Container with Build Animation */}
                                    <motion.div
                                        whileHover={{ scale: 1.15 }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                        className="relative mb-6"
                                    >
                                        <motion.div
                                            className="relative inline-block"
                                            whileHover={{ rotate: [0, -5, 5, 0] }}
                                            transition={{ duration: 0.6 }}
                                        >
                                            {/* SVG "drawing" border effect */}
                                            <motion.svg
                                                width="100"
                                                height="100"
                                                viewBox="0 0 100 100"
                                                className="absolute inset-0 -z-10"
                                                initial="hidden"
                                                whileInView="visible"
                                                viewport={{ once: true }}
                                            >
                                                <motion.path
                                                    d="M 20 10 L 80 10 L 90 20 L 90 80 L 80 90 L 20 90 L 10 80 L 10 20 Z"
                                                    fill="none"
                                                    stroke="url(#gradient)"
                                                    strokeWidth="3"
                                                    //   variants={draw}
                                                    custom={index}
                                                />
                                                <defs>
                                                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                                        <stop offset="0%" stopColor="#eab308" />
                                                        <stop offset="100%" stopColor="#f59e0b" />
                                                    </linearGradient>
                                                </defs>
                                            </motion.svg>

                                            {/* Main Icon with hammer/sparkle effect */}
                                            <motion.div
                                                animate={{
                                                    y: [0, -8, 0],
                                                }}
                                                transition={{
                                                    duration: 3,
                                                    repeat: Infinity,
                                                    delay: index * 0.3,
                                                }}
                                            >
                                                <Icon className="h-16 w-16 text-primary group-hover:text-yellow-600 transition-colors duration-300" />
                                                <Sparkles className="absolute -top-2 -right-2 h-6 w-6 text-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                                            </motion.div>
                                        </motion.div>
                                    </motion.div>

                                    <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                                        {service.title}
                                    </h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        {service.description}
                                    </p>

                                    {/* Bottom accent line */}
                                    <motion.div
                                        className="absolute bottom-0 left-0 h-1 bg-yellow-500"
                                        initial={{ width: 0 }}
                                        whileInView={{ width: "30%" }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.2 + 0.5, duration: 1 }}
                                    />
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}