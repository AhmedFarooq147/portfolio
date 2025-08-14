import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import Navbar from "@/components/navbar";
import Project from "@/components/project";
import { Skills } from "@/components/skills";
import Whatsapp from "@/components/whatsapp";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Project/>
      <Skills/>
      <Contact/>
      <About/>
      <Footer/>
      <Whatsapp/>
      
    </div>
  );
}
