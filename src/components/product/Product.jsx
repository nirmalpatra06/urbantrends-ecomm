/* eslint-disable react/prop-types */
import ProductCard from "../productCard/ProductCard";

function Product({ products }) {
  // console.log(products);
  return (
    <div className="mt-10 mb-12">
      <div className="container flex justify-center items-center flex-col">
        {/* Header */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p className="text-sm text-primary">Top selling products for you</p>
          <h1 className="text-3xl font-bold">Products</h1>
          <p className="text-xs text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            possimus est, ipsam dolorum iure nihil nobis magni nostrum rem quae?
          </p>
        </div>
        {/* body */}
        <div className="container grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 place-items-center gap-8 mb-8">
          {products.map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Product;
