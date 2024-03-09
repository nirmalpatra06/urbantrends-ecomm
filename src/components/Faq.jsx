import { useState } from "react";

const data = [
  {
    id: 1,
    ques: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem possimus explicabo commodi quibusdam recusandae non autem voluptas",
    ans: "Lorem ipsum dolor sit amet consectetur dam recusandae non  autem voluptas, dignissimos odit voluptatum.consectetur dam recusandae non  autem voluptas, dignissimos odit voluptatum.",
  },
  {
    id: 2,
    ques: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem possimus explicabo commodi ",
    ans: "quibusdam recusandae non autem voluptas, dignissimos odit voluptatum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam harum natus distinctio dolorem commodi. Officia.",
  },
  {
    id: 3,
    ques: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem possimus explicabo commodi quibusdam recusandae non autem voluptas",
    ans: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem possimus explicabo commodi quibusdam recusandae non autem voluptas, dignissimos odit voluptatum.",
  },
];
function Faq() {
  const [selected, setSelected] = useState(null);

  function handleOpen(id) {
    setSelected(selected === id ? null : id);
  }
  return (
    <div className="container mt-10 mb-10 flex flex-col items-center justify-center ">
      <div className="bg-gray-200 w-[100vw] h-fit md:h-[700px] mt-10 mb-10 flex flex-col items-center gap-8 ">
        <h2 className="mt-10 text-2xl font-protestRiot">FAQS</h2>
        <div className=" bg w-[70vw] md:w-[50vw] mx-auto flex flex-col mb-6 gap-2">
          {data.map((item, i) => (
            <div
              key={item.id}
              className="flex flex-col bg-white  p-6 rounded-md mb-10"
            >
              <div
                onClick={() => handleOpen(item.id)}
                className="flex gap-2 cursor-pointer "
              >
                <span className="font-protestRiot">
                  {i < 9 ? `0${i + 1}` : i + 1}
                </span>
                <h1 className="font-protestRiot">{item.ques}</h1>
                <span
                  className={`text-2xl ${
                    selected === item.id &&
                    "rotate-45 transition-transform duration-300"
                  }`}
                >
                  +
                </span>
              </div>
              <div className="mb-10">
                {selected === item.id && (
                  <p className="font-protestRiot">Ans: {item.ans}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Faq;
