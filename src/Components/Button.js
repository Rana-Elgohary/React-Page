import React from "react";

function Button (props) {
    const cla = `bg-[#00df9a] rounded-md font-medium my-6 ${props.other} w-[200px] py-3 text-black`
    return(
        <>
        <button className={cla}>{props.name}</button>
        </>
    )
}

export default Button