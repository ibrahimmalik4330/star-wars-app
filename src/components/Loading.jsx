import "../styles/Loading.css";

const Loading = () => {
  return (
    <div className="loading-container">
      <div className="lightsaber">
        <div className="blade"></div>
      </div>
      <p className="loading-text">Loading...</p>
    </div>
  );
};

export default Loading;
