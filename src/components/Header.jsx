import React from 'react'
import logo from '../assets/img/logo.png'
export default function Header() {
  return (
    <div className='container d-flex justify-content-between mt-3 mb-5'>
        <div className='logo'>
            <img src= {logo} alt="" />
        </div>

        <div class=" w-25 shadow rounded-4 d-flex pe-3 ps-3 align-items-center">
          <input type="text" class="outline-none border border-0 w-50" aria-label=""/>
          <input type="text" class="border-end border-start border border-0 w-50 pt-2 pb-2" placeholder="" aria-label="Server"/>
          <span class="material-symbols-outlined ms-2">search</span>
        </div>

    </div>
  )
}
