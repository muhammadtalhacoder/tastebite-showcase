import { useState } from "react";
import { Calendar, Clock, Users, Check } from "lucide-react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";

import heroImage from "@/assets/hero-restaurant.jpg";

const timeSlots = [
  "5:00 PM", "5:30 PM", "6:00 PM", "6:30 PM", "7:00 PM",
  "7:30 PM", "8:00 PM", "8:30 PM", "9:00 PM", "9:30 PM",
];

const guestOptions = [1, 2, 3, 4, 5, 6, 7, 8];

const Reservation = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "",
    specialRequests: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSuccess(true);
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleReset = () => {
    setIsSuccess(false);
    setFormData({
      name: "",
      email: "",
      phone: "",
      date: "",
      time: "",
      guests: "",
      specialRequests: "",
    });
  };

  // Get minimum date (today)
  const today = new Date().toISOString().split("T")[0];

  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Restaurant Ambiance"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-hero" />
        </div>

        <div className="relative z-10 container-custom text-center text-primary-foreground">
          <p className="text-sm uppercase tracking-[0.2em] mb-3 opacity-80">
            Book Your Experience
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Make a Reservation
          </h1>
          <p className="max-w-2xl mx-auto text-lg opacity-90">
            Secure your table for an unforgettable dining experience. We look forward to hosting you.
          </p>
        </div>
      </section>

      {/* Reservation Form */}
      <section className="section-padding bg-background">
        <div className="container-custom max-w-3xl">
          {isSuccess ? (
            <div className="text-center py-12 animate-fade-in">
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Check className="w-10 h-10 text-primary" />
              </div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
                Reservation Confirmed!
              </h2>
              <p className="text-muted-foreground mb-2">
                Thank you, <span className="font-semibold text-foreground">{formData.name}</span>!
              </p>
              <p className="text-muted-foreground mb-8">
                Your table for <span className="font-semibold text-foreground">{formData.guests} guests</span> on{" "}
                <span className="font-semibold text-foreground">
                  {new Date(formData.date).toLocaleDateString("en-US", {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>{" "}
                at <span className="font-semibold text-foreground">{formData.time}</span> has been booked.
              </p>
              <p className="text-muted-foreground text-sm mb-8">
                A confirmation email has been sent to {formData.email}
              </p>
              <Button onClick={handleReset} variant="outline" size="lg">
                Make Another Reservation
              </Button>
            </div>
          ) : (
            <div className="bg-card rounded-2xl shadow-medium p-6 md:p-10">
              <div className="text-center mb-8">
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-2">
                  Reserve Your Table
                </h2>
                <p className="text-muted-foreground">
                  Fill in the details below and we'll confirm your reservation
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                      placeholder="John Doe"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                      placeholder="john@example.com"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                      placeholder="(212) 555-1234"
                    />
                  </div>

                  {/* Date */}
                  <div>
                    <label htmlFor="date" className="block text-sm font-medium text-foreground mb-2">
                      <Calendar className="inline-block w-4 h-4 mr-1" />
                      Date *
                    </label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      min={today}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    />
                  </div>

                  {/* Time */}
                  <div>
                    <label htmlFor="time" className="block text-sm font-medium text-foreground mb-2">
                      <Clock className="inline-block w-4 h-4 mr-1" />
                      Time *
                    </label>
                    <select
                      id="time"
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    >
                      <option value="">Select a time</option>
                      {timeSlots.map((slot) => (
                        <option key={slot} value={slot}>
                          {slot}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Guests */}
                  <div>
                    <label htmlFor="guests" className="block text-sm font-medium text-foreground mb-2">
                      <Users className="inline-block w-4 h-4 mr-1" />
                      Number of Guests *
                    </label>
                    <select
                      id="guests"
                      name="guests"
                      value={formData.guests}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    >
                      <option value="">Select guests</option>
                      {guestOptions.map((num) => (
                        <option key={num} value={num}>
                          {num} {num === 1 ? "Guest" : "Guests"}
                        </option>
                      ))}
                      <option value="8+">8+ Guests (Private Event)</option>
                    </select>
                  </div>
                </div>

                {/* Special Requests */}
                <div>
                  <label htmlFor="specialRequests" className="block text-sm font-medium text-foreground mb-2">
                    Special Requests (Optional)
                  </label>
                  <textarea
                    id="specialRequests"
                    name="specialRequests"
                    value={formData.specialRequests}
                    onChange={handleChange}
                    rows={3}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                    placeholder="Allergies, special occasions, seating preferences..."
                  />
                </div>

                <Button
                  type="submit"
                  variant="hero"
                  size="xl"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Confirming..." : "Confirm Reservation"}
                </Button>

                <p className="text-center text-muted-foreground text-sm">
                  By making a reservation, you agree to our cancellation policy.
                  Please arrive within 15 minutes of your reservation time.
                </p>
              </form>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Reservation;
