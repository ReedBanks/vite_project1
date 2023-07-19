import React,{useState} from "react";
import Sidebar from "./Sidebar";
import axios from 'axios';
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";


const slideImages = [
  "https://pbs.twimg.com/media/FrbH_58WAAADFUA?format=jpg&name=small",
  "https://pbs.twimg.com/media/FrQpAwlWIAI2k3h?format=jpg&name=small",
  "https://pbs.twimg.com/media/FqtaEUPWcAM-gHz?format=jpg&name=small",
  "https://pbs.twimg.com/media/FskPKZ7X0AAvWaY?format=jpg&name=small",
  "https://pbs.twimg.com/media/FsZ1OF2XsAAVSJJ?format=jpg&name=small",
  "https://pbs.twimg.com/media/FsPf9rHXwAMIzne?format=jpg&name=small",
  "https://pbs.twimg.com/media/Fr_1XvwXsAQl1Ho?format=jpg&name=small",
  "https://pbs.twimg.com/media/Fr1tn4BXoA82SOh?format=jpg&name=small",
  "https://pbs.twimg.com/media/FrrVXwnXsAIFLHn?format=jpg&name=small",
  "https://pbs.twimg.com/media/FrHEAjpXwAAmraB?format=jpg&name=small",
  "https://pbs.twimg.com/media/Fq39-jaWwBEn1ZZ?format=jpg&name=small",
  "https://pbs.twimg.com/media/Fjy92diXkDEynCe?format=jpg&name=small",
  "https://pbs.twimg.com/media/FkhdepOWAAAhYxl?format=jpg&name=small",
  "https://pbs.twimg.com/media/FmXjhV0XkAwUU3H?format=jpg&name=small",
  "https://pbs.twimg.com/media/FmnFFSUWABgU1h0?format=jpg&name=small",
  "https://pbs.twimg.com/media/FmxHYsfWIAAeJ2S?format=jpg&name=small",
  "https://pbs.twimg.com/media/Fnf1fKNXwA4reee?format=jpg&name=small",
  "https://pbs.twimg.com/media/FoTTtoYXoAUU0wM?format=jpg&name=small",
];

const arrowStyle = {
  width: "20px",
  height: "20px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "white",
  borderRadius: "50%",
  margin: "10px",
};

const prevArrow = <div style={{ ...arrowStyle, left: 0 }}>{"<"}</div>;

const nextArrow = <div style={{ ...arrowStyle, right: 0 }}>{">"}</div>;
export default function Update(){
    
const [formData, setFormData] = useState({
            position: "",
            salary: "",
            ssnitNumber: "",
});
        
          const handleChange = (event) => {
            const { name, value } = event.target;
            setFormData({ ...formData, [name]: value });
          };

          //this is responsible for displaying the data
          const handleDisplay = async (event) => {
            event.preventDefault();
          const url="http://localhost/php_programs/IMHO_read.php";
       
          }
          

//this is responsible for updating employee
           const handleSubmit = async (event) => {
             event.preventDefault();
        
             //logging data submission
            console.log(formData); 
             try {
              const url="http://localhost/php_programs/IMHO_update.php";
        
            axios
               .post(url,formData)
               .then((response) => alert(response.data))
               .catch((error) => console.log(error));
               
              
             }
              catch (error) {
               alert("Error connecting to database :", error);
               console.error(error);
               console.log(error);
             }
           };
        
          
          return (
            <div className="flex justify-center flex-row ">
              <div className="flex  justify-center w-5/6 bg-white my-20 drop-shadow-2xl ">
                <Sidebar />
        
                <div className="w-3/6  bg-amber-600 ">
          <div className="slide-container h-2/6 ">
            <Fade
              transitionEffect="zoom-out"
              duration={5000}
              prevArrow={prevArrow}
              nextArrow={nextArrow}
            >
              {slideImages.map((image, index) => (
                <div
                  className="each-fade flex justify-center   my-8 "
                  key={index}
                >
                  <img
                    src={image}
                    alt="slide"
                    style={{ maxHeight: "400px", maxWidth: "700" }}
                    className="rounded  w-4/6 drop-shadow-2xl"
                  />
                </div>
              ))}
            </Fade>
          </div>
        </div>
   <div className="w-2/6  text-slate-800 text-center font-body">
   <h1 className=" text-amber-600 text-xl font-body pt-10 drop-shadow-md text-center">
                   Update Employee Record
                  </h1>
      <form onSubmit={handleSubmit} method="POST" className="text-slate-800 ml-4 mt-10" >
          <label>
            <input
              type="text"
              placeholder="SSNIT Number"
              name="ssnitNumber"
              onChange={handleChange}
              className="bg-white my-3 rounded-sm drop-shadow-md pr-20 pl-2 py-2 mr-3 text-slate-800"
            ></input>
          </label>
                   
                       
                   <br />
                   <label>
                     <input
                       type="text"
                       placeholder="Position"
                       name="position"
                       value={formData.position}
                       onChange={handleChange}
                       className="bg-white my-3 rounded-sm drop-shadow-md pr-20 pl-2 py-2 mr-3 text-slate-800"
                     />
                   </label>
       
                   <label>
                     <input
                       type="text"
                       placeholder="Salary"
                       name="salary"
                       value={formData.salary}
                       onChange={handleChange}
                       className="bg-white mr-3  my-3 rounded-sm drop-shadow-md pr-20 pl-2 py-2 text-slate-800"
                     />
                   </label>
                   <br />
       
                  
       
                   
                 </form>
                
        
                 
                  <button
                    type="submit"
                    className="bg-amber-600 rounded-sm px-10 py-2 m-auto mt-10 font-body text-md  drop-shadow-md"
                   
                   onClick={handleSubmit}
                  >
                    Update
                  </button>
                </div>
              </div>
            </div>
    )}
