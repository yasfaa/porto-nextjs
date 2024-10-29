import Navigation from "./components/layout/Navigation";
import Header from "./components/layout/Header";
import Skills from "./components/layout/Skills";
import Contact from "./components/layout/Contact";

export default function Home() {
  return (
    <div className="min-h-16">
      <Navigation />
      <div className="flex min-h-screen flex-col px-2 p-2">
        <div id="about" className="py-6"><Header /></div>
        <div className="py-6"><Skills /></div>
        <div id="contact" className="py-6"><Contact /></div>
      </div>

    </div>
  );
}
