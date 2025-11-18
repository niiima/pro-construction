"use client";

import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetOverlay, SheetClose } from "@/components/ui/sheet";
import MobileMenu from "./MobileMenu";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo-bright.svg";

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
                        src={logo}
                        alt="Pro London Construction Logo"
                        className="h-9 w-auto max-w-none md:h-10 lg:h-11"
                        priority
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
                        <Link href="tel:02012345678">07950 611430</Link>
                    </Button>
                </nav>

                {/* Mobile Menu */}
                {/* Mobile Menu Trigger */}
                <Sheet>
                    <SheetTrigger asChild className="md:hidden">
                        <Button variant="ghost" size="icon">
                            <Menu className="h-6 w-6" />
                            <span className="sr-only">Open menu</span>
                        </Button>
                    </SheetTrigger>

                    <SheetContent
                        side="right"

                        className="w-[320px] sm:w-[400px] p-0 flex flex-col"
                    // This is the official supported way in 2025 to darken the backdrop
                    >
                        {/* 1. Dark overlay – works perfectly */}
                        <div
                            className="fixed inset-0 bg-black/80 -z-10"
                            aria-hidden="true"
                        />

                        {/* 2. Close button (top right X) */}
                        <button
                            className="absolute right-4 top-4 z-50 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:outline-none"
                            onClick={() => document.dispatchEvent(new KeyboardEvent("keydown", { key: "Escape" }))}
                            aria-label="Close menu"
                        >
                            <X className="h-7 w-7 text-white" />
                        </button>

                        {/* 3. Scrollable content */}
                        <div className="flex-1 overflow-y-auto overscroll-contain">
                            {/* Optional Logo at top */}
                            <div className="p-6 border-b bg-background">
                                <Link href="/" className="flex items-center gap-3">
                                    {/* Replace with your real logo if you have one */}
                                    <div className="w-14 h-14 bg-yellow-500 rounded-lg flex items-center justify-center font-bold text-black text-2xl">
                                        PL
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-bold">PRO LONDON</h2>
                                        <p className="text-sm text-muted-foreground">CONSTRUCTION</p>
                                    </div>
                                </Link>
                            </div>

                            {/* Your beautiful animated menu */}
                            <div className="p-6 pt-8">
                                <MobileMenu />
                            </div>
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        </header>
    );
}