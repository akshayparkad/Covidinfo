import { Link } from "react-router-dom";

const Footer = () => {

     const bgColor = {
         backgroundColor: "#e3f2fd"
     }

    
  return (

    <div className="container my-5">
    
      <footer className="bg-light text-center">
      <div className="container p-4 pb-0">
      </div>
    
      <div className="text-center p-3" style={bgColor}>
        © 2020 Copyright:
        <Link to ="/" className="text-dark">Covidinfo </Link>
      </div>
    </footer>
      
    </div>

);
}

export default Footer;
