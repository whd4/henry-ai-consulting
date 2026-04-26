import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Results from "@/components/Results";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        {/* Content sits above the fixed oil background */}
        <div className="relative z-10" style={{ background: "#050301" }}>
          <Services />
          <Results />
          <About />
          <Contact />
          <Footer />
        </div>
      </main>
    </>
  );
}
