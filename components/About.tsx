export default function About() {
    return (
        <section id="about" className="py-20">
            <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">Why Choose Pro London Construction?</h2>
                    <ul className="space-y-4 text-lg">
                        <li className="flex items-start gap-3"><span className="text-primary text-2xl">✓</span> Over 15 years experience in London</li>
                        <li className="flex items-start gap-3"><span className="text-primary text-2xl">✓</span> Fully insured & accredited</li>
                        <li className="flex items-start gap-3"><span className="text-primary text-2xl">✓</span> 10-year workmanship guarantee</li>
                        <li className="flex items-start gap-3"><span className="text-primary text-2xl">✓</span> Fixed price & timeline contracts</li>
                        <li className="flex items-start gap-3"><span className="text-primary text-2xl">✓</span> Dedicated project manager</li>
                    </ul>
                </div>
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-96" />
                {/* Replace with real image */}
            </div>
        </section>
    );
}