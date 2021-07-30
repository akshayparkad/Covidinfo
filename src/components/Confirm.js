import React from "react";
import { useEffect, useState } from "react";
import sjcl from "sjcl";
import axios from "axios";

const Confirm = (props) => {
  const [otp, setOTP] = useState("");
  const [sha256OTP, setSha256OTP] = useState("");

  const { txnId } = (props.location && props.location.state) || {};

  const handleSubmitHash = async (e) => {
    e.preventDefault();
    const { data } = await axios.post(
      "https://cdn-api.co-vin.in/api/v2/auth/public/confirmOTP",
      {
        otp: otp,
        txnId: txnId,
      }
    );

    if (data.token) {
      props.history.push({
        pathname: "/downloadpdf",
        state: { token: data.token },
      });
    }
  };



  useEffect(() => {
    const myBitArray = sjcl.hash.sha256.hash(sha256OTP);
    const myHash = sjcl.codec.hex.fromBits(myBitArray);
    setOTP(myHash);
  }, [sha256OTP]);

  return (
    <div className="container">
      <div className="ui warning message">
        
        <div className="header">Enter OTP to authenticate and download certificate.</div>
      </div>
      <form className="ui form" onSubmit={handleSubmitHash}>
        <div className="field">
          <label>Enter OTP:</label>
          <input
            value={sha256OTP}
            type="text"
            placeholder="OTP"
            onChange={(e) => setSha256OTP(e.target.value)}
          ></input>
        </div>
        <button type="submit" className="ui primary button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Confirm;
