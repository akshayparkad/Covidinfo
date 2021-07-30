import React, { useState } from "react";
import axios from "axios";

const Certificate = (props) => {
  const [vmobile, setVmobile] = useState("");
  
    
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