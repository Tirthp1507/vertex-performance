import React from "react";
import { Link } from "wouter";
import logoSrc from "@/assets/logo-transparent.png";

export default function Footer() {
  return (
    <footer className="mt-12 bg-foreground text-white">
      <div className="container py-12">
        <div className="border-t border-white/10 mb-8" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          <div className="flex items-center justify-center md:justify-start gap-4">
            <Link href="/" className="flex items-center">
              <img src={logoSrc} alt="Vertex logo" className="h-20 md:h-24 w-auto object-contain" />
            </Link>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <nav className="flex flex-col">
              <Link href="/about">
                <a className="text-white/80 hover:text-accent transition-colors py-2">About</a>
              </Link>
              <Link href="/services">
                <a className="text-white/80 hover:text-accent transition-colors py-2">Services</a>
              </Link>
              <Link href="/programs">
                <a className="text-white/80 hover:text-accent transition-colors py-2">Programs</a>
              </Link>
              <Link href="/who-we-help">
                <a className="text-white/80 hover:text-accent transition-colors py-2">Who We Help</a>
              </Link>
              <Link href="/gallery">
                <a className="text-white/80 hover:text-accent transition-colors py-2">Gallery</a>
              </Link>
              <Link href="/contact">
                <a className="text-white/80 hover:text-accent transition-colors py-2">Contact</a>
              </Link>
            </nav>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex flex-col space-y-2 text-white/80">
              <a href="#" className="hover:text-accent transition-colors py-1">Instagram</a>
              <a href="#" className="hover:text-accent transition-colors py-1">WhatsApp</a>
              <a href="/contact" className="hover:text-accent transition-colors py-1">Book a Consultation</a>
            </div>
            <div className="mt-4 text-white/70 text-sm">
              <div>Call: <a href="tel:+1234567890" className="text-white/90 hover:text-white">+1 (234) 567-890</a></div>
              <div className="mt-1">Email: <a href="mailto:info@vertexclinic.com" className="text-white/90 hover:text-white">info@vertexclinic.com</a></div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 mt-8 text-center text-white/50 text-sm">
          <p>© {new Date().getFullYear()} Vertex Performance Clinic. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
