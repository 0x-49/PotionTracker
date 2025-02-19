import { Link } from "wouter";
import { Mail, Phone, MapPin } from "lucide-react";

const navigation = {
  product: [
    { name: "Features", href: "#features" },
    { name: "Success Stories", href: "#success-stories" },
    { name: "Analytics", href: "#analytics" },
    { name: "Security", href: "#security" },
    { name: "Pricing", href: "#pricing" }
  ],
  support: [
    { name: "Contact", href: "#contact" },
    { name: "Documentation", href: "/docs" },
    { name: "FAQ", href: "#faq" }
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Cookie Policy", href: "/cookies" }
  ],
  social: [
    { name: "Twitter", href: "https://x.com/potionalpha", icon: "twitter" },
    { name: "YouTube", href: "https://www.youtube.com/@OrangieWEB3", icon: "youtube" }
  ]
};

export default function Footer() {
  return (
    <footer className="bg-background/95 border-t border-border/50 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-lg font-semibold mb-4">Product</h3>
            <ul className="space-y-3">
              {navigation.product.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-purple-400 transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-3">
              {navigation.support.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-purple-400 transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-3">
              {navigation.legal.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-purple-400 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:info@JoinPotionTracker.com"
                  className="text-sm text-muted-foreground hover:text-purple-400 transition-colors flex items-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  info@JoinPotionTracker.com
                </a>
              </li>
              <li>
                <a
                  href="tel:(800) 569-1387"
                  className="text-sm text-muted-foreground hover:text-purple-400 transition-colors flex items-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  (800) 569-1387
                </a>
              </li>
              <li>
                <address className="text-sm text-muted-foreground flex items-center gap-2 not-italic">
                  <MapPin className="w-4 h-4" />
                  4286 Bells Ferry Rd, Kennesaw, GA 30144
                </address>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/50 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Potion Tracker Advanced. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              {navigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-purple-400 transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
