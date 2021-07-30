import React, { useState } from "react";
import axios from "axios";

const Download = (props) => {
  const [refId, setRefId] = useState("");

  const { token } = (props.location && props.location.state) || {};

  const handlePdfSubmit = async (e) => {
    e.preventDefault();
    await axios
      .get(
        "https://cdn-api.co-vin.in/api/v2/registration/certificate/public/download",
        {
          responseType: "arraybuffer",
          params: {
            beneficiary_reference_id: refId,
          },
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
            Accept: "application/pdf",
          },
        }
      )
      .then((response) => {
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "Covid_Certificate.pdf");
        document.body.appendChild(link);
        link.click();
      });
  };

  return (
    <>
      <div class="ui success message">
        <div class="header">Your successfully authenticated.</div>
        <p>Enter your reference Id to download vaccination certificate</p>
      </div>

      <form className="ui form" onSubmit={handlePdfSubmit}>
        <div className="field">
          <label>Enter Reference Id:</label>
          <input
            value={refId}
            type="text"
            placeholder="Reference Id"
            onChange={(e) => setRefId(e.target.value)}
          ></input>
        </div>

        <button type="submit" className="ui primary button">
          Download Certificate
        </button>
      </form>
    </>
  );
};

export default Download;
