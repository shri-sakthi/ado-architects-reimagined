import { NavLink } from "react-router-dom";
import { Card } from "@/components/ui/card";

type Props = {
  to: string;
  title: string;
  image: string;
  category: string;
};

export default function ProjectCard({ to, title, image, category }: Props) {
  return (
    <NavLink to={to} className="block group focus:outline-none">
      <Card className="overflow-hidden transition-transform duration-200 group-hover:-translate-y-0.5 shadow-sm hover:shadow-[var(--shadow-elegant)]">
        <div className="aspect-[16/10] overflow-hidden">
          <img src={image} alt={`${title} – ${category}`} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]" loading="lazy" />
        </div>
        <div className="p-4">
          <p className="text-xs text-accent font-medium">{category}</p>
          <h3 className="mt-1 text-lg font-semibold">{title}</h3>
        </div>
      </Card>
    </NavLink>
  );
}
