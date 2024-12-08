import Topcategories from "@/components/Topcategories"
import Companies from "@/components/Companies"

import Hero from "@/components/Hero";
import Feature from "@/components/Feature"
import Ourproduct from "@/components/Ourproducts"

export default function Home() {
  return (
    <>
      <Hero />
      <Companies />
      

      <Topcategories />
      <Feature  />
      <Ourproduct />
      
    </>
  );
}
