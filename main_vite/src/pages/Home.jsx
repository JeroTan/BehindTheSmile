import { useState } from 'react'
//-- The Add-ons here --//
import {TitleChanger} from '../utilities/Title.jsx'
import Navbar from '../utilities/Navbar.jsx'
//-- Assets Here --//
import img_homeBanner from '../assets/images/pl_home.jpg';

const Box_wclick = ({image, text})=>{
    return <>
        <div class="relative w-4/12 box-border aspect-square">
            <div class="absolute w-full h-full">
                <img class="relative w-full h-full object-cover object-center" src={image} />
            </div>
            <div>
                {text}
            </div>
        </div>
    </>
}

export default ()=>{
    
    //// Contents ////
    let rendering = <>
        <TitleChanger title='Home'/>
        <Navbar currentPage='home' />
        {/* Image */}
        <section class="block relative w-full h-96 box-border">
            <div class="absolute w-full h-full contrast-50 brightness-75 bg-teal-400">
                <img class="relative w-full h-full object-cover object-center" src={img_homeBanner} />
            </div>
            <div class="absolute flex w-full h-full justify-center items-center">
                <div clas="block">
                    <h1 class="text-6xl text-center text-teal-300 font-extrabold">Behind the Smile</h1>
                    <small class="text-base block text-center text-slate-100 font-light">Making the unseen seen</small>
                </div>
            </div>
        </section>
        {/* Content */}
        <main>
            <section class="my-8">
                <p class="font-extralight text-slate-900 sm:px-24 px-9 text-center">
                The reason why we strive for a good life is to make ourselves happy, away from any distortion.<br /> When you are happy, life goes smoothly. However, does our mind feel the same way too?
                </p>
            </section>
            <section class="flex justify-center">
                <Box_wclick image="" text="Sampple"/>
                <Box_wclick image="" text="Sampple"/>
                <Box_wclick image="" text="Sampple"/>
            </section>
        </main>
        
    </>
    //// Contents ////

    return rendering;
}