import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReply } from "@fortawesome/free-solid-svg-icons";
import "./MoreInfo.css";
import { Link} from "react-router-dom";
const MoreInfo1 = () => {
  
  const handleRedirect = (url) => {
    window.open(url, '_blank');
  };
  return (
    <>
      <div className="home-main-div">
      
      <Link to={"/"}><FontAwesomeIcon icon={faReply} size="2xl"/></Link>

        <div className="home-img-div">
          <img src="https://sahayak.org/images/sahayak@2x.png" alt="logo img" />
        </div>
        <div className="home-profile-container">
          <div className="home-profile-img">
            <div>
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
        <div>
          <h6 className="heading-div"> Management of High Blood Pressure</h6>
          <div className="heading-img-div">
            <img src="https://sahayak.org/images/shape@2x.png" alt="" />
          </div>
        </div>
        <div className="home-but-main-div">
          <div className="home-but-div1">
         
              <div className="home-but-div">
                <img
                  src="https://sahayak.org/images/BP%20Measurement%20Tips@2x.png"
                  alt=""
                />
              </div>
           
           
              <div className="home-but-div" onClick={()=>{
                handleRedirect("https://www.youtube.com/embed/l3xY-54Y2IU")
              }}>
                <img
                  src="https://sahayak.org/images/Diet@2x.png"
                  alt=""
                />
              </div>
           
           
              <div className="home-but-div" onClick={()=>{
                handleRedirect("https://www.youtube.com/watch?v=q-ueboQo_jU")
              }}>
                <img
                  src="https://sahayak.org/images/Yoga%20&%20Exercise@2x.png"
                  alt=""
                />
              </div>
            
            
              <div className="home-but-div" onClick={()=>{
                handleRedirect("https://www.youtube.com/embed/sU_sehEu5nY")
              }}>
                <img
                  src="https://sahayak.org/images/Cooking%20Tips@2x.png"
                  alt=""
                />
              </div>
         
          </div>
          <div className="home-but-div2">
           
              <div className="home-but-div" onClick={()=>{
                handleRedirect("https://imagicahealth.live/sahayak/?id=1977")
              }}>
                <img
                  src="https://sahayak.org/images/BP%20Self%20Monitoring%20Quiz@2x.png"
                  alt=""
                />
              </div>
          
            
              <div className="home-but-div" onClick={()=>{
                handleRedirect("https://open.spotify.com/album/4xnxWa9CyAxxgUonT2bZOm")
              }}>
                <img
                  src="https://sahayak.org/images/Music%20Therapy@2x.png"
                  alt=""
                />
              </div>
            
          
              <div className="home-but-div" onClick={()=>{
                handleRedirect("https://open.spotify.com/episode/62s1z5Kgh7eAOYwzEItIp4")
              }}>
                <img
                  src="https://sahayak.org/images/Meditation@2x.png"
                  alt=""
                />
              </div>
          
            
              <div className="home-but-div" onClick={()=>{
                handleRedirect("https://www.youtube.com/watch?v=ffwm4mAq-Dg&feature=youtu.be")
              }}>
                <img
                  src="https://sahayak.org/images/Shopping%20Tips@2x.png"
                  alt=""
                />
              </div>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default MoreInfo1;
