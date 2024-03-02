import { FaStar } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/urbanTrendsSlice";
import { ToastContainer, toast } from "react-toastify";

function Productdetails() {
  const dispatch = useDispatch();
  const [details, setDetails] = useState({});
  let [baseQty, setBaseQty] = useState(1);
  const location = useLocation();
  useEffect(() => {
    // console.log(location.state.item);
    setDetails(location.state.item);
  }, []);
  return (
    <section className="pt-16 pb-12 mt-6 mb-6 lg:py-20 h-auto flex items-center">
      <div className="container mx-auto">
        {/* image & details */}
        <div className=" flex flex-col lg:flex-row items-center">
          {/* image */}
          <div className="flex flex-1 justify-center items-center mb-8 lg:mb-0">
            <img
              className="max-w-[200px] lg:max-w-[250px]"
              src={details.image}
              alt="productImg"
            />
          </div>
          {/* details */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-2xl lg:text-3xl mb-2 max-w-[450px] mx-auto">
              {details.title}
            </h1>
            <div className="flex items-center gap-8 mb-4">
              <h2 className="text-2xl text-red-500 font-medium ">
                $ {details.price}
              </h2>
              <div className="flex items-center flex-col md:flex-row gap-2">
                <div className="flex">
                  <FaStar size={20} />
                  <FaStar size={20} />
                  <FaStar size={20} />
                  <FaStar size={20} />
                  <FaStar size={20} />
                </div>
                <p>(4 Customers review)</p>
              </div>
            </div>
            <p className="mb-8">{details.description}</p>
            <div className="flex gap-4 flex-col md:flex-row items-center">
              <div className="w-52 flex items-center justify-centery text-gray-500 gap-4 border p-3 rounded">
                <p className="text-sm">Quantity:</p>
                <div className="flex items-center gap-4 text-sm font-semibold ">
                  <button
                    onClick={() =>
                      setBaseQty(baseQty === 1 ? (baseQty = 1) : baseQty - 1)
                    }
                    className="border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white duration-100 active:bg-black "
                  >
                    -
                  </button>
                  <span>{baseQty}</span>
                  <button
                    onClick={() => setBaseQty(baseQty + 1)}
                    className="border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white duration-100 active:bg-black"
                  >
                    +
                  </button>
                </div>
              </div>
              <button
                onClick={() =>
                  dispatch(
                    addToCart({
                      id: details.id,
                      title: details.title,
                      image: details.image,
                      price: details.price,
                      quantity: baseQty,
                      description: details.description,
                    })
                  ) & toast.success(`${details.title} is added`)
                }
                className="bg-black py-4 px-8 text-white rounded-sm"
              >
                Add to Cart
              </button>
            </div>
            <p className="text-base text-gray-500 mt-4">
              Category:{" "}
              <span className="font-medium capitalize">{details.category}</span>
            </p>
          </div>
        </div>
      </div>
      <ToastContainer
        position="top-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </section>
  );
}

export default Productdetails;
