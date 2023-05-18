import React from "react"
import {
    FaDribbbleSquare,
    FaFacebookSquare,
    FaGithubSquare,
    FaInstagram,
    FaTwitterSquare,
} from 'react-icons/fa';
import FooterCol from "./FooterCol";
import Logo from "./Logo";

function Footer () {
    return(
        <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
            <div>
                <Logo></Logo>
                <p className='py-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id odit ullam iste repellat consequatur libero reiciendis, blanditiis accusantium.</p>
                <div className='flex justify-between md:w-[75%] my-6'>
                    <FaFacebookSquare size={30} />
                    <FaInstagram size={30} />
                    <FaTwitterSquare size={30} />
                    <FaGithubSquare size={30} />
                    <FaDribbbleSquare size={30} />
                </div>
            </div>

            <div className='lg:col-span-2 flex justify-between mt-6'>
                <FooterCol forH1="Solutions" arr={["Analytics", "Marketing", "Commerce", "Insights"]}></FooterCol>
                <FooterCol forH1="Support" arr={["Pricing", "Documentation", "Guides", "API Status"]}></FooterCol>
                <FooterCol forH1="Company" arr={["About", "Blog", "Jobs", "Press", "Careers"]}></FooterCol>
                <FooterCol forH1="Legal" arr={["Claim", "Policy", "Terms"]}></FooterCol>
            </div>
        </div>
    )
}

export default Footer