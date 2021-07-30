import React, { useState } from "react";
import axios from "axios";

const Download = (props) => {
  const[refId, setRefId] =useState("");
  const [pdfData, setPdfData] = useState("");

  const fetchPdfOnSubmit = () => {
    const getPdf = async () => {
      const response = await axios.get(
        "https://cdn-api.co-vin.in/api/v2/registration/certificate/public/download",
        {
          params: {
            beneficiary_reference_id: refId,
          },
          headers: {
            Authorization: `Bearer ${props.token}`,
          },
        }
      );
      setPdfData(response);
    };

    getPdf();
  };

 const handlePdfSubmit=(e)=>{
    e.preventDefault();
    fetchPdfOnSubmit()
  }

  return (
    <>
      <form className="ui form" onSubmit={handlePdfSubmit}>
        <div className="field">
          <label>Enter Reference Id:</label>
          <input
            value={refId}
            type="text"
            placeholder="Reference Number   "
            onChange={(e) => setRefId(e.target.value)}
          ></input>
        </div>

        <button type="submit" className="ui primary button">
          Get Certificate
        </button>
      </form>
    </>
  );
};

export default Download;
