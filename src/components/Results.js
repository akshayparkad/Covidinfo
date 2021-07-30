import React from "react";


const Results = (props) => {
  const renderedResults = props.results.map((result) => {
    const isFree = result.fee_type === "Free";

    return (
          <div className="container bordercon mt-5">
            <ol className="list-group mb-5 border border-success">
              <li className="list-group-item d-flex justify-content-between align-items-start">
                <div className="ms-2 me-auto">
                  <div className="fw-bold">Center Name</div>
                </div>
                <span className="badge bg-light bg-dark rounded-pill">
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
                  <div className="fw-bold">Vaccine</div>
                </div>
                <span className="badge bg-danger rounded-pill">
                   {result.vaccine}
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
                  {result.available_capacity_dose2}
                </span>
              </li>
            </ol>
          </div>
    );
  });

  return <div> {renderedResults}</div>;
};

export default Results;
