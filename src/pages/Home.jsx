/* eslint-disable no-undef */

import { useEffect, useState } from "react";
import Banner from "../components/banner/Banner";
import Product from "../components/product/Product";
import { useLoaderData } from "react-router-dom";
import Testimonials from "../components/testimonials/Testimonials";

function Home() {
  const [products, setProducts] = useState([]);
  const data = useLoaderData();
  // console.log(data);
  useEffect(() => {
    setProducts(data);
  }, [data]);

  return (
    <div>
      <Banner />
      <Product products={products} />
      <Testimonials />
    </div>
  );
}

export default Home;
