import { Brands } from "../sections/Brands";
import { Contacts } from "../sections/Contacts";
import { Hero } from "../sections/Hero";
import { Reviews } from "../sections/Reviews";
import { Services } from "../sections/Services";
import { Work } from "../sections/Work";

export function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <Brands />
      <Work />
      <Reviews />
      <Contacts />
    </>
  );
}
