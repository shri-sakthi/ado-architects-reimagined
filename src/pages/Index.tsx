import { Helmet } from "react-helmet-async";
import Navbar from "@/components/site/Navbar";
import Hero from "@/components/site/Hero";
import AwardsCarousel from "@/components/site/AwardsCarousel";
import Footer from "@/components/site/Footer";
import ProjectCard from "@/components/site/ProjectCard";
import { featuredProjects } from "@/data/projects";
import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";
import imgBuilding from "@/assets/building-exterior.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>ADO Architects | Innovative Designs, Timeless Structures</title>
        <meta name="description" content="ADO Architects delivers innovative, sustainable architectural solutions across South Africa. Explore our portfolio and services." />
        <link rel="canonical" href="https://www.ado-architects.com/" />
      </Helmet>

      <Navbar />
      <main>
        <Hero />

        {/* About Section */}
        <section id="about-section" className="bg-muted/20">
          <div className="container mx-auto px-6 md:px-8 lg:px-12 py-12 md:py-16 lg:py-20">
            <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
              {/* Left side - About Content */}
              <div className="space-y-6 md:space-y-8 order-2 lg:order-1">
                <div className="inline-flex items-center px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-background border text-xs md:text-sm font-medium">
                  ABOUT US
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                  Agency in the field of<br />
                  <span className="text-muted-foreground">architecture</span>
                </h2>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  Experience Architectural Ingenuity: As a leading agency in the field of architecture, we bring visionary concepts to life through cutting-edge design and technical mastery
                </p>
                <Button 
                  asChild 
                  className="bg-foreground text-background hover:bg-foreground/90 rounded-full px-6 md:px-8 py-2.5 md:py-3 font-medium text-sm md:text-base"
                >
                  <NavLink to="/about">See More</NavLink>
                </Button>
              </div>

              {/* Right side - Large Image */}
              <div className="relative order-1 lg:order-2">
                <div className="aspect-[4/5] overflow-hidden rounded-lg">
                  <img 
                    src={imgBuilding} 
                    alt="Modern gray building architecture by Steven Hylands"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Projects Section */}
        <section className="bg-background">
          <div className="container mx-auto px-6 md:px-8 lg:px-12 py-12 md:py-16 lg:py-20">
            <div className="text-center mb-10 md:mb-12 lg:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">Featured Projects</h2>
              <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
                Discover our portfolio of innovative architectural solutions that shape environments and inspire communities
              </p>
            </div>
            
            <div className="grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3 mb-8 md:mb-12">
              {featuredProjects.slice(0,3).map((p) => (
                <ProjectCard key={p.slug} to={`/portfolio/${p.slug}`} title={p.title} category={p.category} image={p.cover} />
              ))}
            </div>

            <div className="text-center">
              <Button asChild variant="outline" size="lg" className="rounded-full px-6 md:px-8 text-sm md:text-base">
                <NavLink to="/portfolio">View All Projects</NavLink>
              </Button>
            </div>
          </div>
        </section>

        <AwardsCarousel />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
