import React from 'react'
import Card from "./Card";

export default function Body({data}) {
  return (
    <section className="container  pt-3">
            <div className=" pb-2 d-flex justify-content-between ">
              <h1>Stays in Finland</h1>
              <span>12+ stays</span>
            </div>
           
            <div className=" mt-1 row row-cols-1  row-cols-md-2 row-cols-lg-3"> 
              {data.map((dato, index) =>  <Card key={index} datos={dato}/>)}
          </div>
    </section>
  )
}
