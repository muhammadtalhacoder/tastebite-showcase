import { Star } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  role: string;
  content: string;
  rating: number;
}

const TestimonialCard = ({ name, role, content, rating }: TestimonialCardProps) => {
  return (
    <div className="bg-card rounded-2xl p-6 md:p-8 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1">
      <div className="flex gap-1 mb-4">
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} size={18} className="fill-gold text-gold" />
        ))}
      </div>
      <p className="text-foreground/80 leading-relaxed mb-6 italic">
        "{content}"
      </p>
      <div className="border-t border-border pt-4">
        <p className="font-serif font-semibold text-foreground">{name}</p>
        <p className="text-muted-foreground text-sm">{role}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
