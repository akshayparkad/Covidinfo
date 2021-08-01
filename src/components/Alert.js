import { Link } from "react-router-dom";

const Alert0 = () => {

  const bgColor = {
    backgroundColor : "#E0F8F7"
  }
  return (
    <div className="container">
    <div className="alert mt-4" role="alert" style={bgColor}>
      <h4 className="alert-heading">Welcome!</h4>
     
      <p>
      <i class="bi bi-chat-text-fill text-primary"></i>
        Now you can check your nearest vaccination cernter and slots
        availability. Once it's available you check{" "}
        <a href="https://www.cowin.gov.in/">cowin.gov.in</a> to book the slot.
        You can also{" "}
        <Link to="/pincode">find vaccination centers using pincode</Link>.
      </p>
      <hr />
      <p className="mb-0">
        You can download covid vaccination certification from <Link to="/certificate">here </Link>
        <i class="bi bi-cloud-arrow-down-fill text-primary"></i>
      </p>
    </div>
    </div>
  );
};

export default Alert0;
