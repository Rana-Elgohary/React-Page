import React from "react"
import Single from '../img/single.png'
import Double from '../img/double.png'
import Triple from '../img/triple.png'
import CardItem from "./CardItem"

function Cards () {
    return(
        <div className='w-full py-[10rem] px-4 bg-white'>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
                <CardItem image={Single} user="Single User" price="$149" othersForDiv="my-4" othersForBut="bg-[#00df9a]"></CardItem>
                <CardItem image={Double} user="Double Users" price="$199" othersForDiv="md:my-0 my-8 bg-gray-100" othersForBut="bg-black text-[#00df9a]"></CardItem>
                <CardItem image={Triple} user="Triple Users" price="$249" othersForDiv="my-4" othersForBut="bg-[#00df9a]"></CardItem>
            </div>
        </div>
    )
}

export default Cards