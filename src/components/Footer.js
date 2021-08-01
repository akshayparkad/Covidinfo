import { Link } from "react-router-dom";

const Footer = () => {

     const bgColor = {
         backgroundColor: "#2E64FE"
     }

    
  return (

    <div className="container my-5">
    
      <footer className="bg-light text-center">
      <div className="container p-4 pb-0">
      </div>
    
      <div className="text-center p-3 text-white" style={bgColor}>
        © 2020 Copyright : 
        <Link to ="/" className="text-dark text-white"> Covidinfo </Link>
      </div>
    </footer>
      
    </div>

);
}

export default Footer;
