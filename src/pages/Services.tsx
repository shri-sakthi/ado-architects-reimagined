import { Helmet } from "react-helmet-async";
import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";
import { Ruler, Building2, LayoutDashboard, Hammer, MapPinned } from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "Architecture",
    desc: "End‑to‑end architectural design from briefing to handover — responsive, buildable, and future‑ready.",
  },
  {
    icon: Ruler,
    title: "Interior Design",
    desc: "Human‑centred interiors that combine material richness with durability and functional clarity.",
  },
  {
    icon: LayoutDashboard,
    title: "Space Planning",
    desc: "Data‑informed layouts that improve flow, collaboration and experiential quality.",
  },
  {
    icon: Hammer,
    title: "Project Management",
    desc: "Reliable coordination, programme control and cost oversight from inception to completion.",
  },
  {
    icon: MapPinned,
    title: "Master Planning",
    desc: "Strategic, scalable frameworks that unlock long‑term site value and environmental performance.",
  },
];

export default function Services() {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Services | ADO Architects</title>
        <meta name="description" content="Architecture, interior design, space planning, project management and master planning by ADO Architects." />
        <link rel="canonical" href="https://www.ado-architects.com/services" />
      </Helmet>
      <Navbar />
      <main className="container mx-auto py-10">
        <h1 className="text-3xl font-semibold mb-6">Services</h1>
        <p className="text-muted-foreground mb-10 max-w-3xl">
          We partner with clients to deliver holistic, sustainable solutions across the full life‑cycle of the built environment.
        </p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-lg border p-6 bg-card shadow-sm">
              <Icon className="h-6 w-6 text-accent" />
              <h2 className="mt-3 text-xl font-semibold">{title}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
