import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";
import logoSrc from "@/assets/logo-transparent.png";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/programs", label: "Programs" },
    { href: "/who-we-help", label: "Who We Help" },
    { href: "/gallery", label: "Gallery" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-sm border-b border-border">
      <div className="container flex items-center justify-between h-24 px-2 sm:px-4">
        <Link
          href="/"
          className="flex items-center justify-center rounded-lg px-2 transition-all duration-200 hover:opacity-80"
        >
          <img
            src={logoSrc}
            alt="Vertex Clinic logo"
            className="h-20 w-auto object-contain"
          />
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm text-foreground hover:text-accent transition-colors">
              {item.label}
            </Link>
          ))}
        </div>

        <Link href="/contact" asChild className="hidden md:inline-flex">
          <Button className="bg-accent hover:bg-accent/90 text-white px-4 py-2 text-sm sm:text-base">
            Book Consultation
          </Button>
        </Link>

        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-white/95 backdrop-blur-sm">
          <div className="container px-4 py-4 flex flex-col gap-3">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-base text-foreground hover:text-accent transition-colors py-1"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link href="/contact" asChild onClick={() => setMobileMenuOpen(false)}>
              <Button className="mt-2 w-full bg-accent hover:bg-accent/90 text-white">
                Book Consultation
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
