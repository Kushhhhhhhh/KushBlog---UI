import Testomonial from "@/components/Testomonial.jsx";
import Pricing from "@/components/Pricing.jsx";
import Hero from "@/components/Hero";
import TopBlog from "@/components/TopBlog";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-8">
      <Hero />
      <TopBlog />
      <Testomonial />
      <Pricing />
    </main>
  );
}