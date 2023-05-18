import React from "react";

function CardItem (props) {
    const divCla = `w-full shadow-xl flex flex-col p-4 ${props.othersForDiv} rounded-lg hover:scale-105 duration-300`
    const butCla = `${props.othersForBut} w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3`
    
    return(
        <>
        <div className={divCla}>
            <img className='w-20 mx-auto mt-[-3rem]' src={props.image} alt="/" />
            <h2 className='text-2xl font-bold text-center py-8'>{props.user}</h2>
            <p className='text-center text-4xl font-bold'>{props.price}</p>
            <div className='text-center font-medium'>
                <p className='py-2 border-b mx-8 mt-8'>500 GB Storage</p>
                <p className='py-2 border-b mx-8'>1 Granted User</p>
                <p className='py-2 border-b mx-8'>Send up to 2 GB</p>
            </div>
            <button className={butCla}>Start Trial</button>
        </div>
        </>
    )
}

export default CardItem