import { NavLink } from "react-router-dom";
import { Menu } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const logoUrl = "/lovable-uploads/7a44b835-37fd-425b-a9b6-b1bd312ab563.png";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About Us" },
  { to: "/contact", label: "Contact Us" },
];

const activeCls = ({ isActive }: { isActive: boolean }) =>
  `${isActive ? "text-primary" : "text-foreground"} transition-colors duration-200 hover:text-accent`;

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/70 border-b">
      <div className="container mx-auto flex items-center justify-between py-3">
        <NavLink to="/" className="flex items-center gap-3">
          <img
            src={logoUrl}
            alt="ADO Architects logo"
            className="h-10 w-auto"
            loading="eager"
          />
        </NavLink>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} end className={activeCls}>
              {item.label}
            </NavLink>
          ))}
          <NavLink to="/contact">
            <Button variant="hero" className="ml-2">Get in touch</Button>
          </NavLink>
        </nav>

        {/* Mobile nav */}
        <div className="md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Open menu">
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-64">
              <nav className="mt-8 grid gap-4">
                {navItems.map((item) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    end
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `px-2 py-1 rounded ${isActive ? "bg-secondary text-primary" : "hover:bg-secondary"}`
                    }
                  >
                    {item.label}
                  </NavLink>
                ))}
                <NavLink to="/contact" onClick={() => setOpen(false)}>
                  <Button variant="hero" className="w-full">Get in touch</Button>
                </NavLink>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
