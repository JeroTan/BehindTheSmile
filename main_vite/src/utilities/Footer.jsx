import { useState } from 'react'
///-- Imports Here
import Icon from './Icon.jsx';
import { Link, useNavigate } from "react-router-dom";
///-- Assets Here
import img_genessys_logo from '../assets/images/genesys_logo.png';

export default ()=>{
    const navigate = useNavigate();

    //// Contents ////
    let rendering = <>

    <footer class="relative w-full py-16 flex items-center justify-center bg-gray-500 box-border z-40 text-white">
        <div class="w-[62rem] flex flex-wrap mx-10">

            <section  class="md:w-8/12 w-full flex flex-wrap mb-5">
                <div class="lg:w-3/12 md:w-4/12 w-full flex md:justify-start justify-center box-border mb-2">
                    <div class="w-36">
                        <div class="w-full aspect-square bg-teal-400 contrast-75">
                            <img class="relative w-full h-full object-cover object-center" src={img_genessys_logo} />
                        </div>
                    </div>
                </div>
                <div class="lg:w-9/12 md:w-8/12 w-full box-border md:px-3 px-0">
                    <h4 class="text-2xl font-serif pb-2 text-teal-400">About GENESYS</h4>
                    <p class="text-sm break-normal font-extralight">
                        This project was made by the team GENESYS. They are a group of researchers, developers and designers, who have a great interest in the digital revolution of leading technology systems, bringing efficient design and creativity to its crafts.
                    </p>
                    <Link to={`/about/#`} className={`text-sm break-normal font-extralight underline underline-offset-2 decoration-1`}>Learn more</Link>
                </div>
            </section>

            <section class="md:w-4/12 w-full mb-12 md:pl-5">
                <div class="w-full">
                    <h4 class="font-light pb-2">Follow our page</h4>
                </div>
                <div class="flex flex-wrap gap-5">
                    <div class="cursor-pointer" onClick={()=>window.open('https://www.facebook.com/profile.php?id=100087153815957&mibextid=ZbWKwL', '_blank')}>
                        <Icon name='facebook' size='1.5' tailwindClass='fill-white'/>
                    </div>
                    <div class="cursor-pointer" onClick={()=>window.open('https://www.instagram.com', '_blank')}>
                    <Icon name='instagram' size='1.5' tailwindClass='fill-white'/>
                    </div>
                    <div class="cursor-pointer" onClick={()=>window.open('https://www.youtube.com/@genesys_designs', '_blank')}>
                        <Icon name='youtube' size='1.5' tailwindClass='fill-white'/>
                    </div>
                    <div class="cursor-pointer" onClick={()=>window.open('https://www.twitter.com', '_blank')}>
                        <Icon name='twitter' size='1.5' tailwindClass='fill-white'/>
                    </div>
                </div>
            </section>

            <section class="w-full">
                <small class="text-sm font-thin">&copy; 2023 by GENESYS. Made with React and Vite.</small>
            </section>

        </div>
    </footer>
    </>
    //// Contents ////
    return rendering;
}