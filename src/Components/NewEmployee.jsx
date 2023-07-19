import React, { useState } from "react";
import Sidebar from "./Sidebar";
import axios from "axios";


export default function NewEmployee() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    position: "",
    salary: "",
    dateOfEmployment: "",
    ssnitNumber: "",
    phoneNumber: "",
    email: ""
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

   const handleSubmit = async (event) => {
     event.preventDefault();
     


     //logging data submission
    console.log(formData); 
     try {
      const url="http://localhost/php_programs/IMHO_connect.php";

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

        <div className="w-3/6 ml-5  bg-amber-600 ">
          <h1 className=" text-slate-800 text-3xl font-body p-10 text-center">
           New Employee
          </h1>

          <form onSubmit={handleSubmit} method="POST" className="text-slate-800 m-auto ml-5" >
            <label>
              <input
                type="text"
                placeholder="  First Name"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="bg-white my-3 rounded-sm drop-shadow-md pr-20 pl-2 py-2 mr-3 text-slate-800"
              />
            </label>

            <label>
              <input
                type="text"
                placeholder="Last Name"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="bg-white my-3 rounded-sm drop-shadow-md pr-20 pl-2 py-2 text-slate-800"
              />
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
                className="bg-white my-3 rounded-sm drop-shadow-md pr-20 pl-2 py-2 text-slate-800"
              />
            </label>
            <br />

            <label>
              <input
                type="text"
                placeholder="SSNIT Number"
                name="ssnitNumber"
                value={formData.ssnitNumber}
                onChange={handleChange}
                className="bg-white my-3 rounded-sm drop-shadow-md pr-20 pl-2 py-2 mr-3 text-slate-800 "
              />
            </label>

            <label>
              <input
                type="text"
                placeholder="Phone Number"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="bg-white my-3 rounded-sm drop-shadow-md pr-20 pl-2 py-2 text-slate-800"
              />
            </label>
            <br />
            <label>
              <input
                type="date"
                placeholder="Date of Employment"
                name="dateOfEmployment"
                value={formData.dateOfEmployment}
                onChange={handleChange}
                className="bg-white my-3 rounded-sm drop-shadow-md pr-20 pl-12 py-2 text-slate-800"
              />
            </label>
            <label>
              <input
                type="text"
                placeholder="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="bg-white my-3 rounded-sm drop-shadow-2xl ml-4 pr-20 pl-2 py-2 text-slate-800"
              />
            </label>
            {/* position of submit button is changed for handle sumit to occur */}
           
          </form>
          {/* printing out of data */}
        </div>
        <div className="w-2/6  text-slate-800 text-center font-body">
          <h1 className="mt-5 text-3xl">
            {formData.firstName} {formData.lastName}
          </h1>
          <br />
          <h2 className="text-xl ">{formData.position}</h2>
          <h2>{formData.dateOfEmployment}</h2>
          <h2>{formData.phoneNumber}</h2>
          <h2>{formData.email}</h2>
          <br />
          <br />

          <h2>{formData.salary}</h2>

          <h2>{formData.ssnitNumber}</h2>
          <button
            type="submit"
            className="bg-amber-600 rounded-sm px-20 py-2 m-auto mt-10 font-body text-lg  drop-shadow-md"
           
           onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );

  }