"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion } from "framer-motion";
import { Phone, Hammer, Paintbrush, Sparkles, ArrowRight } from "lucide-react";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";

const schema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Invalid email address"),
    phone: z.string().min(10, "Phone number must be at least 10 digits"),
    message: z.string().min(10, "Message must be at least 10 characters"),
});

export default function ContactForm() {
    const form = useForm<z.infer<typeof schema>>({
        resolver: zodResolver(schema),
        defaultValues: { name: "", email: "", phone: "", message: "" },
    });

    function onSubmit(values: z.infer<typeof schema>) {
        console.log(values);
        alert("Thank you! We will contact you soon.");
        form.reset();
    }

    return (
        <section id="contact" className="py-20 bg-muted/50">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                    Get Your Free Quote Today
                </h2>
                <p className="text-xl mb-12 text-muted-foreground">
                    No obligation – just honest advice
                </p>

                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="max-w-2xl mx-auto space-y-8"
                    >
                        <div className="grid sm:grid-cols-2 gap-6">
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Name</FormLabel>
                                        <FormControl>
                                            <Input placeholder="John Doe" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="phone"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Phone</FormLabel>
                                        <FormControl>
                                            <Input placeholder="07950 611430" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>

                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input type="email" placeholder="john@example.com" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="message"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Message</FormLabel>
                                    <FormControl>
                                        <Textarea
                                            rows={5}
                                            placeholder="Tell us about your project..."
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <Button
                            type="submit"
                            size="lg"
                            className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
                        >
                            Send Message
                        </Button>
                    </form>
                </Form>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="mt-20 relative"
                >
                    <div className="text-center">
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 }}
                            className="text-xl md:text-2xl text-muted-foreground mb-6 font-medium"
                        >
                            Or speak to a real expert right now
                        </motion.p>

                        {/* Animated Building Construction Icons */}
                        <div className="flex justify-center items-center gap-4 mb-8 flex-wrap">
                            <motion.div
                                animate={{
                                    y: [0, -12, 0],
                                    rotate: [0, -10, 10, 0],
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                            >
                                <Hammer className="h-10 w-10 text-yellow-600" />
                            </motion.div>

                            <motion.div
                                animate={{
                                    rotate: [0, 360],
                                    scale: [1, 1.2, 1],
                                }}
                                transition={{
                                    duration: 6,
                                    repeat: Infinity,
                                    ease: "linear",
                                }}
                            >
                                <Sparkles className="h-12 w-12 text-yellow-500" />
                            </motion.div>

                            <motion.div
                                animate={{
                                    y: [0, -15, 0],
                                    rotate: [0, 15, -15, 0],
                                }}
                                transition={{
                                    duration: 3.5,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                            >
                                <Paintbrush className="h-10 w-10 text-yellow-600" />
                            </motion.div>
                        </div>

                        {/* Epic Phone Number Reveal */}
                        <motion.div
                            className="relative inline-block"
                            initial={{ scale: 0.8, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.8, type: "spring", stiffness: 100 }}
                        >
                            <motion.a
                                href="tel:07950611430"
                                className="group relative inline-flex items-center gap-4 text-5xl md:text-6xl lg:text-7xl font-black tracking-tight
                   bg-gradient-to-r from-yellow-600 via-yellow-500 to-amber-600 bg-clip-text text-transparent
                   drop-shadow-lg"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Phone className="h-12 w-12 md:h-16 md:w-16 text-yellow-600 group-hover:animate-pulse" />

                                <motion.span
                                    initial={{ opacity: 0, x: -50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.8, delay: 1 }}
                                >
                                    07950 611430
                                </motion.span>

                                <motion.div
                                    className="absolute -inset-2 bg-yellow-500/20 rounded-full blur-xl"
                                    animate={{
                                        scale: [1, 1.3, 1],
                                        opacity: [0.4, 0.2, 0.4],
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                    }}
                                />

                                <ArrowRight className="h-10 w-10 text-yellow-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </motion.a>

                            {/* Pulsing ring effect */}
                            <motion.div
                                className="absolute inset-0 rounded-full border-4 border-yellow-500/50"
                                animate={{
                                    scale: [1, 1.4],
                                    opacity: [0.6, 0],
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeOut",
                                }}
                            />
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 1.4 }}
                            className="mt-8 text-lg text-muted-foreground font-medium"
                        >
                            Available 24/7 • Free quotes • No obligation
                        </motion.p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}