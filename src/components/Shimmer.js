// import { shimmer_card_unit } from "../utils/common";
import "./Shimmer.css";
// Shimmer card to display with animation
const Shimmer = () => {
  return (
    // Shimmer UI design for Home page 
    <div className="container">
      <div className="main-heading">
        <h4 className="heading"> </h4>
        <h4 className="sliderheading"> </h4>
      </div>
      <div className="row">
        <div className="col-md-4">
          <div className="card-no"></div>
        </div>
        <div className="col-md-4">
          <div className="card-no"></div>
        </div>
        <div className="col-md-4">
          <div className="card-no"></div>
        </div>
      </div>
      <hr></hr>
      <div className="main-heading">
        <h4 className="heading"> </h4>
        <h4 className="headings"> </h4>
      </div>
      <div className="row">
        <div className="col-md-4">
          <div className="card-no"></div>
        </div>
        <div className="col-md-4">
          <div className="card-no"></div>
        </div>
        <div className="col-md-4">
          <div className="card-no"></div>
        </div>
      </div>
    </div>  
  );
};

export default Shimmer;
