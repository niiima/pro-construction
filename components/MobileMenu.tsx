// components/MobileMenu.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const services = [
    "Renovation & Refurbishment",
    "Painting & Decoration",
    "Electrical Services",
    "Plumbing Services",
    "24/7 Emergency Plumber",
    "24/7 Emergency Electrician",
];

export default function MobileMenu() {
    const [isServicesOpen, setIsServicesOpen] = useState(false);

    return (
        <nav className="flex flex-col mt-8">
            {/* Home */}
            <motion.div whileTap={{ scale: 0.98 }}>
                <Link
                    href="#"
                    className="block py-4 text-lg font-medium text-foreground border-b border-muted"
                >
                    HOME
                </Link>
            </motion.div>

            {/* Services - Collapsible Trigger */}
            <motion.button
                whileTap={{ scale: 0.98 }}
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="flex items-center justify-between py-4 text-lg font-medium text-foreground border-b border-muted w-full text-left"
            >
                <span>SERVICES</span>
                <motion.div
                    animate={{ rotate: isServicesOpen ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                    {isServicesOpen ? (
                        <ChevronUp className="h-5 w-5 text-yellow-600" />
                    ) : (
                        <ChevronDown className="h-5 w-5 text-yellow-600" />
                    )}
                </motion.div>
            </motion.button>

            {/* Animated Nested Services */}
            <AnimatePresence initial={false}>
                {isServicesOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: "easeInOut" }}
                        className="overflow-hidden bg-muted/30 border-b border-muted"
                    >
                        <motion.div
                            initial={{ y: -10 }}
                            animate={{ y: 0 }}
                            exit={{ y: -10 }}
                            transition={{ duration: 0.3 }}
                            className="py-2"
                        >
                            {services.map((service, index) => (
                                <motion.div
                                    key={service}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ delay: index * 0.05 }}
                                >
                                    <Link
                                        href="#services"
                                        className="block py-4 px-6 text-foreground/90 hover:text-primary hover:bg-muted/50 transition-all"
                                    >
                                        {service}
                                    </Link>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* About Us */}
            <motion.div whileTap={{ scale: 0.98 }}>
                <Link
                    href="#about"
                    className="block py-4 text-lg font-medium text-foreground border-b border-muted"
                >
                    ABOUT US
                </Link>
            </motion.div>

            {/* Get in Touch */}
            <motion.div whileTap={{ scale: 0.98 }}>
                <Link
                    href="#contact"
                    className="block py-4 text-lg font-medium text-foreground border-b border-muted"
                >
                    GET IN TOUCH
                </Link>
            </motion.div>

            {/* CTA Buttons with entrance animation */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="mt-10 space-y-4"
            >
                <Button
                    asChild
                    size="lg"
                    className="w-full rounded-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold text-lg h-14 shadow-xl hover:shadow-2xl transition-all"
                >
                    <motion.a
                        href="tel:07950611430"
                        whileTap={{ scale: 0.95 }}
                    >
                        CALL: 07950 611430
                    </motion.a>
                </Button>

                <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="w-full rounded-full border-2 border-yellow-500 text-yellow-600 hover:bg-yellow-500 hover:text-black font-bold text-lg h-14 transition-all"
                >
                    <motion.div whileTap={{ scale: 0.95 }}>
                        <Link href="#contact">REQUEST SERVICE</Link>
                    </motion.div>
                </Button>
            </motion.div>
        </nav>
    );
}