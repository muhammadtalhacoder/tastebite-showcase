import { Leaf, Wine, Calendar } from "lucide-react";

interface HighlightCardProps {
  title: string;
  description: string;
  icon: "leaf" | "wine" | "calendar";
}

const iconMap = {
  leaf: Leaf,
  wine: Wine,
  calendar: Calendar,
};

const HighlightCard = ({ title, description, icon }: HighlightCardProps) => {
  const Icon = iconMap[icon];

  return (
    <div className="group text-center p-6 md:p-8 rounded-2xl bg-card shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1">
      <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
        <Icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
      </div>
      <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
        {title}
      </h3>
      <p className="text-muted-foreground text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default HighlightCard;
