import { createFileRoute } from "@tanstack/react-router";

import { Devices } from "@/components/landing/Devices";
import { Footer } from "@/components/landing/Footer";
import { Header } from "@/components/landing/Header";
import { HealthAnalytics } from "@/components/landing/HealthAnalytics";
import { Hero } from "@/components/landing/Hero";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { WelcomePopup } from "@/components/landing/WelcomePopup";
import { WhyLivora } from "@/components/landing/WhyLivora";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "LIVORA — All Your Health, In One Place." },
      {
        name: "description",
        content:
          "Livora brings data from your watch and phone together and helps you understand your body — no manual logging.",
      },
      { property: "og:title", content: "LIVORA — All Your Health, In One Place." },
      {
        property: "og:description",
        content:
          "Collect, combine, understand and act: personal health insights from the devices you already use.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Devices />
        <HealthAnalytics />
        <HowItWorks />
        <WhyLivora />
      </main>
      <Footer />
      <WelcomePopup />
    </div>
  );
}
