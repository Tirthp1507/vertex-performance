import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import logoSrc from "@/assets/logo.png";

export default function Navbar() {
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
          <Link href="/about" className="text-sm text-foreground hover:text-accent transition-colors">
            About
          </Link>
          <Link href="/services" className="text-sm text-foreground hover:text-accent transition-colors">
            Services
          </Link>
          <Link href="/programs" className="text-sm text-foreground hover:text-accent transition-colors">
            Programs
          </Link>
          <Link href="/who-we-help" className="text-sm text-foreground hover:text-accent transition-colors">
            Who We Help
          </Link>
          <Link href="/gallery" className="text-sm text-foreground hover:text-accent transition-colors">
            Gallery
          </Link>
          <Link href="/contact" className="text-sm text-foreground hover:text-accent transition-colors">
            Contact
          </Link>
        </div>

        <Link href="/contact" asChild>
          <Button className="bg-accent hover:bg-accent/90 text-white px-4 py-2 text-sm sm:text-base">
            Book Consultation
          </Button>
        </Link>
      </div>
    </nav>
  );
}
