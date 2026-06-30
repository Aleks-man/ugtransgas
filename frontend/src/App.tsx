import { Header } from "./components/Header";
import { Brands } from "./sections/Brands";
import { Contacts } from "./sections/Contacts";
import { Engineering } from "./sections/Engineering";
import { Estimate } from "./sections/Estimate";
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
        <Engineering />
        <Estimate />
        <Brands />
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
