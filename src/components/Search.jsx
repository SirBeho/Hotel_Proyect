import { useEffect, useState } from "react";
import React from "react"; 

export default function Search({input,data}) { 
 
  const filteredData = data.filter( (dato, index, self) => self.findIndex((d) => 
    d.country === dato.country && d.city === dato.city) === index);

  const [inputValue, setInputValue] = useState('hola');

  const handleChange = (event) => {
    input(event.target.textContent)
    setInputValue(event.target.textContent);
  };

  const handleInputChange = (event) => {
    input(event.target.value)
    setInputValue(event.target.value);
  };
  
  return (

<div   className="modal  fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-fullscreen">
    <div className="modal-content p-4 h-auto" >
        {/* ` buscador` */}
          <div className="nav nav-pills mb-3" id="pills-tab" role="tablist">
        <div  className=" p-1 d-flex align-items-center " >
         
          <label htmlFor="location">Location<br/>
              <input id="location" value={inputValue} onChange={handleInputChange} type="text" className="outline-none border border-0 px-3 py-3" style={{outline : "none"}} data-bs-toggle="pill" data-bs-target="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true"/>
          </label>

          <label htmlFor="Guest">Guest<br/>
              <input id="Guest" type="text" className="outline-none border border-0 px-3 py-3" style={{outline : "none"}} data-bs-toggle="pill" data-bs-target="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false"/>
          </label>

          <span className="material-symbols-outlined p-2">search</span>
        </div>
          </div>
          {/* fin buscador */}
          {/* opciones */}
          <div className="tab-content d-flex flex-row px-3" >
              <div className="tab-pane fade d-flex flex-column  pe-5 show" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" style={{Width : "200px"}}>
                      {filteredData.map((dato, index) => {
                      return (
                      <div key={index} className="d-flex m-3 ">
                              <span className="material-symbols-outlined ">search</span>
                              <a className="text-black link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover" onClick={handleChange} >{dato.country},{dato.city}</a>
                      </div>
                      )})}
              </div>
              <div className="tab-pane fade d-flex flex-column " id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" style={{Width : "200px"}}>
                  <h5>Listado de opciones 2</h5>
                  <h5>Listado de opciones 2</h5>
                  <h5>Listado de opciones 2</h5>
                  <h5>Listado de opciones 2</h5>
              </div>
          </div>
      </div> 
        {/* fin opciones */}
   
  </div>
</div>

); }