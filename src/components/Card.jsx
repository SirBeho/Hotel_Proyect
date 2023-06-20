import React from 'react'
import estrella from '../assets/img/star.svg'

export default function Card({datos}) {
  return (
    <div className="card p-3 border border-0 " >
        <img src={datos.photo} className=" rounded-4 object-fit-cover" style={{maxHeight : "282px"}} alt="..."/>
        <div className="d-flex pt-2 align-items-center my-2" >
           {datos.superHost ? <span className=' p-2 me-2 border border-black rounded-4'>SUPER HOST</span>:null }
            <h3 className="card-text text-secondary"> {datos.type}</h3>
            <div className="card-text ms-auto d-flex align-items-center" >
                <img style={{height: "15px"}} src={estrella} className="card-img-top"/>
                <span>{datos.rating}</span>
            </div>
        </div>  
        <p className="m-0">{datos.title}</p>
</div>
  )
}
