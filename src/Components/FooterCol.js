import React from "react";

function FooterCol (props) {
    const arr = props.arr

    return(
        <>
        <div>
            <h6 className='font-medium text-gray-400'>{props.forH1}</h6>
            <ul>
                {arr.map((ele) => {
                    return <li key={ele} className='py-2 text-sm'>{ele}</li>
                })}
            </ul>
        </div>
        </>
    )
} 

export default FooterCol