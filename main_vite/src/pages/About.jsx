import { useState } from 'react'
//-- The Add-ons here --//
import {TitleChanger} from '../utilities/Title.jsx'
import Navbar from '../utilities/Navbar.jsx'
import Footer from '../utilities/Footer.jsx'
import Icon from '../utilities/Icon.jsx';
//-- Assets --//
import img_genessys_logo from '../assets/images/genesys_logo.png';


export default ()=>{

//// Contents ////
let rendering = <>
<TitleChanger title='About GENESYS'/>
<Navbar currentPage='about' />

{/*Main Content*/}
<main class="relative flex justify-center w-auto mb-20 mt-20 mx-10 box-border">
    <article class="w-[62rem] flex flex-wrap">
        <div class="lg:w-2/12 md:w-3/12 sm:w-4/12 w-full">
            <div class="w-full aspect-square bg-teal-400 contrast-75">
                <img class="relative w-full h-full object-cover object-center" src={img_genessys_logo} />
            </div>
        </div>
        <div class="lg:w-10/12 md:w-9/12 sm:w-8/12 w-full sm:pl-5 sm:pt-0 pt-5">
            <p class="break-normal font-extralight">
            <span class="text-teal-400">GENESYS</span> is a group of researchers, developers, and designers, who have a great interest in the digital revolution of leading technology systems. bringing efficient design and creativity to its crafts. Our objectives for this project, "Behind The Smile" is to inform the general masses about the seriousness and gravity of mental health covering the most common mental health problems. Having a website which is available to the public that has access to the internet will be beneficial to users in the modern world. We aim to produce well-designed content that is easily understood by the masses and can retain all that information efficiently and with minimal effort.
            </p>
        </div>
        <div class="w-full mt-16">
            <h4 class="text-2xl font-serif pb-2">Other Project</h4>
            <ul class="ml-5">
                <li class="list-disc list break-normal font-extralight pb-2">
                    <strong>SEENsitive</strong> - A website that contains information about the Data Privacy Act of 2012 in a much simpler way. The website main content is the scenario-based depiction of the certain sections in Data Privacy Act of 2012 that are overlooked in our daily lives.</li>
                <li class="list-disc list break-normal font-extralight pb-2">
                    <strong>PPK (Para sa Pamilya at Kinabukasan)</strong> - A project that will combat extreme poverty by highlighting the innate compassion of people and by providing opportunites for the less fortunate.
                </li>
                <li class="list-disc list break-normal font-extralight pb-2">
                    <strong>GENESIS Gaming Peripherals (GGP)</strong> - A project and a web application that sells desktop and other peripherals that users can customize themselves in a 3D immersive user interface. The project was on hold on 2020.
                </li>
            </ul>
        </div>
        <div class="w-full flex flex-wrap justify-center mt-28">
            <div class="w-[16rem] contrast-50">
                <img class="relative w-full h-full object-cover object-center" src='https://seensitive.in/assets/image/companyLogo.svg' />
            </div>
        </div>
        <div class="w-full flex flex-wrap justify-center mt-2">
            <p class="text-sm break-normal font-extralight italic w-[16rem] text-center">
                "In a world where new things are being invented each day, continue to add to the legacy of todays technology."
            </p>
        </div>
    </article>
</main>
<Footer />

</>
//// Contents ////
return rendering;

}