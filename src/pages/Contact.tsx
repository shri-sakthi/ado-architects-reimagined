import { Helmet } from "react-helmet-async";
import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import { Mail, ArrowRight, Phone, MapPin } from "lucide-react";
const schema = z.object({
  name: z.string().min(2, "Please enter your full name"),
  email: z.string().email("Enter a valid email address"),
  message: z.string().min(10, "Please enter a short message")
});
type FormData = z.infer<typeof schema>;
export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: {
      errors,
      isSubmitting
    },
    reset
  } = useForm<FormData>({
    resolver: zodResolver(schema)
  });
  const onSubmit = async (data: FormData) => {
    // Placeholder submit — could be wired to Supabase or an email service
    await new Promise(r => setTimeout(r, 600));
    toast({
      title: "Message sent",
      description: "Thanks for reaching out — we'll get back to you shortly."
    });
    reset();
  };
  return <div className="min-h-screen">
      <Helmet>
        <title>Contact Us | ADO Architects</title>
        <meta name="description" content="Get in touch with ADO Architects' Pretoria and Cape Town offices. Send an enquiry or locate us on the map." />
        <link rel="canonical" href="https://www.ado-architects.com/contact" />
      </Helmet>
      <Navbar />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-2 bg-white/10 text-white rounded-full text-sm font-medium mb-6">
              Get in Touch
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-orange-400 to-yellow-400 bg-clip-text text-transparent">
              Contact ADO Architects
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
              Ready to discuss your project? Reach out to our experienced team across Pretoria and Cape Town offices.
            </p>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-6 py-16 space-y-20">
        {/* Contact Form and Info Section */}
        <section className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Form */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 text-primary font-medium">
                <div className="w-8 h-0.5 bg-primary"></div>
                Send us a message
              </div>
              <h2 className="text-3xl font-bold">Start Your Project Journey</h2>
              <p className="text-muted-foreground">
                Tell us about your vision and we'll help bring it to life with our expertise in architectural design.
              </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Name</label>
                  <Input 
                    {...register("name")} 
                    aria-invalid={!!errors.name}
                    className="bg-muted/50 border-muted focus:bg-background transition-colors"
                    placeholder="Your full name"
                  />
                  {errors.name && <p className="text-xs text-destructive">{errors.name.message}</p>}
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Email</label>
                  <Input 
                    type="email" 
                    {...register("email")} 
                    aria-invalid={!!errors.email}
                    className="bg-muted/50 border-muted focus:bg-background transition-colors"
                    placeholder="your.email@domain.com"
                  />
                  {errors.email && <p className="text-xs text-destructive">{errors.email.message}</p>}
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Message</label>
                <Textarea 
                  rows={6} 
                  {...register("message")} 
                  aria-invalid={!!errors.message}
                  className="bg-muted/50 border-muted focus:bg-background transition-colors resize-none"
                  placeholder="Tell us about your project requirements..."
                />
                {errors.message && <p className="text-xs text-destructive">{errors.message.message}</p>}
              </div>
              <Button 
                type="submit" 
                variant="cta" 
                size="cta" 
                disabled={isSubmitting}
                className="w-full md:w-auto"
              >
                <Mail className="w-4 h-4" />
                <span className="font-semibold">{isSubmitting ? "Sending..." : "Send Message"}</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
            </form>
          </div>

          {/* Quick Contact Info */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 text-primary font-medium">
                <div className="w-8 h-0.5 bg-primary"></div>
                Quick Contact
              </div>
              <h2 className="text-3xl font-bold">Reach Out Directly</h2>
            </div>

            <div className="grid gap-6">
              <div className="bg-muted/30 p-6 rounded-2xl border">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 text-primary rounded-lg">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email Us</h3>
                    <p className="text-sm text-muted-foreground mb-2">Send us your enquiry</p>
                    <p className="text-sm font-medium">info@ado-architects.co.za</p>
                  </div>
                </div>
              </div>

              <div className="bg-muted/30 p-6 rounded-2xl border">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 text-primary rounded-lg">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Call Us</h3>
                    <p className="text-sm text-muted-foreground mb-2">Speak to our team</p>
                    <div className="space-y-1">
                      <p className="text-sm font-medium">Pretoria: (012) 347-3515</p>
                      <p className="text-sm font-medium">Cape Town: (021) 854-3109</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-muted/30 p-6 rounded-2xl border">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 text-primary rounded-lg">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Visit Us</h3>
                    <p className="text-sm text-muted-foreground mb-2">Two convenient locations</p>
                    <div className="space-y-1">
                      <p className="text-xs font-medium">Pretoria & Cape Town</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Office Locations */}
        <section className="space-y-12">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 text-primary font-medium mb-4">
              <div className="w-8 h-0.5 bg-primary"></div>
              Our Locations
              <div className="w-8 h-0.5 bg-primary"></div>
            </div>
            <h2 className="text-3xl font-bold mb-4">Visit Our Offices</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We have offices in both Pretoria and Cape Town to serve you better across South Africa.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Pretoria Office */}
            <div className="bg-gradient-to-br from-muted/30 to-background rounded-3xl p-8 border">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-primary/10 text-primary rounded-lg">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold">Pretoria Office</h3>
                </div>

                <div className="space-y-4">
                  <div className="grid gap-3">
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-medium w-20">Director:</span>
                      <span className="text-sm">Thomas Ortner</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm">to@ado-architects.co.za</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm">(012) 347-3515</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div>
                      <h4 className="text-sm font-medium mb-1">Physical Address:</h4>
                      <p className="text-sm text-muted-foreground">
                        382 Rigel Avenue<br />
                        Erasmusrand<br />
                        Pretoria 0181
                      </p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium mb-1">Postal Address:</h4>
                      <p className="text-sm text-muted-foreground">
                        PO Box 37787<br />
                        Faerie Glen, Pretoria 0043
                      </p>
                    </div>
                  </div>
                </div>

                <div className="aspect-[16/10] rounded-xl overflow-hidden border bg-muted/50">
                  <iframe 
                    title="Pretoria office location map" 
                    className="h-full w-full" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade" 
                    src="https://www.google.com/maps?q=382+Rigel+Avenue,+Erasmusrand,+Pretoria,+0181,+South+Africa&output=embed" 
                  />
                </div>
              </div>
            </div>

            {/* Cape Town Office */}
            <div className="bg-gradient-to-br from-muted/30 to-background rounded-3xl p-8 border">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-primary/10 text-primary rounded-lg">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold">Cape Town Office</h3>
                </div>

                <div className="space-y-4">
                  <div className="grid gap-3">
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-medium w-20">Director:</span>
                      <span className="text-sm">Johan de Villiers</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm">jdv@ado-architects.co.za</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm">(021) 854-3109</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div>
                      <h4 className="text-sm font-medium mb-1">Physical Address:</h4>
                      <p className="text-sm text-muted-foreground">
                        3 Myburgh Street<br />
                        Strand<br />
                        Cape Town 7140
                      </p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium mb-1">Postal Address:</h4>
                      <p className="text-sm text-muted-foreground">
                        PO Box 513<br />
                        Strand, Western Cape 7139
                      </p>
                    </div>
                  </div>
                </div>

                <div className="aspect-[16/10] rounded-xl overflow-hidden border bg-muted/50">
                  <iframe 
                    title="Cape Town office location map" 
                    className="h-full w-full" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade" 
                    src="https://www.google.com/maps?q=3+Myburgh+Street,+Strand,+Cape+Town,+7140,+South+Africa&output=embed" 
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>;
}