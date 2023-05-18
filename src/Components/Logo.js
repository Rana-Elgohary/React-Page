import React from "react";

function Logo (props) {
    const cla = `${props.other} uppercase text-3xl font-bold text-[#00df9a]`
    return(
        <>
        <div>
            <h1 className={cla}>React.</h1>
        </div>
        </>
    )
} 

export default Logo