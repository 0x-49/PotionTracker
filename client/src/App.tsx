import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import RootLayout from "@/components/layout/root-layout";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import TermsOfService from "@/pages/legal/terms";
import PrivacyPolicy from "@/pages/legal/privacy";
import CookiePolicy from "@/pages/legal/cookies";

function Router() {
  return (
    <RootLayout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/terms" component={TermsOfService} />
        <Route path="/privacy" component={PrivacyPolicy} />
        <Route path="/cookies" component={CookiePolicy} />
        <Route component={NotFound} />
      </Switch>
    </RootLayout>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;