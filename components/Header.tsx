"use client";

import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetOverlay, SheetClose } from "@/components/ui/sheet";
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
                        <Link href="tel:02012345678">07950 611430</Link>
                    </Button>
                </nav>

                {/* Mobile Menu */}
                <Sheet>
                    <SheetTrigger asChild className="md:hidden">
                        <Button variant="ghost" size="icon">
                            <Menu className="h-6 w-6" />
                        </Button>
                    </SheetTrigger>

                    <SheetContent
                        side="right"
                        className="w-[300px] sm:w-[400px] p-0 flex flex-col"
                    >
                        {/* Custom dark overlay - CORRECT WAY */}
                        <div className="fixed inset-0 bg-black/80 z-40" />

                        {/* Close button (top-right X) */}
                        <SheetClose className="absolute right-4 top-4 z-50 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none">
                            <X className="h-6 w-6" />
                            <span className="sr-only">Close</span>
                        </SheetClose>

                        {/* Scrollable content */}
                        <div className="relative z-50 flex-1 overflow-y-auto">
                            {/* Logo Header */}
                            <div className="p-6 border-b bg-background">
                                <Link href="/" className="flex items-center gap-3" onClick={() => document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }))}>
                                    <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center font-bold text-black text-xl">
                                        PL
                                    </div>
                                    <div>
                                        <h2 className="text-xl font-bold">PRO LONDON</h2>
                                        <p className="text-sm text-muted-foreground">CONSTRUCTION</p>
                                    </div>
                                </Link>
                            </div>

                            {/* Menu */}
                            <div className="px-6 py-6">
                                <MobileMenu />
                            </div>
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        </header>
    );
}