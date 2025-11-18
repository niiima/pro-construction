import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/index";

const services = [
    { title: "Loft Conversions", icon: "🏠" },
    { title: "House Extensions", icon: "➕" },
    { title: "Full Refurbishments", icon: "🔨" },
    { title: "Kitchen & Bathroom", icon: "🛁" },
    { title: "Basement Conversions", icon: "⬇️" },
    { title: "New Builds", icon: "🏗️" },
];

export default function Services() {
    return (
        <section id="services" className="py-20 bg-gray-50">
            <div className="container px-4 mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Our Services</h2>
                <p className="text-center text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
                    From design to completion – we handle every aspect of your project.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((s) => (
                        <Card key={s.title} className="text-center hover:shadow-lg transition-shadow">
                            <CardHeader>
                                <div className="text-6xl mb-4">{s.icon}</div>
                                <CardTitle className="text-2xl">{s.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">
                                    Professional {s.title.toLowerCase()} tailored to your needs.
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}