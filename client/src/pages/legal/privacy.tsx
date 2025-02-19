import RootLayout from "@/components/layout/root-layout";

export default function PrivacyPolicy() {
  return (
    <RootLayout
      title="Privacy Policy - Potion Tracker Advanced"
      description="Learn how Potion Tracker Advanced protects and handles your personal information and trading data."
    >
      <div className="container mx-auto px-4 py-12">
        <div className="prose prose-invert prose-purple mx-auto">
          <h1>Privacy Policy</h1>
          <p className="lead">Last updated: February 19, 2025</p>
          
          <h2>1. Information We Collect</h2>
          <p>
            We collect information that is essential for providing our trading analytics services while maintaining your privacy.
          </p>

          <h2>2. How We Use Your Information</h2>
          <p>
            Your information is used solely for providing and improving our trading analytics services.
          </p>

          {/* Add more privacy sections as needed */}
        </div>
      </div>
    </RootLayout>
  );
}
