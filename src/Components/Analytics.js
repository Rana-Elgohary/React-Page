import React from "react"
import Laptop from "../img/laptop.jpg"
import Button from "./Button"

function Analytics () {
    return(
        <>
        <div className="bg-white w-full py-16 px-4">
            <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
                <img className="w-[500px] mx-auto my-4" src={Laptop} alt="Laptop"></img>
                <div className="flex flex-col justify-center">
                    <p className="text-[#00df9a] font-bold">DATA ANALYTICS DASHBOARD</p>
                    <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">Manage Data Analytics Centrally</h1>
                    <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
                    molestiae delectus culpa hic assumenda, voluptate reprehenderit
                    dolore autem cum ullam sed odit perspiciatis. Doloribus quos velit,
                    eveniet ex deserunt fuga?
                    </p>
                    <Button other="md:mx-0" name="Get Started"></Button>
                </div>
            </div>
        </div>
        </>
    )
}

export default Analytics