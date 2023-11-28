const Shimmer = () => {
  return (
    <div className="mx-[10%] mt-[9%]">
      <div className="flex flex-wrap justify-center md:justify-start gap-1 mb-4">
        {Array(20)
          .fill("")
          .map((e, index) => (
            <div
              key={index}
              className="w-[280px] shadow-xl shadow-gray-400 rounded-lg p-4 mx-1"
            >
              <div className=" animate-pulse bg-gray-200 rounded-xl  h-[226px] w-[100%] mb-3"></div>
              <div className="space-y-3 ">
                <div className="animate-pulse h-3 w-3/5 rounded-lg bg-gray-200"></div>
                <div className="animate-pulse h-3 w-4/5 rounded-lg bg-gray-200"></div>
                <div className="animate-pulse h-3 w-2/5 rounded-lg bg-gray-200"></div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};
export default Shimmer;
