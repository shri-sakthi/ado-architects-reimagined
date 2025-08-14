import { Mail, Phone, MapPin, Linkedin, Facebook } from "lucide-react";
import { NavLink } from "react-router-dom";
export default function Footer() {
  return <footer className="mt-16 border-t bg-[hsl(var(--footer-background))] text-[hsl(var(--footer-foreground))]">
      <div className="container mx-auto grid gap-10 md:grid-cols-4 py-12">
        <div className="space-y-3">
          <h3 className="text-lg font-semibold">ADO Architects</h3>
          <p>
            Innovative designs, timeless structures. Professional architectural
            services across South Africa.
          </p>
          <div className="flex items-center gap-4 pt-2">
            <a href="#" aria-label="LinkedIn" className="hover:text-accent"><Linkedin /></a>
            <a href="#" aria-label="Facebook" className="hover:text-accent"><Facebook /></a>
          </div>
        </div>

        <div>
          <h4 className="font-medium mb-3">Quick links</h4>
          <ul className="grid gap-2 text-sm">
            <li><NavLink to="/portfolio" className="hover:underline">Portfolio</NavLink></li>
            <li><NavLink to="/services" className="hover:underline">Services</NavLink></li>
            <li><NavLink to="/about" className="hover:underline">About Us</NavLink></li>
            <li><NavLink to="/contact" className="hover:underline">Contact Us</NavLink></li>
          </ul>
        </div>

        <div>
          <h4 className="font-medium mb-3">Contact</h4>
          <ul className="grid gap-2 text-sm">
            <li className="flex items-start gap-2"><Mail className="mt-0.5" /> info@ado-architects.com</li>
            <li className="flex items-start gap-2"><Phone className="mt-0.5" /> +27 (0)12 000 0000</li>
          </ul>
        </div>

        <div>
          <h4 className="font-medium mb-3">Offices</h4>
          <ul className="grid gap-3 text-sm">
            <li className="flex items-start gap-2"><MapPin className="mt-0.5" /> Pretoria, South Africa</li>
            <li className="flex items-start gap-2"><MapPin className="mt-0.5" /> Cape Town, South Africa</li>
          </ul>
        </div>
      </div>
      <div className="py-4 text-center text-xs">© {new Date().getFullYear()} ADO Architects. All rights reserved.</div>
    </footer>;
}