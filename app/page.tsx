import { Navigation } from "@/components/navigation";
import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { Work } from "@/components/work";
import { Why } from "@/components/why";
import { Process } from "@/components/process";
import { Technologies } from "@/components/technologies";
import { CTA } from "@/components/cta";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Services />
        <Work />
        <Why />
        <Process />
        <Technologies />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
