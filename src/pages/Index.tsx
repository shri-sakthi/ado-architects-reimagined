import { Helmet } from "react-helmet-async";
import Navbar from "@/components/site/Navbar";
import Hero from "@/components/site/Hero";
import AwardsCarousel from "@/components/site/AwardsCarousel";
import Footer from "@/components/site/Footer";
import ProjectCard from "@/components/site/ProjectCard";
import { featuredProjects } from "@/data/projects";
import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";

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

        {/* About snapshot */}
        <section className="container mx-auto py-12">
          <div className="grid md:grid-cols-3 gap-10 items-start">
            <div className="md:col-span-2">
              <h2 className="text-2xl font-semibold mb-3">About ADO Architects</h2>
              <p className="text-muted-foreground max-w-2xl">
                We create purposeful spaces that balance innovation, practicality, and sustainability. Our team brings decades of experience across industrial, corporate, education, healthcare and public projects.
              </p>
            </div>
            <div className="flex md:justify-end">
              <NavLink to="/about"><Button variant="outline">Learn more</Button></NavLink>
            </div>
          </div>
        </section>

        {/* Featured projects */}
        <section className="container mx-auto py-6">
          <div className="flex items-end justify-between mb-6">
            <h2 className="text-2xl font-semibold">Featured Projects</h2>
            <NavLink to="/portfolio"><Button variant="ghost">View all</Button></NavLink>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {featuredProjects.slice(0,3).map((p) => (
              <ProjectCard key={p.slug} to={`/portfolio/${p.slug}`} title={p.title} category={p.category} image={p.cover} />
            ))}
          </div>
        </section>

        <AwardsCarousel />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
