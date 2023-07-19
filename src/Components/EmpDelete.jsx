import React from "react";
import Sidebar from "./Sidebar";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { useState } from "react";
import axios from "axios";


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

export default function EmpDelete() {
    const [ssnitNumber, setssnitNumber] = useState("");


    const handleSubmit = async (event) => {
        event.preventDefault();
      
        // logging data submission
        console.log(ssnitNumber);
        try {
          const url = "http://localhost/php_programs/IMHO_delete.php";
      
          let mainssnitValue=new FormData();
          mainssnitValue.append("ssnitNumber",ssnitNumber);

          axios
            .post(url,mainssnitValue)
            .then((response) => {    alert(response.data);   })
            .catch((error) => console.log(error));
          
        } 
        catch (error) {
          alert("Error connecting to database :", error);
          console.error(error);
          console.log(error);
        }
      }

  return (
    <div className="flex justify-center flex-row  ">
      <div className="flex   w-5/6  bg-slate-100 my-20 drop-shadow-2xl ">
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
        {/* // from here is what you would work on. Everything above is about the
        //display of the page and slideshow of the images */}
        <form onSubmit={handleSubmit} method="POST" className=" flex flex-col  text-slate-800 m-auto ">
          <h1 className=" text-amber-700 text-xl font-body  pb-10 text-center  drop-shadow-2xl">
            Delete Employee Data
          </h1>
          <label>

            <input
              type="text"
              placeholder="SSNIT Number"
              name="ssnitNumber"
              onChange={(e) =>setssnitNumber(e.target.value)}
               className="bg-slate-100 my-3 rounded-sm drop-shadow-md pr-12 pl-4 py-2  text-slate-800 "
            ></input>
          </label>

          <button
            type="submit"
            className="bg-amber-600 rounded-sm px-8 py-1 m-auto mt-10 font-body text-lg  drop-shadow-md"
            onClick={handleSubmit}
          >
            Delete
          </button>
        </form>
      </div>
    </div>
  );
}