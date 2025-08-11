import { Helmet } from "react-helmet-async";
import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";
import ProjectCard from "@/components/site/ProjectCard";
import { categories, featuredProjects } from "@/data/projects";

export default function Portfolio() {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Portfolio | ADO Architects</title>
        <meta name="description" content="Explore ADO Architects' portfolio across industrial, corporate, education, healthcare and more." />
        <link rel="canonical" href="https://www.ado-architects.com/portfolio" />
      </Helmet>
      <Navbar />
      <main className="container mx-auto py-10">
        <h1 className="text-3xl font-semibold mb-6">Portfolio</h1>
        <p className="text-muted-foreground mb-8">Browse by category</p>

        <div className="grid gap-3 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mb-12">
          {categories.map((c) => (
            <a key={c} href={`#${c.toLowerCase().replace(/\W+/g, '-')}`} className="rounded-md border bg-secondary/50 px-4 py-3 hover:bg-secondary transition">
              {c}
            </a>
          ))}
        </div>

        <section id="featured" className="space-y-6">
          <h2 className="text-2xl font-semibold">Projects</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {featuredProjects.map((p) => (
              <ProjectCard key={p.slug} to={`/portfolio/${p.slug}`} title={p.title} category={p.category} image={p.cover} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
