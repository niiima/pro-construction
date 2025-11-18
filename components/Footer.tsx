// components/Footer.tsx
import Link from "next/link";
import Image from "next/image"
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
    Facebook,
    Instagram,
    Mail,
    Phone,
    MapPin,
    Twitter,
    Linkedin,
    Globe,
} from "lucide-react";

const services = [
    "Renovations",
    "Painting & Decoration",
    "Electrical Services",
    "Plumbing Services",
    "Emergency Electrician",
    "Emergency Plumber",
];

const quickLinks = [
    { label: "Home", href: "#" },
    { label: "Services", href: "#services" },
    { label: "About Us", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact Us", href: "#contact" },
];

export default function Footer() {
    return (
        <footer className="bg-muted/50 border-t mt-20">
            <div className="container mx-auto px-4 py-12 md:py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                    {/* Brand & Description */}
                    <div className="space-y-4">
                        <Link href="/" className="inline-block">
                            <h3 className="text-2xl font-bold text-primary"><Image
                                src="/logo-bright.svg"      // note the leading slash
                                alt="Pro London Logo"
                                width={120}
                                height={40}
                                className="h-10 w-auto"
                            /></h3>
                            {/* <p className="text-sm text-muted-foreground">Construction</p> */}
                        </Link>
                        <p className="text-sm text-muted-foreground max-w-xs">
                            Pro London Construction provides plumbing, electrical, painting,
                            decorating, and property maintenance services with a commitment
                            to quality, efficiency, and client satisfaction.
                        </p>

                        {/* Social Icons */}
                        <div className="flex gap-4 pt-4">
                            <Button variant="ghost" size="icon" asChild>
                                <a
                                    href="https://facebook.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Facebook"
                                >
                                    <Facebook className="h-5 w-5" />
                                </a>
                            </Button>
                            <Button variant="ghost" size="icon" asChild>
                                <a
                                    href="https://instagram.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Instagram"
                                >
                                    <Instagram className="h-5 w-5" />
                                </a>
                            </Button>
                            <Button variant="ghost" size="icon" asChild>
                                <a
                                    href="https://google.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Google Business"
                                >
                                    <Globe className="h-5 w-5" />
                                </a>
                            </Button>
                        </div>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="font-semibold text-lg mb-4">Our Services</h4>
                        <ul className="space-y-2">
                            {services.map((service) => (
                                <li key={service}>
                                    <Link
                                        href="#services"
                                        className="text-muted-foreground hover:text-primary transition-colors text-sm"
                                    >
                                        {service}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            {quickLinks.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="text-muted-foreground hover:text-primary transition-colors text-sm"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-4">
                        <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
                        <div className="space-y-3 text-sm text-muted-foreground">
                            <div className="flex items-start gap-3">
                                <MapPin className="h-5 w-5 text-primary mt-0.5" />
                                <div>
                                    Zenith Lodge, Etchingham Park Rd,
                                    <br />
                                    London N3 2DS
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <Phone className="h-5 w-5 text-primary" />
                                <a href="tel:07950611430" className="hover:text-primary">
                                    07950 611430
                                </a>
                            </div>
                            <div className="flex items-center gap-3">
                                <Mail className="h-5 w-5 text-primary" />
                                <a
                                    href="mailto:info@prolondonconstruction.co.uk"
                                    className="hover:text-primary break-all"
                                >
                                    info@prolondonconstruction.co.uk
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <Separator className="my-8" />

                {/* Bottom Bar */}
                <div className="flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
                    <p>
                        © {new Date().getFullYear()} Pro London Construction. All rights reserved.
                    </p>
                    <p className="mt-2 md:mt-0">
                        Built with ❤️ in London
                    </p>
                </div>
            </div>
        </footer>
    );
}