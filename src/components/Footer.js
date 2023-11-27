// import React from "react";

// const Footer = () => {
//   return (
//     <footer className=" flex items-center justify-center w-full bg-blue-950 text-white mt-auto bottom-0 absolute">
//       <h4 className="my-4">&copy;shubham 2023</h4>
//     </footer>
//   );
// };

import React from "react";

const Footer = () => {
  return (
    <section className="relative overflow-hidden bg-blue-950 py-8">
      <div className="container relative z-10 mx-auto px-4">
        <div className="-m-8 flex flex-wrap items-center justify-center">
          <div className="w-auto p-8">
            <h4 className="-m-5 flex flex-wrap items-center text-white">
              &copy;shubham 2023
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
