import React from "react"
import Typed from 'react-typed';
import Button from "./Button";

function Hero () {
    return(
        <>
        <div className="text-white">
            <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
                <p className="text-[#00df9a] font-bold p-2">GROWING WITH DATA ANALYTICS</p>
                <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">Grow with data</h1>
                <div className="flex justify-center items-center py-4">
                    <p className="md:text-4xl sm:text-3xl text-xl">Fast, flexible financing for</p>
                    <Typed className="md:text-4xl sm:text-3xl text-xl pl-2 text-gray-500" 
                        strings={['BTB', 'BTC', 'SAAS']} typeSpeed={120} backSpeed={140} loop></Typed>
                </div>
                <p className="md:text-2xl text-xl font-bold text-gray-500">Monitor your data analytics to increase for BTB, BTC, & SASS platforms</p>
                <Button other="mx-auto" name="Get Started"></Button>
            </div>
        </div>
        </>
    )
}

export default Hero