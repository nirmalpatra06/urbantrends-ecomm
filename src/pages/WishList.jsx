import { ToastContainer, toast } from "react-toastify";
import { IoCloseSharp } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  resetWishlist,
  deleteWishlistItem,
} from "../redux/urbanTrendsSlice";
import { useState } from "react";
function WishList() {
  let [baseQty, setBaseQty] = useState(1);
  const wishlistData = useSelector((state) => state.urbanTrends.wishlistData);
  const dispatch = useDispatch();
  console.log(wishlistData);
  return (
    <div className="container mt-10 mb-20 flex items-center flex-col">
      <h2 className="text-2xl font-bold">Your Wishlist:</h2>
      {wishlistData.length === 0 ? (
        <div className="h-[50%] text-center">
          <h1 className="m-20">It is Empty now :)</h1>
        </div>
      ) : (
        <div className="w-full">
          {wishlistData.map((item) => (
            <div
              key={item.id}
              className="w-full flex items-center justify-between gap-20 mt-6"
            >
              <div className="flex items-center justify-between gap-6 ">
                <div className="h-full  cursor-pointer flex items-center justify-center  ">
                  <img
                    className="object-cover max-h-[200px] px-6 "
                    src={item.image}
                    alt="productImg"
                  />
                </div>
                <div className="w-[250px] flex flex-col items-center justify-center gap-4">
                  <h2>{item.title}</h2>
                  <p>$ {item.price}</p>
                  <div className="w-52 flex items-center justify-centery text-gray-500 gap-4 border p-3 rounded">
                    <p className="text-sm">Quantity:</p>
                    <div className="flex items-center gap-4 text-sm font-semibold ">
                      <button
                        onClick={() =>
                          setBaseQty(
                            baseQty === 1 ? (baseQty = 1) : baseQty - 1
                          )
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
                  <p>$ {baseQty * item.price}</p>
                </div>
                <div>
                  <button
                    onClick={() =>
                      dispatch(
                        addToCart({
                          id: item.id,
                          title: item.title,
                          image: item.image,
                          price: item.price,
                          quantity: baseQty,
                          description: item.description,
                        })
                      ) & toast.success(`${item.title} is added`)
                    }
                    className="bg-black py-4 px-8 text-white rounded-sm"
                  >
                    Add to Cart
                  </button>
                </div>
                <IoCloseSharp
                  onClick={() =>
                    dispatch(deleteWishlistItem(item.id)) &
                    toast.error(`${item.title} is removed from Wishlist`)
                  }
                  size={20}
                  className=" text-gray-600 hover:text-red-600 cursor-pointer duration-300"
                />
              </div>
            </div>
          ))}
          <button
            onClick={() =>
              dispatch(resetWishlist()) &
              toast.error("All Items removed from your Wishlist")
            }
            className="bg-red-500 rounded text-white mt-8 ml-7 py-1 px-6 hover:bg-red-800"
          >
            Reset Cart
          </button>
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
            theme="dark"
          />
        </div>
      )}
    </div>
  );
}

export default WishList;
