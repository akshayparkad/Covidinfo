import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Alert, AlertTitle } from '@material-ui/lab';
import { Collapse } from '@material-ui/core';

const Results = (props) => {

  const dis = props.selectedDistrict;
  const len = props.results.length;
  const notAvailable = props.results.length === 0 && dis;
  
  const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      '& > * + *': {
        marginTop: theme.spacing(2),
      },
    },
  }));

  const classes = useStyles();

  return (
    <div className="container mt-5">

    <Collapse in={len}>
    <div className={classes.root}>
      <Alert severity="success">
        <AlertTitle>Found</AlertTitle>
        Total Vaccination Centers — <strong>{len}</strong>
      </Alert>
    </div>
        </Collapse>

        <Collapse in={notAvailable}>
    <div className={classes.root}>
      <Alert severity="warning">
        <AlertTitle>Not Available</AlertTitle>
        Vaccination is not available at this time.
      </Alert>
    </div>
        </Collapse>

      <div className="row mt-5">
        {props.results.map((result) => (
          <div className="col">
            <ol className="list-group mb-5">
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
                    result.fee_type === "Free"
                      ? "bg-success"
                      : "bg-warning text-dark"
                  }`}
                >
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
        ))}
      </div>
    </div>
  );
};

export default Results;
