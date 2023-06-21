import React, { useEffect, useState } from "react";

export default function Boton_num({ data }) {
    const [value, setValue] = useState(0);
    
    const handleIncrement = () => {
        if(value < 10){
            setValue(value +1 );
            data.setGuestValue(Number(data.guestValue) +1); 
        }
    };
    const handleDecrement = () => {
        if(value > 0){
            setValue(value -1 );
            data.setGuestValue(Number(data.guestValue) -1); 
        }
    };   

    return (

        <div className="pt-4 ">
            <span>{data.person}</span>
            <h3 className="text-secondary">Ages {data.age}</h3>
            <div className="input-group pt-2 text-center">
            <button
            style={{width: "1.7rem",height:"1.7rem"}}
                className="bg-transparent border border-black rounded-2"
                type="button"
                onClick={handleDecrement}
            >
                -
            </button >
            <p
                disabled
                className="border border-0 px-3 d-flex align-items-end"
                value={value}
                onChange={(e) => setValue(Number(e.target.value))}
            >{value}</p>
            
            <button
                style={{width: "1.7rem",height:"1.7rem"}}
                className="bg-transparent border border-black rounded-2"
                type="button"
                onClick={handleIncrement}
            >
                +
            </button>
        </div>

        </div>

        
    );
}
