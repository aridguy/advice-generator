// import logo from './logo.svg';
import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

const App = () => {
  const [advice, setAdvice] = useState("");
  const [nextAdvice, setNextAdvice] = useState(0)
  useEffect(() => {
    axios.get("https://api.adviceslip.com/advice")
    .then((res) => setAdvice(res.data.slip))
    .catch((error)=> {console.log(error);})
   }, [nextAdvice]);
  

  return (
    <div>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-6">
              <div className="adv-bg ">
                <div className="adc-contents">
                  <div className="avc-head p-2 text-center">
                    <small className="brand-two">ADVICE#{advice.id}</small>
                  </div>
                  <div className="adc-body text-center text-mute p-5 advice">
                    <span>
                      {advice.advice}
                     
                    </span>
                  </div>
                  <div className="adc-footer p-4">
                    <div className="row">
                      <div className="col-md-1"></div>
                      <div className="col-md-10">
                        <div className="d-flex gap-4 lines">
                          <hr className="text-white" />{" "}
                          <i className="fas fa-pause text-white"></i>{" "}
                          <hr className="text-white" />
                        </div>
                        <div className="text-center adviceBtn">
                          <i
                            onClick={()=> setNextAdvice(nextAdvice+1)}
                            className="fas fa-qrcode mt-5 cursor brand-two"
                          ></i>
                        </div>
                      </div>
                      <div className="col-md-1"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3"></div>
          </div>
          <div className="row mt-5">
          <div className="col-md-12 col-12 text-white text-center">
          <small> By Ariyo </small>
          </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;
