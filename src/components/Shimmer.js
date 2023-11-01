const Shimmer = () => {
  return (
    <div className="res-container">
      {Array(20)
        .fill("")
        .map((e, index) => (
          // <div key={index} className="shimmer-card">
          //   <div className="shimmer-img"></div>
          //   <div className="shimmer-card-Content">
          //     <h2>..</h2>
          //     <h3>.. </h3>
          //     <h4>..</h4>
          //   </div>
          // </div>
          <div key={index} className="card">
            <div className="shimmerBG media"></div>
            <div className="p-32">
              <div className="shimmerBG title-line"></div>
              <div className="shimmerBG title-line end"></div>

              <div className="shimmerBG content-line m-t-24"></div>
              <div className="shimmerBG content-line"></div>
              <div className="shimmerBG content-line"></div>
              <div className="shimmerBG content-line"></div>
              <div className="shimmerBG content-line end"></div>
            </div>
          </div>
        ))}
    </div>
  );
};
export default Shimmer;
