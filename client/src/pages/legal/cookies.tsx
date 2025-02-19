import RootLayout from "@/components/layout/root-layout";

export default function CookiePolicy() {
  return (
    <RootLayout
      title="Cookie Policy - Potion Tracker Advanced"
      description="Understand how Potion Tracker Advanced uses cookies to enhance your trading experience."
    >
      <div className="container mx-auto px-4 py-12">
        <div className="prose prose-invert prose-purple mx-auto">
          <h1>Cookie Policy</h1>
          <p className="lead">Last updated: February 19, 2025</p>
          
          <h2>1. What Are Cookies</h2>
          <p>
            Cookies are small text files that are placed on your device to help our website provide a better user experience.
          </p>

          <h2>2. How We Use Cookies</h2>
          <p>
            We use cookies to understand how you use our website and to improve our services.
          </p>

          {/* Add more cookie policy sections as needed */}
        </div>
      </div>
    </RootLayout>
  );
}
