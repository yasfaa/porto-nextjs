import Navigation from "./components/Navigation";
import Header from "./components/Header";
import Skills from "./components/Skills";

export default function Home() {
  return (
    <div className="min-h-16">
      <Navigation />
      <div className="about flex min-h-screen flex-col px-2 p-2">
        <div className="py-6"><Header /></div>
        <div className="py-6"><Skills /></div>
      </div>

    </div>
  );
}
