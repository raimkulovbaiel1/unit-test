//import ProductCatalog from "@/widgets/catalog-grid";
import { Suspense } from "react";
import CatalogPageSection from "@/app/Catalog/Sections/CatalogPage/index";

function CatalogPage() {
  return (
    <div data-testid="catalog-component">
      <Suspense fallback={<div>Loading...</div>}>
        <CatalogPageSection />
      </Suspense>
    </div>
  );
}

export default CatalogPage;