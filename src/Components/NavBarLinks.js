import React from "react";
import Logo from "./Logo";

function NavBarLinks (props) {
    const arr = props.arr

    return(
        <>
        <Logo></Logo>
        <ul className={props.forUl}>
            {arr.map((ele) => {
                return <li key={ele} className="p-4">{ele}</li>
            })}
        </ul>
        </>
    )
} 

export default NavBarLinks