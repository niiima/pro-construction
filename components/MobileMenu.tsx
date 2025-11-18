// components/MobileMenu.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";

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
            <Link
                href="#"
                className="py-4 text-lg font-medium text-foreground border-b border-muted"
            >
                HOME
            </Link>

            {/* Services - Collapsible */}
            <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="flex items-center justify-between py-4 text-lg font-medium text-foreground border-b border-muted"
            >
                <span>SERVICES</span>
                {isServicesOpen ? (
                    <ChevronUp className="h-5 w-5 text-yellow-600" />
                ) : (
                    <ChevronDown className="h-5 w-5 text-yellow-600" />
                )}
            </button>

            {/* Nested Services List */}
            {isServicesOpen && (
                <div className="bg-muted/30 border-b border-muted">
                    {services.map((service) => (
                        <Link
                            key={service}
                            href="#services"
                            className="block py-4 px-6 text-foreground/90 hover:text-primary transition-colors"
                        >
                            {service}
                        </Link>
                    ))}
                </div>
            )}

            {/* About Us */}
            <Link
                href="#about"
                className="py-4 text-lg font-medium text-foreground border-b border-muted"
            >
                ABOUT US
            </Link>

            {/* Get in Touch */}
            <Link
                href="#contact"
                className="py-4 text-lg font-medium text-foreground border-b border-muted"
            >
                GET IN TOUCH
            </Link>

            {/* CTA Buttons */}
            <div className="mt-8 space-y-4">
                <Button
                    asChild
                    size="lg"
                    className="w-full rounded-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold text-lg h-14 shadow-lg"
                >
                    <a href="tel:07950611430">CALL: 07950 611430</a>
                </Button>

                <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="w-full rounded-full border-2 border-yellow-500 text-yellow-600 hover:bg-yellow-500 hover:text-black font-bold text-lg h-14"
                >
                    <Link href="#contact">REQUEST SERVICE</Link>
                </Button>
            </div>
        </nav>
    );
}