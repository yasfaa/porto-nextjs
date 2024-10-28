import Navigation from "./components/Navigation";
import Header from "./components/Header";

export default function Home() {
  return (
    <div className="min-h-16">
        <Navigation />
      <div className="about flex min-h-screen flex-col px-2 pb-2">
        <Header/>
      </div>

    </div>
  );
}
