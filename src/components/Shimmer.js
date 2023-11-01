const Shimmer = () => {
  return (
    <div className="res-container">
      {Array(20)
        .fill("")
        .map((e, index) => (
          <div key={index} className="shimmer-card">
            <div className="shimmer-img"></div>
            <div className="shimmer-card-Content">
              <h2>..</h2>
              <h3>.. </h3>
              <h4>..</h4>
            </div>
          </div>
        ))}
    </div>
  );
};
export default Shimmer;
