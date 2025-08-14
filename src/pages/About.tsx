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
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background via-muted/20 to-background py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
              About ADO Architects
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
              Design-Led Architecture with Technical Excellence
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              ADO Architects is a design‑led practice with a strong technical backbone. Our work balances clarity, craft and context to deliver enduring value for clients and communities.
            </p>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-6 py-16 space-y-20">
        {/* Vision Section */}
        <section className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 text-primary font-medium">
                <div className="w-8 h-0.5 bg-primary"></div>
                Our Vision
              </div>
              <h2 className="text-3xl font-bold">Transforming Constraints into Opportunities</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                We believe great architecture emerges from a rigorous understanding of people, programme and place — translating constraints into opportunity and values into built form.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="p-4 bg-muted/50 rounded-lg">
                <h3 className="font-semibold text-sm">People-Centered</h3>
                <p className="text-xs text-muted-foreground mt-1">Understanding human needs</p>
              </div>
              <div className="p-4 bg-muted/50 rounded-lg">
                <h3 className="font-semibold text-sm">Context-Aware</h3>
                <p className="text-xs text-muted-foreground mt-1">Respecting local environment</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-2xl"></div>
            <img src={img1} alt="Office building project showcasing our architectural vision" className="rounded-2xl shadow-xl relative z-10" loading="lazy" />
          </div>
        </section>

        {/* Experience Section */}
        <section className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-2xl"></div>
            <img src={img2} alt="Education project demonstrating our experience" className="rounded-2xl shadow-xl relative z-10" loading="lazy" />
          </div>
          <div className="space-y-6 order-1 lg:order-2">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 text-primary font-medium">
                <div className="w-8 h-0.5 bg-primary"></div>
                Our Experience
              </div>
              <h2 className="text-3xl font-bold">Diverse Portfolio, Technical Excellence</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Our portfolio spans industrial campuses, corporate headquarters, healthcare upgrades, learning environments and complex refurbishments. We work collaboratively with specialist consultants to ensure technical excellence.
              </p>
            </div>
            <div className="space-y-3 pt-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-sm font-medium">Industrial Campuses</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-sm font-medium">Corporate Headquarters</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-sm font-medium">Learning Environments</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-sm font-medium">Healthcare Facilities</span>
              </div>
            </div>
          </div>
        </section>

        {/* Awards Section */}
        <section className="bg-gradient-to-br from-muted/30 to-background rounded-3xl p-8 md:p-12">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-primary font-medium mb-4">
              <div className="w-8 h-0.5 bg-primary"></div>
              Recognition
              <div className="w-8 h-0.5 bg-primary"></div>
            </div>
            <h2 className="text-3xl font-bold mb-4">Awards & Achievements</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our commitment to excellence has been recognized through various industry awards and accolades.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-background/80 backdrop-blur-sm p-6 rounded-2xl border shadow-sm">
              <div className="text-primary font-bold text-lg mb-2">2024</div>
              <h3 className="font-semibold mb-1">Regional Excellence</h3>
              <p className="text-sm text-muted-foreground">Industrial Architecture</p>
            </div>
            <div className="bg-background/80 backdrop-blur-sm p-6 rounded-2xl border shadow-sm">
              <div className="text-primary font-bold text-lg mb-2">2023</div>
              <h3 className="font-semibold mb-1">Merit Award</h3>
              <p className="text-sm text-muted-foreground">Corporate Interior</p>
            </div>
            <div className="bg-background/80 backdrop-blur-sm p-6 rounded-2xl border shadow-sm">
              <div className="text-primary font-bold text-lg mb-2">2022</div>
              <h3 className="font-semibold mb-1">Commendation</h3>
              <p className="text-sm text-muted-foreground">Sustainable Design</p>
            </div>
            <div className="bg-background/80 backdrop-blur-sm p-6 rounded-2xl border shadow-sm">
              <div className="text-primary font-bold text-lg mb-2">2021</div>
              <h3 className="font-semibold mb-1">Winner</h3>
              <p className="text-sm text-muted-foreground">Educational Facility</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
