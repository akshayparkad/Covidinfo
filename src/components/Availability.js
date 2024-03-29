import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import Results from "./Results";
import Alert0 from "./Alert";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";


const Availability = () => {
  const [states, setStates] = useState([]);
  const [selectedState, setSelectedState] = useState(states[0]);
  const [districts, setDistricts] = useState([]);
  const [selectedDistrict, setSelectedDistrict] = useState(districts[0]);
  const [open, setOpen] = useState(false);
  const [opend, setOpend] = useState(false);
  const [date, setDate] = useState("");
  const [results, setResults] = useState([]);
  const ref = useRef();

  const useStyles = makeStyles((theme) => ({
    container: {
      display: "flex",
      flexWrap: "wrap",
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 200,
    },
  }));

  const classes = useStyles();

  useEffect(() => {
    const onBodyClick = (event) => {
      if (ref.current.contains(event.target)) {
        return;
      }
      setOpen(false);
      setOpend(false);
    };
    document.body.addEventListener("click", onBodyClick, { capture: true });

    return () => {
      document.body.removeEventListener("click", onBodyClick, {
        capture: true,
      });
    };
  }, []); //to hide the dropdown when you click outside the component jsx .used useRef hook

  useEffect(() => {
    if (date) {
      fetchStates();
    }
  }, [date]);

  const alertDate = () => {
    return <div>No Date</div>;
  };

  const fetchStates = async () => {
    const { data } = await axios.get(
      "https://cdn-api.co-vin.in/api/v2/admin/location/states",
      {
        header: {
          "Accept-Language": "en-US",
        },
      }
    );
    setStates(data.states);
  };

  // const getD = async () =>{

  const renderStates = states.map((state) => {
    if (state.state_name === selectedState) {
      return null;
    }

    const handleStateClick = async () => {
      setSelectedState(state.state_name);

      const { data } = await axios.get(
        `https://cdn-api.co-vin.in/api/v2/admin/location/districts/${state.state_id}`,
        {
          header: {
            "Accept-Language": "en-US",
          },
        }
      );
      setDistricts(data.districts);
    };

    return (
      <div key={state.state_id} onClick={handleStateClick} className="item">
        {state.state_name}
      </div>
    );
  });

  const renderDistricts = districts.map((district) => {
    if (district.district_id === selectedDistrict) {
      return null;
    }

    const handleDistrictClick = async () => {
      setSelectedDistrict(district.district_name);

      const { data } = await axios.get(
        "https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict",
        {
          params: {
            "Accept-Language": "en-US",
            district_id: district.district_id,
            date: reverseString(date),
          },
        }
      );

      setResults(data.sessions);
    };

    return (
      <div
        key={district.district_id}
        onClick={handleDistrictClick}
        className="item"
      >
        {district.district_name}
      </div>
    );
  });

  const reverseString = (str) =>{
    return str.split("-").reverse().join("-");
  }


  return (
    <div className="container">
      <Alert0 />
      <label className="label"><strong>Select a Date</strong></label>
      <form className={classes.container} noValidate>
        
        <TextField
          value={date}
          id="date"
          type="date"
          defaultValue="01-08-2021"
          className={classes.textField}
          onChange={(e) => setDate(e.target.value)}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </form>

      <div ref={ref} className="ui form">
        <div className="ui field">
          <label className="label">Select a State</label>
          <div
            onClick={() => setOpen(!open)}
            className={`ui selection dropdown ${open ? "visible active" : ""}`}
          >
            <i className=" green dropdown icon"></i>
            <div className="text">{selectedState}</div>
            <div className={`menu ${open ? "visible transition" : ""}`}>
              {renderStates}
            </div>
          </div>
        </div>

        {alertDate}

        <div className="ui field">
          <label className="label">Select a District</label>
          <div
            onClick={() => setOpend(!opend)}
            className={`ui selection dropdown ${opend ? "visible active" : ""}`}
          >
            <i className="green dropdown icon"></i>
            <div className="text">{selectedDistrict}</div>
            <div className={`menu ${opend ? "visible transition" : ""}`}>
              {renderDistricts}
            </div>
          </div>
        </div>
      </div>

      <Results results={results} selectedDistrict={selectedDistrict} />
    </div>
  );
};

export default Availability;
