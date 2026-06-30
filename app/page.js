import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TopSelling from "@/components/TopSelling";
import Reviews from "@/components/Reviews";
import BestO2 from "@/components/BestO2";
import Footer from "@/components/Footer";




export default function Home() {
  return (
    <div className="min-h-screen bg-forest-dark flex flex-col selection:bg-neon-lime selection:text-forest-dark">
      <Navbar />
      <main className="flex-grow">
      <Hero/>
      <TopSelling/>
      <Reviews/>
      <BestO2/>
      </main>
      <Footer/>
    
   </div>
  );
}