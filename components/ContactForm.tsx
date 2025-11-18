"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

const schema = z.object({
    name: z.string().min(2),
    email: z.string().email(),
    phone: z.string().min(10),
    message: z.string().min(10),
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
        <section id="contact" className="py-20 bg-primary text-white">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">Get Your Free Quote Today</h2>
                <p className="text-xl mb-12">No obligation – just honest advice</p>

                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="max-w-2xl mx-auto grid gap-6">
                        <div className="grid sm:grid-cols-2 gap-6">
                            <FormField control={form.control} name="name" render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-white">Name</FormLabel>
                                    <FormControl><Input {...field} className="bg-white/10 border-white/20 text-white placeholder:text-white/60" /></FormControl>
                                    <FormMessage />
                                </FormItem>
                            )} />
                            <FormField control={form.control} name="phone" render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-white">Phone</FormLabel>
                                    <FormControl><Input {...field} className="bg-white/10 border-white/20 text-white placeholder:text-white/60" /></FormControl>
                                    <FormMessage />
                                </FormItem>
                            )} />
                        </div>
                        <FormField control={form.control} name="email" render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-white">Email</FormLabel>
                                <FormControl><Input {...field} type="email" className="bg-white/10 border-white/20 text-white placeholder:text-white/60" /></FormControl>
                                <FormMessage />
                            </FormItem>
                        )} />
                        <FormField control={form.control} name="message" render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-white">Message</FormLabel>
                                <FormControl><Textarea rows={5} {...field} className="bg-white/10 border-white/20 text-white placeholder:text-white/60" /></FormControl>
                                <FormMessage />
                            </FormItem>
                        )} />
                        <Button type="submit" size="lg" className="w-full sm:w-auto bg-white text-primary hover:bg-gray-100">
                            Send Message
                        </Button>
                    </form>
                </Form>

                <div className="mt-12 text-2xl">
                    <p>Or call us directly:</p>
                    <a href="tel:02012345678" className="text-4xl font-bold underline">020 1234 5678</a>
                </div>
            </div>
        </section>
    );
}