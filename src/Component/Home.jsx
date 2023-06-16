
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <>
      <div className="home-main-div">
     
        <div className="home-img-div">
          <img src="https://sahayak.org/images/sahayak@2x.png" alt="logo img" />
        </div>
        <div className="home-profile-container">
          <div className="home-profile-img">
            <div className="profile-img-div">
              <img
                src="https://sahayak.org/doctors/ec9c73371d23cd71e8e4b41cdd212346.png"
                alt="profile image"
              />
            </div>
          </div>
          <div className="home-info">
            <h1 className="info-name">Dr. Manish Ganguly</h1>
            <h6 className="info info-deg">MBBS,MD</h6>
            <h6 className="info info-city">Kolkata</h6>
          </div>
        </div>
        <div className="home-main-but-div">
           <Link to={"/blood-info"}>
           <div className="home-button-div">
           <img
              src="https://sahayak.org/images/Know%20more%20about%20High%20Blood%20Pressure@2x.png"
              alt=""
            />
           </div>
           </Link>
           <Link to={"/blood-management"}>
            <div className="home-button-div">
            <img 
              src="https://sahayak.org/images/Management%20of%20High%20Blood%20Pressure@2x.png"
              alt=""
            />
            </div>
            </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
