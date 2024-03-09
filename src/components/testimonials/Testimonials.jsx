const data = [
  {
    name: "Saroj",
    image: "",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, magni.",
    aosDelay: "0",
  },
  {
    name: "Aryan",
    image: "",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, magni.",
    aosDelay: "300",
  },
  {
    name: "Somu",
    image: "",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, magni.",
    aosDelay: "600",
  },
];
function Testimonials() {
  return (
    <div className="py-10 mb-10">
      <div className="container">
        {/* header */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p className="text-primary font-protestRiot">
            What our customers are shaying
          </p>
          <h1 className="text-3xl font-bold font-protestRiot">Testimonials</h1>
          <p className="text-xs text-gray-400 font-protestRiot">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique,
            doloribus.
          </p>
        </div>
        {/* Testimonials */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 ">
          {data.map((user) => (
            <div
              data-aos="fade-up"
              data-aos-delay={user.aosDelay}
              key={user.name}
              className="text-center group space-y-3 sm:space-y-6 bg-gray-200 hover:bg-gray-300 dark:bg-dark dark:hover:bg-[#0e3a5b] duration-300 p-6 rounded-md sm:p-8"
            >
              <div className="grid place-items-center">
                <img
                  className="h-20 w-20 rounded-full"
                  src="https://picsum.photos/200"
                  alt="uimg"
                />
                <h1 className="font-protestRiot">{user.name}</h1>
              </div>
              <div className="text-center">
                <div>⭐⭐⭐⭐⭐</div>
                <p className="font-protestRiot px-10 sm:px-4">
                  {user.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
