/* eslint-disable react/prop-types */
import { LuShoppingBag } from "react-icons/lu";
import { BsFillSuitHeartFill } from "react-icons/bs";

function ProductCard({ item }) {
  let title = item.title;

  return (
    <div className="border rounded-md shadow-md relative mb-8">
      <div className="group w-[280px] h-[280px] mb-32 cursor-pointer    rounded  ">
        <div className="h-full flex items-center justify-center  ">
          <img
            className="object-cover max-h-[200px] px-6 group-hover:scale-110 duration-300"
            src={item.image}
            alt="dffrr"
          />
        </div>
        <div className="w-full  p-2 flex justify-between flex-col   ">
          <div>
            <h2>{title.split(" ").slice(0, 10).join(" ")}</h2>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <h2>$ {item.price}</h2>
              <p>
                {item.rating.rate}/5 ({item.rating.count})
              </p>
            </div>
            <LuShoppingBag
              size={30}
              className="cursor-pointer hover:text-primary/30 s"
            />
          </div>
        </div>
      </div>
      <BsFillSuitHeartFill
        size={30}
        className="absolute top-4 right-4 text-gray-400 cursor-pointer"
      />
    </div>
  );
}

export default ProductCard;
