import { useState } from 'react'
//-- The Add-ons here --//
import {TitleChanger} from '../utilities/Title.jsx'
import Navbar from '../utilities/Navbar.jsx'
import Footer from '../utilities/Footer.jsx'
//-- Assets Here --//
import img_homeBanner from '../assets/images/pl_home.jpg';

const Box_wclick = ({image, text, link})=>{
    return <>
        <div class="relative w-80 box-border aspect-square cursor-pointer" onClick={()=>{location.href=link}}>
            <div class="absolute w-full h-full contrast-75 brightness-75 hover:brightness-[0.30] ease-in">
                <img class="relative w-full h-full object-cover object-center" src={image} />
            </div>
            <div class="absolute w-full h-full box-border flex justify-center items-center pointer-events-none">
                <div class="bg-white p-3">
                    <h4 class="font-light font-serif text-xl text-center text-teal-500">
                        {text}
                    </h4>
                </div>
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
            <div class="absolute w-full h-full contrast-75 brightness-75 bg-teal-400">
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
            <section class="my-14">
                <p class="font-extralight text-slate-900 sm:px-24 px-9 text-center">
                The reason why we strive for a good life is to make ourselves happy, away from any distortion.<br /> When you are happy, life goes smoothly. However, does our mind feel the same way too?
                </p>
            </section>
            <section class="flex justify-center flex-wrap gap-5 mx-10  ">
                <Box_wclick image="https://images.unsplash.com/photo-1604480132736-44c188fe4d20?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1980&q=80" text="What is Mental Heath?" link="/learn/m1"/>
                <Box_wclick image="https://images.unsplash.com/photo-1554188572-9d184b57d8e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80" text="Common Illnesses" link="/learn/m3"/>
                <Box_wclick image="https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" text="Preventive Meassures" link="/learn/m4"/>
            </section>
            <section class="block relative w-auto my-36 mx-10 box-border">
                <div class="flex justify-center w-full cursor-pointer" onClick={()=>{location.href='/learn/m2'}}>
                    <div class="w-[62rem] aspect-video bg-teal-400 overflow-hidden">
                        <img class="relative w-full h-full object-cover object-center" src={img_homeBanner} />
                    </div>
                </div>
                <article class="flex justify-center w-full">
                    <div class="w-[62rem] px-5 pt-10 cursor-pointer" onClick={()=>{location.href='/learn/m2'}}>
                        <h4 class="text-2xl font-serif pb-2 text-teal-400">Why we feel sadness?</h4>
                        <p class="break-normal font-extralight">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim illo molestiae nulla, ducimus veniam amet architecto asperiores quibusdam praesentium sunt, commodi iste voluptas illum repudiandae numquam natus vitae repellendus facere?e
                        </p>
                    </div>
                </article>
            </section>
            <section class="block relative w-auto my-36 mx-10 box-border">
                <div class="flex justify-center w-full cursor-pointer" onClick={()=>{location.href='/learn/m6'}}>
                    <div class="w-[62rem] aspect-video bg-teal-400 overflow-hidden">
                        <img class="relative w-full h-full object-cover object-center" src={img_homeBanner} />
                    </div>
                </div>
                <article class="flex justify-center w-full">
                    <div class="w-[62rem] px-5 pt-10 cursor-pointer" onClick={()=>{location.href='/learn/m6'}}>
                        <h4 class="text-2xl font-serif pb-2 text-teal-400">Overcome the madness, and preserve the well being</h4>
                        <p class="break-normal font-extralight">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim illo molestiae nulla, ducimus veniam amet architecto asperiores quibusdam praesentium sunt, commodi iste voluptas illum repudiandae numquam natus vitae repellendus facere?e
                        </p>
                    </div>
                </article>
            </section>
        </main>

        <Footer />
        
    </>
    //// Contents ////

    return rendering;
}