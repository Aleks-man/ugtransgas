import { Header } from "./components/Header";
import { Contacts } from "./sections/Contacts";
import { Footer } from "./sections/Footer";
import { Hero } from "./sections/Hero";
import { Pricing } from "./sections/Pricing";
import { Process } from "./sections/Process";
import { Services } from "./sections/Services";
import { Work } from "./sections/Work";
import "./styles/index.css";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Pricing />
        <Process />
        <Work />
        <Contacts />
      </main>
      <Footer />
    </>
  );
}

export default App;

