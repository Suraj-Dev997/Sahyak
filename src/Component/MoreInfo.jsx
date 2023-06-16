import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReply } from "@fortawesome/free-solid-svg-icons";
import "./MoreInfo.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import Model from "./Model";
const MoreInfo = () => {
  const [show,setShow] = useState(false)
  const [pdfurl,setPdfurl] = useState("")
  const [text, setText] = useState("")
  

  const closeModel = ()=>{
    setShow(false);
  }
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
          <h6 className="heading-div"> Know more about High Blood Pressure</h6>
          <div className="heading-img-div">
            <img src="https://sahayak.org/images/shape@2x.png" alt="" />
          </div>
        </div>
        <div className="home-but-main-div">
          <div className="home-but-div1">
            
              <div className="home-but-div" onClick={()=>{
                   setShow(true)
                   setPdfurl('https://drive.google.com/file/d/15MbLq-1JN3anrig2ise9TKE-425KdJ2h/view');
                   setText("Facts About Blood Pressure")
              }}>
                <img
                  src="https://sahayak.org/images/Facts%20about%20BP@2x.png"
                  alt=""
                />
              </div>
          
              <div className="home-but-div" onClick={()=>{
                
                   setShow(true)
                   setPdfurl('https://drive.google.com/file/d/1ZKGPmph2pG_x7HvRsLYBpSlZNCfKyMN4/view');
                   setText("Sign & Symptoms")
              }}>
                <img
                  src="https://sahayak.org/images/Sign%20&%20Symptoms@2x.png"
                  alt=""
                />
              </div>
         
          </div>
          <div className="home-but-div2">
            
              <div className="home-but-div" onClick={()=>{
                setShow(true)
                setPdfurl('https://drive.google.com/file/d/16pDHK9aIpZ9FNwWBoPsjNchNxDTdkrLn/view');
                setText("Know Your Numbers")
                
           }}>
                <img
                  src="https://sahayak.org/images/Know%20Your%20Numbers@2x.png"
                  alt=""
                />
              </div>
           
           
              <div className="home-but-div" onClick={()=>{
                setShow(true)
                setPdfurl('https://drive.google.com/file/d/1EG-tsqFq925KtFR_B4QEzHfIVwNO99Gb/view');
                setText("Risk Factors")
                
           }}>
                <img
                  src="https://sahayak.org/images/Risk%20Factors@2x.png"
                  alt=""
                />
              </div>
           
          </div>
        </div>
      </div>
      {show && <Model closeModel={closeModel} pdfurl={pdfurl} text={text}></Model>}
    </>
  );
};

export default MoreInfo;
