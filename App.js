import React from "react";
import ReactDOM from "react-dom/client";

import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => (
  <h1 className="head" tabIndex="5">
    My FoodY Zone🚀
  </h1>
);

// React Fragment - behaves like an empty tag
const HeadingComponent = () => (
  <>
    <div id="container">
      <Title />
      <h1 className="heaidng">Foody zone with Fucntional Component</h1>
    </div>
    <div id="container-2"></div>
  </>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
