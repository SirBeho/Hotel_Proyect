import { useEffect, useState } from "react";
import React from "react"; 
import Boton_num from "./Boton_num";

export default function Search({data,filtrado}) { 
 
  const filteredData = data.filter( (dato, index, self) => self.findIndex((d) => 
    d.country === dato.country && d.city === dato.city) === index);

  const [localValue, setLocalValue] = useState("");
  const [guestValue, setGuestValue] = useState("");


  const handleChange = (event) => {
    setLocalValue(event.target.textContent);
  };

  const handleInputChange = (event) => {
    setLocalValue(event.target.value);
  };

  useEffect(() => {
    filtrado(localValue,guestValue)
  }, [localValue,guestValue]);


  
  return (
<div   className="modal  fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-fullscreen">
    <div className="modal-content p-5 h-auto" >
        {/* ` buscador` */}
        <div className="d-flex flex-wrap flex-sm-nowrap  row-gap-3 justify-content-evenly w-100 shadow rounded-4  mb-3" id="pills-tab" role="tablist">

              <label className="w-100 rounded-4 py-2 px-4 active" htmlFor="location" data-bs-toggle="pill" data-bs-target="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true" >Location<br/>
                  <input id="location" placeholder="Add location" value={localValue} onChange={handleInputChange} type="text" className="outline-none border border-0  " style={{outline : "none"}} />
              </label>

              <label className="w-100 rounded-4 py-2 px-4" htmlFor="Guest" data-bs-toggle="pill" data-bs-target="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">Guest<br/>
              
                  <input id="Guest" value={guestValue} type="text" placeholder="Add guests" tabIndex="-1" className="outline-none border border-0  " style={{outline : "none"}} />
              </label>

              <div className="w-100 d-flex justify-content-center ">
                <button data-bs-dismiss="modal" className="btn btn-outline-danger px-4 d-flex align-items-center rounded-4" >
                    <span className="material-symbols-outlined p-2">search</span>
                    <span>Search</span>
                </button>
             </div>

          </div>
          {/* fin buscador */}
         
          {/* opciones */}
          <div className="tab-content d-flex  w-100" >
              <div className="w-100 py-2 px-4 tab-pane fade d-sm-flex  flex-column active show" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" >
                      {filteredData.map((dato, index) => {
                      return (
                      <div key={index} className="pe-auto d-flex m-3 ">
                              <span className="pe-auto material-symbols-outlined ">search</span>
                              <a className="pe-auto text-black link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover" onClick={handleChange} >{dato.country},{dato.city}</a>
                      </div>
                      )})}
              </div>

              <div className="w-100 py-2 px-4 tab-pane fade  flex-column " id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" >
                <div>
                  <Boton_num data={{person:"Adult",age:"13 or above",guestValue,setGuestValue}}/>
                  <Boton_num data={{person:"Children",age:"2-12",guestValue,setGuestValue}}/>
                </div>
              </div>
              
              <div className="w-100"></div>
          </div>

      </div> 
        {/* fin opciones */}
   
   
  </div>
</div>

); }