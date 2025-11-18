"use client";

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import Autoplay from "embla-carousel-autoplay";

const testimonials = [
    { name: "Sarah & Mark", text: "Absolutely thrilled with our loft conversion...", rating: 5 },
    { name: "James", text: "Professional from start to finish...", rating: 5 },
    // add more
];

export default function Testimonials() {
    return (
        <section id="testimonials" className="py-20">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">What Our Clients Say</h2>
                <Carousel opts={{ loop: true }} plugins={[Autoplay({ delay: 5000 })]} className="max-w-4xl mx-auto">
                    <CarouselContent>
                        {testimonials.map((t, i) => (
                            <CarouselItem key={i}>
                                <Card>
                                    <CardContent className="pt-10 text-center">
                                        <div className="flex justify-center mb-4">{"★".repeat(t.rating)}</div>
                                        <p className="text-lg italic mb-6">"{t.text}"</p>
                                        <div className="flex items-center justify-center gap-4">
                                            <Avatar>
                                                <AvatarFallback>{t.name[0]}</AvatarFallback>
                                            </Avatar>
                                            <span className="font-semibold">{t.name}</span>
                                        </div>
                                    </CardContent>
                                </Card>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>
        </section>
    );
}