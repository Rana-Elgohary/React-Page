import React, {useState} from "react"
import {AiOutlineClose, AiOutlineMenu} from "react-icons/ai";
import NavBarLinks from "./NavBarLinks";

function NavBar () {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav)
    }

    return(
        <>
        <div className="text-white flex items-center justify-between h-24 max-w-[1240px] mx-auto p-4">
            <NavBarLinks forUl="hidden md:flex" arr={["Home", "Company", "Resources", "About", "Contact"]}></NavBarLinks>

            <div onClick={handleNav} className="block md:hidden">
                {nav ? <AiOutlineClose size={30}></AiOutlineClose> : <AiOutlineMenu size={30}></AiOutlineMenu>}
                {/* When nav is not true ==> close icon */}
            </div>

            <div className={nav ? "fixed left-0 top-0 w-[60%] border-r border-r-gray-900 h-full bg-[#000300] ease-in-out duration-500 md:hidden" : "hidden"}>
                <NavBarLinks forUl="uppercase p-4" arr={["Home", "Company", "Resources", "About", "Contact"]}></NavBarLinks>
            </div>
        </div>
        </>
    )
}

export default NavBar