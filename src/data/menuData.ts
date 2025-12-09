import dishSteak from "@/assets/dish-steak.jpg";
import dishPasta from "@/assets/dish-pasta.jpg";
import dishBruschetta from "@/assets/dish-bruschetta.jpg";
import dishDessert from "@/assets/dish-dessert.jpg";
import dishSalad from "@/assets/dish-salad.jpg";
import dishSoup from "@/assets/dish-soup.jpg";
import drinkCocktail from "@/assets/drink-cocktail.jpg";

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: "starters" | "mains" | "desserts" | "drinks";
  image: string;
  featured?: boolean;
}

export const menuItems: MenuItem[] = [
  {
    id: "1",
    name: "Caprese Bruschetta",
    description: "Toasted sourdough topped with fresh tomatoes, creamy burrata, basil, and aged balsamic",
    price: 14,
    category: "starters",
    image: dishBruschetta,
    featured: true,
  },
  {
    id: "2",
    name: "French Onion Soup",
    description: "Rich caramelized onion broth with melted Gruyère cheese and crusty bread",
    price: 12,
    category: "starters",
    image: dishSoup,
  },
  {
    id: "3",
    name: "Caesar Salad",
    description: "Crisp romaine lettuce, house-made dressing, parmesan, and garlic croutons with grilled chicken",
    price: 16,
    category: "starters",
    image: dishSalad,
  },
  {
    id: "4",
    name: "Pan-Seared Filet Mignon",
    description: "8oz prime beef tenderloin with roasted vegetables and red wine reduction",
    price: 48,
    category: "mains",
    image: dishSteak,
    featured: true,
  },
  {
    id: "5",
    name: "Seafood Linguine",
    description: "Fresh shrimp, mussels, and clams in white wine garlic sauce with fresh herbs",
    price: 36,
    category: "mains",
    image: dishPasta,
    featured: true,
  },
  {
    id: "6",
    name: "Herb-Roasted Chicken",
    description: "Free-range half chicken with rosemary potatoes and seasonal vegetables",
    price: 32,
    category: "mains",
    image: dishSalad,
  },
  {
    id: "7",
    name: "Chocolate Lava Cake",
    description: "Warm chocolate cake with molten center, vanilla bean ice cream, and raspberry coulis",
    price: 14,
    category: "desserts",
    image: dishDessert,
    featured: true,
  },
  {
    id: "8",
    name: "Crème Brûlée",
    description: "Classic French vanilla custard with caramelized sugar crust and fresh berries",
    price: 12,
    category: "desserts",
    image: dishDessert,
  },
  {
    id: "9",
    name: "Signature Old Fashioned",
    description: "Premium bourbon, Angostura bitters, orange peel, and demerara sugar",
    price: 16,
    category: "drinks",
    image: drinkCocktail,
  },
  {
    id: "10",
    name: "Espresso Martini",
    description: "Vodka, fresh espresso, Kahlúa, and vanilla with a coffee bean garnish",
    price: 18,
    category: "drinks",
    image: drinkCocktail,
  },
];

export const testimonials = [
  {
    id: "1",
    name: "Sarah Mitchell",
    role: "Food Critic",
    content: "TasteBite delivers an extraordinary dining experience. The attention to detail in every dish is remarkable, and the ambiance is simply perfect for any occasion.",
    rating: 5,
  },
  {
    id: "2",
    name: "James Rodriguez",
    role: "Regular Guest",
    content: "I've been coming here for years and the quality never wavers. The filet mignon is the best I've ever had, and the service is always impeccable.",
    rating: 5,
  },
  {
    id: "3",
    name: "Emily Chen",
    role: "Anniversary Dinner",
    content: "We celebrated our 10th anniversary here and it was magical. The staff made us feel so special, and the chocolate lava cake was the perfect ending.",
    rating: 5,
  },
];

export const highlights = [
  {
    title: "Farm to Table",
    description: "We source our ingredients from local farms, ensuring the freshest and most flavorful dishes.",
    icon: "leaf",
  },
  {
    title: "Expert Sommeliers",
    description: "Our wine collection features over 200 labels, expertly curated to complement every meal.",
    icon: "wine",
  },
  {
    title: "Private Events",
    description: "Host your special occasions in our elegant private dining rooms with personalized service.",
    icon: "calendar",
  },
];
