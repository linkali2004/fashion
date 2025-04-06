import ProductGrid from "./ProductGrid";

import d from "../data/d.json" assert { type: "json" };

const HomeCollectionSection = () => {
  return (
    <div>
      <div className="max-w-screen-2xl flex items-center justify-between mx-auto mt-24 px-5 max-[400px]:px-3">
        <h2 className="text-black text-5xl font-normal tracking-[1.56px] max-sm:text-4xl">
          Our Collection
        </h2>
      </div>
      
        <ProductGrid products={d}/>
      
    </div>
  );
};
export default HomeCollectionSection;
