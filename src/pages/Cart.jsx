import { useDispatch, useSelector } from "react-redux";
import { IoCloseSharp } from "react-icons/io5";
import {
  decrementQty,
  deleteItem,
  increamentQty,
  resetCart,
} from "../redux/urbanTrendsSlice";
import { ToastContainer, toast } from "react-toastify";
import { useEffect, useState } from "react";
import StripeCheckout from "react-stripe-checkout";

function Cart() {
  const productData = useSelector((state) => state.urbanTrends.productData);
  const userInfo = useSelector((state) => state.urbanTrends.userInfo);
  const dispatch = useDispatch();
  // console.log(productData);
  const [totalAmount, setTotalAmount] = useState("");
  const [payNow, setPayNow] = useState(false);
  useEffect(() => {
    let price = 0;
    productData.map((item) => {
      price += item.price * item.quantity;
      return price;
    });
    // console.log(price);
    setTotalAmount(price.toFixed(2));
  }, [productData]);

  const HandleCheckout = () => {
    if (userInfo) {
      setPayNow(true);
      if (productData.length === 0) {
        toast.error("Please Add Some items in your cart :)");
      }
    } else {
      toast.error("Please Sign in to Checkout");
    }
  };
  return (
    <div className="container max-w-screen-xl mx-auto py-20 flex flex-col md:flex-row">
      <div className="w-2/3 pr-10">
        <div className="w-full">
          <h2 className="font-medium text-2xl">Shopping cart</h2>
        </div>
        <div className="w-full">
          {productData.map((item) => (
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
                  <p>{item.price}</p>
                  <div className="w-52 flex items-center justify-centery text-gray-500 gap-4 border p-3 rounded">
                    <p className="text-sm">Quantity:</p>
                    <div className="flex items-center gap-4 text-sm font-semibold ">
                      <button
                        onClick={() =>
                          dispatch(
                            decrementQty({
                              id: item.id,
                              title: item.title,
                              image: item.image,
                              price: item.price,
                              quantity: 1,
                              description: item.description,
                            })
                          )
                        }
                        className="border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white duration-100 active:bg-black "
                      >
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        onClick={() =>
                          dispatch(
                            increamentQty({
                              id: item.id,
                              title: item.title,
                              image: item.image,
                              price: item.price,
                              quantity: 1,
                              description: item.description,
                            })
                          )
                        }
                        className="border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white duration-100 active:bg-black"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <p>{item.quantity * item.price}</p>
                </div>
                <IoCloseSharp
                  onClick={() =>
                    dispatch(deleteItem(item.id)) &
                    toast.error(`${item.title} is removed`)
                  }
                  size={20}
                  className=" text-gray-600 hover:text-red-600 cursor-pointer duration-300"
                />
              </div>
            </div>
          ))}
        </div>
        {productData.length > 0 && (
          <button
            onClick={() =>
              dispatch(resetCart()) &
              toast.error("Your cart is empty now Go back to shopping")
            }
            className="bg-red-500 rounded text-white mt-8 ml-7 py-1 px-6 hover:bg-red-800"
          >
            Reset Cart
          </button>
        )}
      </div>
      <div className="w-full md:w-1/3 bg-[#ffffff] py-6 px-4 ">
        <div className="flex flex-col gap-6 border-b-[1px] border-b-gray-500 pb-6">
          <h2 className="text-2xl font-medium">Cart Total</h2>
          <p className="flex items-center gap-4 text-base">
            Subtotal: <span className="font-bold">$ {totalAmount}</span>
          </p>
          <p className="flex items-start gap-4 text-base">
            Shipping:
            <span>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores
              impedit amet repellat eum ipsam consequuntur.
            </span>
          </p>
        </div>
        <p className="font-semibold flex justify-between mt-6">
          Total: <span className="font-bold text-xl">$ {totalAmount}</span>
        </p>
        <button
          onClick={HandleCheckout}
          className="text-base bg-black text-white w-full py-3 hover:bg-gray-800 duration-300"
        >
          proceed to checkout
        </button>
        {payNow && productData.length > 0 && (
          <div className="w-full mt-6 flex items-center justify-center">
            <StripeCheckout
              stripeKey="pk_test_51OrDwkSIxZiIDastYOYM4PKQCPn7n5EHt7mW3xOy8SnTpK9UbG8wac1qMMpqahvuuDs2npx7lKNnBlVjyxE2Sgsj00AuOGRuJc"
              name="UrbanTrends"
              amount={totalAmount * 100}
              label="Pay Now"
              description={`Your payment amout is 1$${totalAmount}`}
              email={userInfo.email}
            />
          </div>
        )}
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
        theme="dark"
      />
    </div>
  );
}

export default Cart;
