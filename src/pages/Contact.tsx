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
import { Mail, ArrowRight } from "lucide-react";
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
      <main className="container mx-auto py-10 space-y-12">
        <h1 className="text-3xl font-semibold">Contact Us</h1>

        <section className="grid lg:grid-cols-2 gap-10">
          <div className="space-y-6">
            <h2 className="text-xl font-semibold">Send us a message</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4 max-w-xl">
              <div>
                <label className="text-sm">Name</label>
                <Input {...register("name")} aria-invalid={!!errors.name} />
                {errors.name && <p className="text-xs text-destructive mt-1">{errors.name.message}</p>}
              </div>
              <div>
                <label className="text-sm">Email</label>
                <Input type="email" {...register("email")} aria-invalid={!!errors.email} />
                {errors.email && <p className="text-xs text-destructive mt-1">{errors.email.message}</p>}
              </div>
              <div>
                <label className="text-sm">Message</label>
                <Textarea rows={5} {...register("message")} aria-invalid={!!errors.message} />
                {errors.message && <p className="text-xs text-destructive mt-1">{errors.message.message}</p>}
              </div>
              <Button type="submit" variant="cta" size="cta" disabled={isSubmitting}>
                
                <span className="font-semibold">{isSubmitting ? "Sending..." : "Send Message"}</span>
                <ArrowRight />
              </Button>
            </form>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="font-medium text-lg">Pretoria Office</h3>
              <div className="space-y-2 mt-3">
                <p className="text-sm"><span className="font-medium">Director:</span> Thomas Ortner</p>
                <p className="text-sm"><span className="font-medium">Email:</span> to@ado-architects.co.za</p>
                <p className="text-sm"><span className="font-medium">Phone:</span> (012) 347-3515</p>
                <div className="space-y-1">
                  <p className="text-sm"><span className="font-medium">Address:</span></p>
                  <p className="text-sm text-muted-foreground">382 Rigel Avenue<br />Erasmusrand<br />Pretoria 0181</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm"><span className="font-medium">Postal Address:</span></p>
                  <p className="text-sm text-muted-foreground">PO Box 37787<br />Faerie Glen, Pretoria 0043</p>
                </div>
              </div>
              <div className="mt-4 aspect-[16/10] rounded-lg overflow-hidden border">
                <iframe title="Pretoria map" className="h-full w-full" loading="lazy" referrerPolicy="no-referrer-when-downgrade" src="https://www.google.com/maps?q=382+Rigel+Avenue,+Erasmusrand,+Pretoria,+0181,+South+Africa&output=embed" />
              </div>
            </div>

            <div>
              <h3 className="font-medium text-lg">Cape Town Office</h3>
              <div className="space-y-2 mt-3">
                <p className="text-sm"><span className="font-medium">Director:</span> Johan de Villiers</p>
                <p className="text-sm"><span className="font-medium">Email:</span> jdv@ado-architects.co.za</p>
                <p className="text-sm"><span className="font-medium">Phone:</span> (021) 854-3109</p>
                <div className="space-y-1">
                  <p className="text-sm"><span className="font-medium">Address:</span></p>
                  <p className="text-sm text-muted-foreground">3 Myburgh Street<br />Strand<br />Cape Town 7140</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm"><span className="font-medium">Postal Address:</span></p>
                  <p className="text-sm text-muted-foreground">PO Box 513<br />Strand, Western Cape 7139</p>
                </div>
              </div>
              <div className="mt-4 aspect-[16/10] rounded-lg overflow-hidden border">
                <iframe title="Cape Town map" className="h-full w-full" loading="lazy" referrerPolicy="no-referrer-when-downgrade" src="https://www.google.com/maps?q=3+Myburgh+Street,+Strand,+Cape+Town,+7140,+South+Africa&output=embed" />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>;
}