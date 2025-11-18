import Link from "next/link";
import { Button } from "@/components/ui/button";

type Item = { label: string; href: string };

export default function MobileMenu({ items }: { items: Item[] }) {
    return (
        <nav className="flex flex-col gap-6 mt-10">
            {items.map((item) => (
                <Link
                    key={item.label}
                    href={item.href}
                    className="text-xl font-medium text-muted-foreground hover:text-primary"
                >
                    {item.label}
                </Link>
            ))}
            <Button asChild className="w-full">
                <Link href="tel:02012345678">Call 020 1234 5678</Link>
            </Button>
        </nav>
    );
}