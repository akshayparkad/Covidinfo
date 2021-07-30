import React, { useState } from "react";
import axios from "axios";

const Search = () => {
  const [vpincode, setvPincode] = useState("");
  const [vdate, setvDate] = useState("");
  const [results, setResults] = useState([]);

  const fetchOnSubmit = () => {
    const search = async () => {
      const { data } = await axios.get(
        "https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin",
        {
          params: {
            pincode: vpincode,
            date: vdate,
          },
        }
      );
      setResults(data.sessions);
    };
    search();
  };

  console.log()

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchOnSubmit();
    
  };

  const noSessionAvailable = results.length===0 ? <div className="ui yellow message">Not Available</div> : null;
    

  const renderedResults = results.map((result) => {
    const isFree = result.fee_type === "Free";

    return (
      <div className="container bordercon mt-5">
        <ol className="list-group mb-5 border border-success">
          <li className="list-group-item d-flex justify-content-between align-items-start">
            <div className="ms-2 me-auto">
              <div className="fw-bold">Center Name</div>
            </div>
            <span className="badge bg-light bg-dark rounded-pill">
              {" "}
              {result.name}
            </span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-start">
            <div className="ms-2 me-auto">
              <div className="fw-bold">Center Address</div>
            </div>
            <span className="badge bg-light text-dark rounded-pill">
              {" "}
              {result.address}
            </span>
          </li>

          <li className="list-group-item d-flex justify-content-between align-items-start">
            <div className="ms-2 me-auto">
              <div className="fw-bold">District Name</div>
            </div>
            <span className="badge bg-light text-dark rounded-pill">
              {result.district_name}
            </span>
          </li>

          <li className="list-group-item d-flex justify-content-between align-items-start">
            <div className="ms-2 me-auto">
              <div className="fw-bold">Vaccinations Timing</div>
            </div>
            <span className="badge bg-light text-dark rounded-pill">
              {result.from} to {result.to}
            </span>
          </li>

          <li className="list-group-item d-flex justify-content-between align-items-start">
            <div className="ms-2 me-auto">
              <div className="fw-bold">Age Limit</div>
            </div>
            <span className="badge bg-secondary rounded-pill">
              {result.min_age_limit}+
            </span>
          </li>

          <li className="list-group-item d-flex justify-content-between align-items-start">
            <div className="ms-2 me-auto">
              <div className="fw-bold">Fee Type</div>
            </div>
            <span
              className={`badge rounded-pill ${
                isFree ? "bg-success" : "bg-warning text-dark"
              }`}
            >
              {" "}
              {result.fee_type}
            </span>
          </li>

          <li className="list-group-item d-flex justify-content-between align-items-start">
            <div className="ms-2 me-auto">
              <div className="fw-bold">Charges</div>
            </div>
            <span className="badge bg-primary rounded-pill">
              Rs {result.fee}
            </span>
          </li>

          <li className="list-group-item d-flex justify-content-between align-items-start">
            <div className="ms-2 me-auto">
              <div className="fw-bold">Dose Availability</div>
            </div>
            <span className="badge bg-light text-dark">Dose 1: </span>
            <span className="badge bg-info text-dark rounded-pill">
              {result.available_capacity_dose1}
            </span>
            <span className="badge bg-light text-dark">Dose 2: </span>
            <span className="badge bg-info text-dark rounded-pill">
              {" "}
              {result.available_capacity_dose2}
            </span>
          </li>
        </ol>
      </div>
    );
  });

  return (
    <div className="container">
      <form className="ui form" onSubmit={handleSubmit}>
        <div className="field">
          <label>Enter Pincode:</label>
          <input
            value={vpincode}
            type="text"
            placeholder="Pincode"
            onChange={(e) => setvPincode(e.target.value)}
          ></input>
        </div>

        <div className="field">
          <label>Date:</label>
          <input
            value={vdate}
            type="text"
            placeholder="Date"
            onChange={(e) => setvDate(e.target.value)}
          ></input>
        </div>

        <button type="submit" className="ui primary button">
          Submit
        </button>
      </form>
      {renderedResults}
      {noSessionAvailable}
    </div>
  );
};

export default Search;
