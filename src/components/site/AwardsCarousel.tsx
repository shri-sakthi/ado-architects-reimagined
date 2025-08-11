import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const awards = [
  { year: "2024", title: "Regional Excellence – Industrial Architecture" },
  { year: "2023", title: "Corporate Interior – Merit Award" },
  { year: "2022", title: "Sustainable Design – Commendation" },
  { year: "2021", title: "Educational Facility – Winner" },
  { year: "2020", title: "Healthcare Upgrade – Finalist" },
  { year: "2019", title: "Urban Regeneration – Shortlisted" },
];

export default function AwardsCarousel() {
  return (
    <section className="container mx-auto py-12">
      <h2 className="text-2xl font-semibold mb-6">Awards & Achievements</h2>
      <Carousel opts={{ loop: true, align: "start" }}>
        <CarouselContent>
          {awards.map((a) => (
            <CarouselItem key={a.title} className="md:basis-1/3 lg:basis-1/4">
              <div className="rounded-lg border bg-card p-6 shadow-sm h-full flex flex-col">
                <span className="text-accent font-semibold">{a.year}</span>
                <p className="mt-2 text-sm text-muted-foreground">{a.title}</p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="mt-4 flex justify-center gap-3">
          <CarouselPrevious />
          <CarouselNext />
        </div>
      </Carousel>
    </section>
  );
}
