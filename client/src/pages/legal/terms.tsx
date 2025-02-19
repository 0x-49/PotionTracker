import RootLayout from "@/components/layout/root-layout";

export default function TermsOfService() {
  return (
    <RootLayout
      title="Terms of Service - Potion Tracker Advanced"
      description="Read our terms of service to understand the rules and guidelines for using Potion Tracker Advanced's trading analytics platform."
    >
      <div className="container mx-auto px-4 py-12">
        <div className="prose prose-invert prose-purple mx-auto">
          <h1>Terms of Service</h1>
          <p className="lead">Last updated: February 19, 2025</p>
          
          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing and using Potion Tracker Advanced ("the Service"), you agree to be bound by these Terms of Service.
          </p>

          <h2>2. Description of Service</h2>
          <p>
            Potion Tracker Advanced provides real-time blockchain analytics and wallet tracking services for Solana traders.
          </p>

          {/* Add more terms sections as needed */}
        </div>
      </div>
    </RootLayout>
  );
}
