import { Button } from "@/components/ui/button";
import { hero } from "@/data/projects";
import { NavLink } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative h-[68vh] min-h-[420px] w-full overflow-hidden">
      <img
        src={hero.image}
        alt="Modern architectural building"
        className="absolute inset-0 h-full w-full object-cover"
        loading="eager"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/30 to-background/10" />
      <div className="relative z-10 container mx-auto h-full flex items-center">
        <div className="max-w-2xl animate-enter">
          <h1 className="font-display text-4xl md:text-5xl mb-4 leading-tight">
            {hero.headline}
          </h1>
          <p className="text-muted-foreground mb-6">
            {hero.sub}
          </p>
          <div className="flex flex-wrap gap-3">
            <NavLink to="/portfolio"><Button variant="hero">View Portfolio</Button></NavLink>
            <NavLink to="/contact"><Button variant="outline">Contact Us</Button></NavLink>
          </div>
        </div>
      </div>
    </section>
  );
}
