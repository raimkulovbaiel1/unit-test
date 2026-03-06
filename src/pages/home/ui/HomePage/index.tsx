import { NewArrivalBanner } from "@/widgets/new-arrival-banner";
import MiniCart from "@/widgets/mini-cart";
import { DiscountsBanner } from "@/widgets/discounts-banner";
import ProductCatalog from "@/widgets/catalog-grid";
import { OurAdvantages } from "@/widgets/OurAdvantages/index";  
import { FAQ } from "@/widgets/FAQ";

export function HomePage() {
  return (
    <>
      <NewArrivalBanner />
      <MiniCart />
      <DiscountsBanner />
      <ProductCatalog /> 
      <OurAdvantages/> 
      <FAQ/>
    </>
  );
}

// Provide a default export so this file is a valid Next.js pages module type-wise
export default HomePage;













