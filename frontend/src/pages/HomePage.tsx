import { Brands } from "../sections/Brands";
import { Contacts } from "../sections/Contacts";
import { Engineering } from "../sections/Engineering";
import { Hero } from "../sections/Hero";
import { Reviews } from "../sections/Reviews";
import { Services } from "../sections/Services";
import { SitePath } from "../sections/SitePath";
import { Work } from "../sections/Work";

export function HomePage() {
  return (
    <>
      <Hero />
      <SitePath />
      <Services />
      <Engineering />
      <Reviews />
      <Brands />
      <Work />
      <Contacts />
    </>
  );
}
