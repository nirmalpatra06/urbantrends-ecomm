/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import { addToCart, wishList } from "../redux/urbanTrendsSlice";
import { useLoaderData, useNavigate } from "react-router-dom";
import { LuShoppingBag } from "react-icons/lu";
import { ToastContainer, toast } from "react-toastify";
import { BsFillSuitHeartFill } from "react-icons/bs";
function Gadgets() {
  const data = useLoaderData();
  // console.log(data);
  const gadgets = data.filter((item) => item.category === "electronics");
  // console.log(gadgets);
  return (
    <div className="container grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 place-items-center gap-8 mb-8 mt-10">
      {gadgets.map((item) => (
        <GadgetsProduct key={item.id} item={item} />
      ))}
    </div>
  );
}

function GadgetsProduct({ item }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const title = item.title;
  const titleString = () => {
    return String(title).toLowerCase().split(" ").join("");
  };
  const rootId = titleString(title);
  function handleClick() {
    navigate(`/product/${rootId}`, {
      state: {
        item: item,
      },
    });
  }

  return (
    <div className="border rounded-md shadow-md relative mb-8">
      <div className="group w-[280px] h-[280px] mb-32  rounded  ">
        <div
          onClick={handleClick}
          className="h-full flex items-center justify-center cursor-pointer  "
        >
          <img
            className="object-cover max-h-[200px] px-6 group-hover:scale-110 duration-300"
            src={item.image}
            alt="productImg"
          />
        </div>
        <div className="w-full  p-2 flex justify-between flex-col   ">
          <div>
            <h2>{item.title.split(" ").slice(0, 10).join(" ")}</h2>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <h2>$ {item.price}</h2>
              <p>
                {item.rating.rate}/5 ({item.rating.count}) ratings
              </p>
            </div>
            <LuShoppingBag
              onClick={() =>
                dispatch(
                  addToCart({
                    id: item.id,
                    title: item.title,
                    image: item.image,
                    price: item.price,
                    quantity: 1,
                    description: item.description,
                  })
                ) & toast.success(`${item.title} is added`)
              }
              size={30}
              className="cursor-pointer hover:text-red-500/70"
            />
          </div>
        </div>
      </div>
      <BsFillSuitHeartFill
        onClick={() =>
          dispatch(
            wishList({
              id: item.id,
              title: item.title,
              image: item.image,
              price: item.price,
              quantity: 1,
              description: item.description,
            })
          )
        }
        size={30}
        className="absolute top-4 right-4 text-gray-400 cursor-pointer"
      />
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
    </div>
  );
}
export default Gadgets;
