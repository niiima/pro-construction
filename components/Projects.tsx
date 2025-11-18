"use client";

import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import Image from "next/image";

const projects = [
    { id: 1, title: "Dormer Loft – Hampstead", thumb: "/proj1.jpg" },
    { id: 2, title: "Rear Extension – Clapham", thumb: "/proj2.jpg" },
    { id: 3, title: "Full House Refurb – Kensington", thumb: "/proj3.jpg" },
    // add more...
];

export default function Projects() {
    return (
        <section id="projects" className="py-20 bg-background">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">Recent Projects</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((p) => (
                        <Dialog key={p.id}>
                            <DialogTrigger asChild>
                                <Card className="overflow-hidden cursor-pointer hover:shadow-xl transition-shadow">
                                    <div className="aspect-video relative bg-gray-200">
                                        {/* Replace with real images */}
                                        <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                                            {p.title}
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <h3 className="font-semibold text-lg">{p.title}</h3>
                                    </div>
                                </Card>
                            </DialogTrigger>
                            <DialogContent className="max-w-4xl">
                                <div className="aspect-video relative bg-gray-200">
                                    <div className="absolute inset-0 flex items-center justify-center text-muted-foreground text-2xl">
                                        Full size image – {p.title}
                                    </div>
                                </div>
                            </DialogContent>
                        </Dialog>
                    ))}
                </div>
            </div>
        </section>
    );
}