import { Brands } from "../sections/Brands";
import { Contacts } from "../sections/Contacts";
import { Engineering } from "../sections/Engineering";
import { Estimate } from "../sections/Estimate";
import { Hero } from "../sections/Hero";
import { Pricing } from "../sections/Pricing";
import { Services } from "../sections/Services";
import { Work } from "../sections/Work";

export function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <Engineering />
      <Estimate />
      <Brands />
      <Pricing />
      <Work />
      <Contacts />
    </>
  );
}
