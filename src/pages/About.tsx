import Layout from "@/components/Layout";
import GalleryGrid from "@/components/GalleryGrid";

import chefImage from "@/assets/chef-portrait.jpg";
import interiorImage from "@/assets/restaurant-interior.jpg";
import heroImage from "@/assets/hero-restaurant.jpg";
import dishSteak from "@/assets/dish-steak.jpg";
import dishPasta from "@/assets/dish-pasta.jpg";
import dishDessert from "@/assets/dish-dessert.jpg";

const galleryImages = [
  { src: interiorImage, alt: "Restaurant Interior" },
  { src: heroImage, alt: "Dining Area" },
  { src: dishSteak, alt: "Steak Dish" },
  { src: dishPasta, alt: "Pasta Dish" },
  { src: dishDessert, alt: "Dessert" },
  { src: chefImage, alt: "Our Chef" },
];

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-secondary/30 py-16 md:py-24">
        <div className="container-custom text-center">
          <p className="text-primary uppercase tracking-[0.2em] text-sm font-medium mb-3">
            Our Journey
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            About TasteBite
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A legacy of culinary excellence, warm hospitality, and unforgettable dining experiences.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <img
                src={interiorImage}
                alt="Our Restaurant"
                className="rounded-2xl shadow-medium w-full"
              />
            </div>
            <div>
              <p className="text-primary uppercase tracking-[0.2em] text-sm font-medium mb-3">
                Est. 2010
              </p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  TasteBite was born from a simple dream: to create a place where exceptional food
                  meets genuine hospitality. What started as a small bistro in the heart of the city
                  has blossomed into a beloved culinary destination.
                </p>
                <p>
                  Our founder, Chef Marcus Romano, brought his passion for Mediterranean flavors
                  and French techniques to create a menu that celebrates the art of cooking.
                  Every dish tells a story of tradition, innovation, and love for quality ingredients.
                </p>
                <p>
                  Over the years, we've had the privilege of serving thousands of guests, celebrating
                  countless milestones, and creating memories that last a lifetime. Our commitment
                  to excellence remains as strong as ever.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chef Section */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="order-2 lg:order-1">
              <p className="text-primary uppercase tracking-[0.2em] text-sm font-medium mb-3">
                Meet the Maestro
              </p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
                Chef Marcus Romano
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  With over 25 years of culinary experience across three continents, Chef Marcus
                  brings a world of flavors to every plate. Trained at Le Cordon Bleu in Paris
                  and honed in the kitchens of Michelin-starred restaurants, his expertise is unmatched.
                </p>
                <p>
                  Chef Marcus believes in letting ingredients shine. He sources produce from local
                  farms, seafood from sustainable fisheries, and spices from around the globe to
                  create dishes that are both familiar and extraordinary.
                </p>
                <p>
                  "Cooking is an act of love," he says. "When you cook with passion, people can
                  taste it in every bite."
                </p>
              </div>
              <div className="mt-8 flex gap-8">
                <div>
                  <p className="font-serif text-3xl font-bold text-primary">25+</p>
                  <p className="text-muted-foreground text-sm">Years Experience</p>
                </div>
                <div>
                  <p className="font-serif text-3xl font-bold text-primary">3</p>
                  <p className="text-muted-foreground text-sm">Continents</p>
                </div>
                <div>
                  <p className="font-serif text-3xl font-bold text-primary">∞</p>
                  <p className="text-muted-foreground text-sm">Passion</p>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <img
                src={chefImage}
                alt="Chef Marcus Romano"
                className="rounded-2xl shadow-medium w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center mb-12">
            <p className="text-primary uppercase tracking-[0.2em] text-sm font-medium mb-3">
              A Glimpse Inside
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
              Gallery
            </h2>
          </div>

          <GalleryGrid images={galleryImages} />
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          <div className="text-center mb-12">
            <p className="text-primary uppercase tracking-[0.2em] text-sm font-medium mb-3">
              What We Stand For
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
              Our Values
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Quality",
                description:
                  "We never compromise on ingredients. From farm-fresh produce to premium cuts, quality is our foundation.",
              },
              {
                title: "Innovation",
                description:
                  "While we respect tradition, we constantly push boundaries to create new culinary experiences.",
              },
              {
                title: "Hospitality",
                description:
                  "Every guest is family. We strive to make every visit memorable with warm, attentive service.",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl p-8 text-center shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1"
              >
                <h3 className="font-serif text-xl font-semibold text-foreground mb-4">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
