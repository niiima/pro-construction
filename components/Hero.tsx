import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="relative h-screen flex items-center justify-center bg-[url('/hero.jpg')] bg-cover bg-center">
            {/* Replace /hero.jpg with your own image in public/ */}
            <div className="absolute inset-0 bg-black/50" />
            <div className="container relative z-10 text-center text-white px-4">
                <h1 className="text-5xl md:text-7xl font-bold mb-6">
                    Loft Conversions & House Extensions Specialists
                </h1>
                <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto">
                    Transforming London homes with stunning loft conversions, extensions and full refurbishments for over 15 years.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg" asChild className="text-lg px-8">
                        <Link href="#contact">Get Free Quote</Link>
                    </Button>
                    <Button size="lg" variant="outline" className="text-lg px-8 bg-transparent text-white border-white hover:bg-white hover:text-black" asChild>
                        <Link href="#projects">View Our Work</Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}