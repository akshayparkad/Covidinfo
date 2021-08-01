import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Certificate = (props) => {
  const [vmobile, setVmobile] = useState("");

  const bgColor = {
    backgroundColor : "#E0F8F7"
  }
    
  const handleSubmit = async (e) => {
      e.preventDefault();
      const { data } = await axios.post(
        "https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP",
        {
          mobile: vmobile,
        }
      );

      if (data.txnId && vmobile.length===10) {
          props.history.push({
          pathname: "/authorise",
          state: { txnId: data.txnId},
        });
    }
    
  };

  // const otpSent = () => txnId > 0 ? <div className="ui green message">OTP Sent</div> : null;

  return (
    <div className="container">

      <div className="alert mt-4" role="alert" style={bgColor}>     
      <p>
      You need the authorization to download the vaccine certificate. Please enter your registered mobile number and confirm OTP. To get vaccinated, <Link to="/">search vaccination centers in your district</Link>.
        You can also find vaccination centers <Link to="/pincode"> using pincode</Link>.
      </p>
    
    </div>
      <form className="ui form" onSubmit={handleSubmit}>
        <div className="field">
          <label>Enter Your Mobile Number:</label>
          <input
            value={vmobile}
            type="text"
            placeholder="Mobile Number"
            onChange={(e) => setVmobile(e.target.value)}
          ></input>
        </div>
        <button type="submit" className="ui primary button">
          Get OTP
        </button>
      </form>
    
    </div>
  );
};

export default Certificate;