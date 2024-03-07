/* eslint-disable no-undef */

import { useEffect, useState } from "react";
import Banner from "../components/banner/Banner";
import Product from "../components/product/Product";
import { useLoaderData } from "react-router-dom";
import Testimonials from "../components/testimonials/Testimonials";
import Faq from "../components/Faq";

function Home() {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const data = useLoaderData();
  // console.log(data);
  useEffect(() => {
    setProducts(data);
  }, [data]);

  return (
    <div>
      <Banner setSearchQuery={setSearchQuery} />
      <Product searchQuery={searchQuery} products={products} />
      <Faq />
      <Testimonials />
    </div>
  );
}

export default Home;
