import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container-custom py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="inline-block">
              <span className="font-serif text-3xl font-bold">
                Taste<span className="text-primary">Bite</span>
              </span>
            </Link>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              A culinary journey where passion meets perfection. Experience fine dining at its finest.
            </p>
            <div className="flex space-x-4 pt-2">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: "Our Menu", path: "/menu" },
                { name: "About Us", path: "/about" },
                { name: "Contact", path: "/contact" },
                { name: "Reservations", path: "/reservation" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-primary-foreground/70 hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-primary mt-0.5 flex-shrink-0" />
                <span className="text-primary-foreground/70 text-sm">
                  123 Gourmet Avenue<br />New York, NY 10001
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-primary flex-shrink-0" />
                <a href="tel:+12125551234" className="text-primary-foreground/70 hover:text-primary text-sm">
                  (212) 555-1234
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-primary flex-shrink-0" />
                <a href="mailto:hello@tastebite.com" className="text-primary-foreground/70 hover:text-primary text-sm">
                  hello@tastebite.com
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6">Opening Hours</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Clock size={18} className="text-primary mt-0.5 flex-shrink-0" />
                <div className="text-sm">
                  <p className="text-primary-foreground font-medium">Mon - Thu</p>
                  <p className="text-primary-foreground/70">5:00 PM - 10:00 PM</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Clock size={18} className="text-primary mt-0.5 flex-shrink-0" />
                <div className="text-sm">
                  <p className="text-primary-foreground font-medium">Fri - Sat</p>
                  <p className="text-primary-foreground/70">5:00 PM - 11:00 PM</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Clock size={18} className="text-primary mt-0.5 flex-shrink-0" />
                <div className="text-sm">
                  <p className="text-primary-foreground font-medium">Sunday</p>
                  <p className="text-primary-foreground/70">4:00 PM - 9:00 PM</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-12 pt-8 text-center">
          <p className="text-primary-foreground/50 text-sm">
            © {new Date().getFullYear()} TasteBite Restaurant. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
