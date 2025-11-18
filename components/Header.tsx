"use client";

import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import MobileMenu from "./MobileMenu";
import Link from "next/link";
import Image from "next/image"
// import logo from "./logo-bright.svg"

const navItems = [
    { label: "Home", href: "#" },
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
];

export default function Header() {
    return (
        <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
            <div className="container mx-auto flex h-20 items-center justify-between px-4">
                <Link href="/" className="text-2xl font-bold text-primary">
                    {/* PRO LONDON */}
                    <Image
                        src="/logo-bright.svg"      // note the leading slash
                        alt="Pro London Logo"
                        width={120}
                        height={40}
                        className="h-10 w-auto"
                    />
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navItems.map((item) => (
                        <Link
                            key={item.label}
                            href={item.href}
                            className="text-muted-foreground hover:text-primary transition-colors font-medium"
                        >
                            {item.label}
                        </Link>
                    ))}
                    <Button asChild>
                        <Link href="tel:02012345678">020 1234 5678</Link>
                    </Button>
                </nav>

                {/* Mobile Menu */}
                <Sheet>
                    <SheetTrigger asChild className="md:hidden">
                        <Button variant="ghost" size="icon">
                            <Menu className="h-6 w-6" />
                        </Button>
                    </SheetTrigger>

                    {/* ← ADD THESE CLASSES BELOW → */}
                    <SheetContent
                        side="right"
                        className="w-[300px] sm:w-[400px] flex flex-col"
                        // This is the magic fix:
                        overlayClassName="bg-black/80"
                    >
                        {/* This div makes the content scrollable */}
                        <div className="flex-1 overflow-y-auto py-6">
                            <MobileMenu />
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        </header>
    );
}