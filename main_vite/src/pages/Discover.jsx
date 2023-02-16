import { useState } from 'react'
//-- The Add-ons here --//
import {TitleChanger} from '../utilities/Title.jsx'
import Navbar from '../utilities/Navbar.jsx'
import Footer from '../utilities/Footer.jsx'
import Icon from '../utilities/Icon.jsx';
//-- Assets --//


export default ()=>{

//// Contents ////
let rendering = <>
<TitleChanger title='Discover'/>
<Navbar currentPage='discover' />

{/*Main Content*/}
<main class="relative flex justify-center w-auto mb-36 mt-20 mx-10 box-border">
    <article class="w-[62rem]">

        <h2 class="text-4xl font-serif text-teal-400 pb-5">Articles</h2>
        <div class="flex flex-wrap pb-20">
            <div class="md:w-4/12 w-12/12 md:pr-5">

                <div class="flex flex-wrap pb-1">
                    <div class="md:w-full w-6/12 md:pr-0 pr-5 mb-10 cursor-pointer" onClick={()=>window.open('https://www.pinerest.org/newsroom/articles/mental-health-awareness-blog/', '_blank')}>
                        <div class={`bg-sky-400 w-full aspect-square contrast-75 brightness-100`} >
                            <img class="relative w-full h-full object-cover object-center" src='https://pinerest.org/newsroom/wp-content/uploads/2021/12/Importance-of-MH-Awareness.jpg' />
                        </div>
                        <p class="break-normal font-extralight">The Importance Of Mental Health Awareness</p>
                    </div>
                    <div class="md:w-full w-6/12 md:pl-0 pl-5 cursor-pointer" onClick={()=>window.open('https://www.frontiersin.org/articles/10.3389/fpsyg.2019.00543/full', '_blank')}>
                        <div class={`bg-sky-400 w-full aspect-square contrast-75 brightness-100`} >
                            <img class="relative w-full h-full object-cover object-center" src='https://www.freecodecamp.org/news/content/images/2022/04/derick-mckinney-oARTWhz1ACc-unsplash.jpg' />
                        </div>
                        <p class="break-normal font-extralight">Understanding Anxiety Disorders</p>
                    </div>
                </div>

            </div>
            <div class="md:w-8/12 w-12/12 md:pl-24 ">
                <div class="cursor-pointer"  onClick={()=>window.open('https://www.pinerest.org/newsroom/articles/mental-health-awareness-blog/', '_blank')}>
                    <div class={`bg-sky-400 w-full aspect-square contrast-75 brightness-100`} >
                        <img class="relative w-full h-full object-cover object-center" src='https://newsinhealth.nih.gov/sites/nihNIH/files/styles/featured_media_breakpoint-large/public/2016/March/illustration-worried-man-apart-circle-friends_0.jpg?itok=BEkIrrCZ' />
                    </div>
                    <p class="break-normal font-extralight">Child and Adolescent Depression: A Review of Theories, Evaluation Instruments, Prevention Programs, and Treatments</p>
                </div>
                
            </div>
        </div>

        <h2 class="text-4xl font-serif text-teal-400 pb-5">Books to read</h2>
        <div class="flex flex-wrap md:justify-start justify-between gap-5 pb-32">
            <div class="md:w-3/12 w-5/12 cursor-pointer" onClick={()=>window.open('', '_blank')}>
                <div class={`bg-sky-400 w-full aspect-square contrast-75 brightness-100`} >
                    <img class="relative w-full h-full object-cover object-center" src='https://pinerest.org/newsroom/wp-content/uploads/2021/12/Importance-of-MH-Awareness.jpg' />
                </div>
                <p class="break-normal font-extralight">Child and Adolescent Depression: A Review of Theories, Evaluation Instruments, Prevention Programs, and Treatments</p>
            </div>
            <div class="md:w-3/12 w-5/12 cursor-pointer" onClick={()=>window.open('', '_blank')}>
                <div class={`bg-sky-400 w-full aspect-square contrast-75 brightness-100`} >
                    <img class="relative w-full h-full object-cover object-center" src='https://pinerest.org/newsroom/wp-content/uploads/2021/12/Importance-of-MH-Awareness.jpg' />
                </div>
                <p class="break-normal font-extralight">Child and Adolescent Depression: A Review of Theories, Evaluation Instruments, Prevention Programs, and Treatments</p>
            </div>
            <div class="md:w-3/12 w-5/12 cursor-pointer" onClick={()=>window.open('', '_blank')}>
                <div class={`bg-sky-400 w-full aspect-square contrast-75 brightness-100`} >
                    <img class="relative w-full h-full object-cover object-center" src='https://pinerest.org/newsroom/wp-content/uploads/2021/12/Importance-of-MH-Awareness.jpg' />
                </div>
                <p class="break-normal font-extralight">Child and Adolescent Depression: A Review of Theories, Evaluation Instruments, Prevention Programs, and Treatments</p>
            </div>
        </div>
        
        <h2 class="text-4xl font-serif text-teal-400 pb-5">Videos to watch</h2>
        <div class="flex flex-wrap gap-5">
            <div class="sm:w-4/12 w-full cursor-pointer" onClick={()=>window.open('', '_blank')}>
                <div class={`bg-sky-400 w-full aspect-video contrast-75 brightness-100`} >
                    <img class="relative w-full h-full object-cover object-center" src='https://pinerest.org/newsroom/wp-content/uploads/2021/12/Importance-of-MH-Awareness.jpg' />
                </div>
                <p class="break-normal font-extralight">Child and Adolescent Depression: A Review of Theories, Evaluation Instruments, Prevention Programs, and Treatments</p>
            </div>
            <div class="sm:w-4/12 w-full cursor-pointer" onClick={()=>window.open('', '_blank')}>
            <div class={`bg-sky-400 w-full aspect-video contrast-75 brightness-100`} >
                    <img class="relative w-full h-full object-cover object-center" src='https://pinerest.org/newsroom/wp-content/uploads/2021/12/Importance-of-MH-Awareness.jpg' />
                </div>
                <p class="break-normal font-extralight">Child and Adolescent Depression: A Review of Theories, Evaluation Instruments, Prevention Programs, and Treatments</p>
            </div>
        </div>

    </article>

</main>
<Footer />

</>
//// Contents ////
return rendering;

}