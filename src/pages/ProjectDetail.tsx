import { useParams, NavLink } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";
import { featuredProjects } from "@/data/projects";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = featuredProjects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <main className="container mx-auto py-24 text-center">
          <h1 className="text-3xl font-semibold mb-4">Project not found</h1>
          <NavLink to="/portfolio"><Button variant="outline">Back to Portfolio</Button></NavLink>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>{project.title} | ADO Architects</title>
        <meta name="description" content={`${project.title} – ${project.description}`} />
        <link rel="canonical" href={`https://www.ado-architects.com/portfolio/${project.slug}`} />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Project",
          name: project.title,
          description: project.description,
          location: project.location,
          startDate: project.year,
        })}</script>
      </Helmet>
      <Navbar />
      <main className="container mx-auto py-10">
        <h1 className="text-3xl font-semibold mb-6">{project.title}</h1>

        <Carousel opts={{ loop: true }}>
          <CarouselContent>
            {project.images.map((src, idx) => (
              <CarouselItem key={idx}>
                <div className="aspect-[16/9] overflow-hidden rounded-lg border bg-muted">
                  <img src={src} alt={`${project.title} image ${idx + 1}`} className="h-full w-full object-cover" loading="lazy" />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="mt-4 flex justify-center gap-3">
            <CarouselPrevious />
            <CarouselNext />
          </div>
        </Carousel>

        <div className="mt-10 grid md:grid-cols-3 gap-10">
          <div className="md:col-span-2 space-y-4">
            <h2 className="text-xl font-semibold">Project Overview</h2>
            <p className="text-muted-foreground">{project.description}</p>
          </div>
          <aside className="space-y-2">
            <h3 className="font-medium">Details</h3>
            <ul className="text-sm grid gap-1">
              {project.location && (<li><span className="text-muted-foreground">Location:</span> {project.location}</li>)}
              {project.client && (<li><span className="text-muted-foreground">Client:</span> {project.client}</li>)}
              {project.year && (<li><span className="text-muted-foreground">Year:</span> {project.year}</li>)}
            </ul>

            <h3 className="font-medium mt-4">Key features</h3>
            <ul className="list-disc pl-5 text-sm text-muted-foreground">
              {project.features.map((f) => (<li key={f}>{f}</li>))}
            </ul>
          </aside>
        </div>
      </main>
      <Footer />
    </div>
  );
}
