import React from "react"; 

export default function Search({input}) { 
  
  return (

<div   className="modal  fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-fullscreen">
    <div className="modal-content p-4" style={{height: "270px",maxHeight:"100%"}}>
        {/* ` buscador` */}
        
          <div className="nav nav-pills mb-3" id="pills-tab" role="tablist">


        <div  className=" p-1 d-flex align-items-center " >
         
          <label htmlFor="location">Location<br/>
              <input id="location" type="text" onKeyUp={(e) => input(e)} className="outline-none border border-0 px-3 py-3" style={{outline : "none"}} data-bs-toggle="pill" data-bs-target="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true"/>
          </label>

          <label htmlFor="Guest">Guest<br/>
              <input id="Guest" type="text" className="outline-none border border-0 px-3 py-3" style={{outline : "none"}} data-bs-toggle="pill" data-bs-target="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false"/>
          </label>

          <span className="material-symbols-outlined p-2">search</span>
        </div>
          </div>
          <div className="tab-content d-flex flex-row px-3" >
              <div className="tab-pane fade d-flex flex-column  pe-5 show" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" style={{Width : "200px"}}>
                  <h5>Listado de opciones</h5>
                  <h5>Listado de opciones</h5>
                  <h5>Listado de opciones</h5>
                  <h5>Listado de opciones</h5>
              </div>
              <div className="tab-pane fade d-flex flex-column " id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" style={{Width : "200px"}}>
              <h5>Listado de opciones 2</h5>
              <h5>Listado de opciones 2</h5>
              <h5>Listado de opciones 2</h5>
              <h5>Listado de opciones 2</h5>
                  
              </div>
              
          </div>
      </div> 

        {/* fin buscador */}
   
  </div>
</div>

); }