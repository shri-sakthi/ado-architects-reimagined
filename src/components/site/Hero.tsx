import { Button } from "@/components/ui/button";
import { featuredProjects } from "@/data/projects";
import { NavLink } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import imgInterior from "@/assets/project-interior.jpg";
import imgCorporate from "@/assets/project-corporate.jpg";
import imgEducation from "@/assets/project-education.jpg";
import imgIndustrial from "@/assets/project-industrial.jpg";

export default function Hero() {
  return (
    <section className="min-h-screen bg-background flex flex-col">
      {/* Hero Content */}
      <div className="flex-1 container mx-auto px-4 py-16 flex flex-col justify-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left side - Text Content */}
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
              Transforming<br />
              <span className="text-muted-foreground">Ideas</span> Architecture
            </h1>
            <p className="text-lg text-muted-foreground max-w-md leading-relaxed">
              we specialize in turning creative concepts into immersive experiences, blending innovation with precision for a digital future
            </p>
          </div>

          {/* Right side - Image Grid */}
          <div className="grid grid-cols-2 gap-4 animate-fade-in">
            <div className="space-y-4">
              <div className="aspect-[4/3] overflow-hidden rounded-lg">
                <img 
                  src={featuredProjects[0]?.cover || imgInterior} 
                  alt="Modern interior space"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="aspect-[4/5] overflow-hidden rounded-lg">
                <img 
                  src={featuredProjects[1]?.cover || imgCorporate} 
                  alt="Corporate architecture"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="aspect-[4/5] overflow-hidden rounded-lg">
                <img 
                  src={featuredProjects[2]?.cover || imgEducation} 
                  alt="Educational facility"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="aspect-[4/3] overflow-hidden rounded-lg">
                <img 
                  src={featuredProjects[3]?.cover || imgIndustrial} 
                  alt="Industrial building"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Down Indicator */}
        <div className="flex justify-center pt-8">
          <button 
            onClick={() => document.getElementById('about-section')?.scrollIntoView({ behavior: 'smooth' })}
            className="w-12 h-12 rounded-full border border-muted-foreground/30 flex items-center justify-center hover:border-primary hover:bg-primary/5 transition-colors"
            aria-label="Scroll to about section"
          >
            <ChevronDown className="w-5 h-5 text-muted-foreground" />
          </button>
        </div>
      </div>
    </section>
  );
}