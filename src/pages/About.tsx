import { Helmet } from "react-helmet-async";
import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";
import img1 from "@/assets/project-corporate.jpg";
import img2 from "@/assets/project-education.jpg";

export default function About() {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>About Us | ADO Architects</title>
        <meta name="description" content="Learn about ADO Architects' vision, awards and experience delivering impactful architecture across South Africa." />
        <link rel="canonical" href="https://www.ado-architects.com/about" />
      </Helmet>
      <Navbar />
      <main className="container mx-auto py-10 space-y-14">
        <header>
          <h1 className="text-3xl font-semibold mb-3">About Us</h1>
          <p className="text-muted-foreground max-w-3xl">
            ADO Architects is a design‑led practice with a strong technical backbone. Our work balances clarity, craft and context to deliver enduring value for clients and communities.
          </p>
        </header>

        <section className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-xl font-semibold mb-2">Vision</h2>
            <p className="text-muted-foreground">
              We believe great architecture emerges from a rigorous understanding of people, programme and place — translating constraints into opportunity and values into built form.
            </p>
          </div>
          <img src={img1} alt="Office building project" className="rounded-lg border" loading="lazy" />
        </section>

        <section className="grid md:grid-cols-2 gap-10 items-center">
          <img src={img2} alt="Education project" className="rounded-lg border order-2 md:order-1" loading="lazy" />
          <div className="order-1 md:order-2">
            <h2 className="text-xl font-semibold mb-2">Experience</h2>
            <p className="text-muted-foreground">
              Our portfolio spans industrial campuses, corporate headquarters, healthcare upgrades, learning environments and complex refurbishments. We work collaboratively with specialist consultants to ensure technical excellence.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">Awards</h2>
          <ul className="grid md:grid-cols-2 gap-4 text-sm text-muted-foreground">
            <li>2024 – Regional Excellence – Industrial Architecture</li>
            <li>2023 – Corporate Interior – Merit Award</li>
            <li>2022 – Sustainable Design – Commendation</li>
            <li>2021 – Educational Facility – Winner</li>
          </ul>
        </section>
      </main>
      <Footer />
    </div>
  );
}
