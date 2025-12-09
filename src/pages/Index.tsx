import { Link } from "react-router-dom";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import MenuCard from "@/components/MenuCard";
import TestimonialCard from "@/components/TestimonialCard";
import HighlightCard from "@/components/HighlightCard";
import { menuItems, testimonials, highlights } from "@/data/menuData";

import heroImage from "@/assets/hero-restaurant.jpg";
import interiorImage from "@/assets/restaurant-interior.jpg";

const Index = () => {
  const featuredDishes = menuItems.filter((item) => item.featured);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="TasteBite Restaurant Interior"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-hero" />
        </div>

        <div className="relative z-10 container-custom text-center text-primary-foreground py-20">
          <p className="text-sm md:text-base uppercase tracking-[0.3em] mb-4 opacity-80 animate-fade-in">
            Fine Dining Experience
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight animate-fade-in-up">
            Where Every Bite
            <br />
            Tells a Story
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10 opacity-90 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Experience culinary excellence in an atmosphere of warmth and sophistication.
            Every dish is a masterpiece crafted with passion.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <Button asChild variant="hero" size="xl">
              <Link to="/reservation">
                Reserve Your Table
                <ArrowRight size={20} />
              </Link>
            </Button>
            <Button asChild variant="hero-outline" size="xl">
              <Link to="/menu">Explore Menu</Link>
            </Button>
          </div>
        </div>

        <a
          href="#featured"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary-foreground animate-float"
        >
          <ChevronDown size={32} />
        </a>
      </section>

      {/* Featured Dishes */}
      <section id="featured" className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center mb-12 md:mb-16">
            <p className="text-primary uppercase tracking-[0.2em] text-sm font-medium mb-3">
              From Our Kitchen
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Signature Creations
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredDishes.map((item) => (
              <MenuCard key={item.id} item={item} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg">
              <Link to="/menu">
                View Full Menu
                <ArrowRight size={18} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="order-2 lg:order-1">
              <p className="text-primary uppercase tracking-[0.2em] text-sm font-medium mb-3">
                Our Story
              </p>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                A Passion for
                <br />
                Perfection
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Founded in 2010, TasteBite has been serving exceptional cuisine to discerning guests
                for over a decade. Our commitment to quality ingredients, innovative techniques,
                and heartfelt hospitality has made us a beloved destination for food enthusiasts.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Every dish that leaves our kitchen is a testament to our dedication to the culinary arts.
                We believe in creating memorable experiences that go beyond just great food.
              </p>
              <Button asChild variant="default" size="lg">
                <Link to="/about">
                  Learn More
                  <ArrowRight size={18} />
                </Link>
              </Button>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative">
                <img
                  src={interiorImage}
                  alt="Restaurant Interior"
                  className="rounded-2xl shadow-medium w-full"
                />
                <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-xl shadow-medium hidden md:block">
                  <p className="font-serif text-4xl font-bold">14+</p>
                  <p className="text-sm opacity-90">Years of Excellence</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center mb-12 md:mb-16">
            <p className="text-primary uppercase tracking-[0.2em] text-sm font-medium mb-3">
              Why Choose Us
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              The TasteBite Difference
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {highlights.map((highlight, index) => (
              <HighlightCard
                key={index}
                title={highlight.title}
                description={highlight.description}
                icon={highlight.icon as "leaf" | "wine" | "calendar"}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          <div className="text-center mb-12 md:mb-16">
            <p className="text-primary uppercase tracking-[0.2em] text-sm font-medium mb-3">
              What Our Guests Say
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Words of Appreciation
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {testimonials.map((testimonial) => (
              <TestimonialCard
                key={testimonial.id}
                name={testimonial.name}
                role={testimonial.role}
                content={testimonial.content}
                rating={testimonial.rating}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Restaurant Ambiance"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-hero" />
        </div>

        <div className="relative z-10 container-custom text-center text-primary-foreground">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Ready for an Unforgettable Evening?
          </h2>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10 opacity-90">
            Reserve your table today and let us take you on a culinary journey like no other.
          </p>
          <Button asChild variant="hero" size="xl">
            <Link to="/reservation">
              Make a Reservation
              <ArrowRight size={20} />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
