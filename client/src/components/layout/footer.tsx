import { Link } from "wouter";
import { Mail, Phone, MapPin } from "lucide-react";

const AFFILIATE_URL = "https://whop.com/potiontracker-advanced/?a=digitalartlab";

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
    { name: "Documentation", href: `${AFFILIATE_URL}/docs` },
    { name: "FAQ", href: "#faq" }
  ],
  legal: [
    { name: "Privacy Policy", href: `${AFFILIATE_URL}/privacy` },
    { name: "Terms of Service", href: `${AFFILIATE_URL}/terms` },
    { name: "Cookie Policy", href: `${AFFILIATE_URL}/cookies` }
  ],
  social: [
    { name: "Twitter", href: "https://x.com/potionalpha", icon: "twitter" },
    { name: "YouTube", href: "https://www.youtube.com/@OrangieWEB3", icon: "youtube" }
  ]
};

export default function Footer() {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const href = e.currentTarget.getAttribute('href');
    if (href?.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

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
                    onClick={handleNavClick}
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
                    onClick={handleNavClick}
                    target={item.href.startsWith('#') ? undefined : '_blank'}
                    rel={item.href.startsWith('#') ? undefined : 'noopener noreferrer'}
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
                  <a
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-purple-400 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.name}
                  </a>
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
            </ul>
          </div>
        </div>

        <div className="border-t border-border/50 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Potion Tracker. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              {navigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-muted-foreground hover:text-purple-400 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
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
