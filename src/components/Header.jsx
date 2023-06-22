import React from 'react'
import logo from '../assets/img/logo.svg'
export default function Header() {
  return (
    <div className='container d-flex flex-wrap gap-3 justify-content-between mt-5 mb-5 align-items-center'>
        <div className='logo'>
            <img src= {logo} alt="" />
        </div>
        <div type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" className=" shadow rounded-4 d-flex align-items-center overflow-hidden " style={{maxWidth:"26%",minWidth: "270px"}}>
          <input type="text" className="outline-none border border-0 w-50 px-3 py-3" style={{outline : "none"}} aria-label="" />
          <input type="text" className="border-end border-start border border-0 w-50 px-3 py-3" style={{outline : "none"}} placeholder="" aria-label="Server"/>
          <span className="material-symbols-outlined p-2">search</span>
        </div>
    </div>
  )
}
