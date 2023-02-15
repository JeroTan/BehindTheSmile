import { useState } from 'react'
//-- The Add-ons here --//
import {TitleChanger} from '../utilities/Title.jsx'
import Navbar from '../utilities/Navbar.jsx'
import Footer from '../utilities/Footer.jsx'
import Icon from '../utilities/Icon.jsx';
import './Learn.css';
//-- Assets --//
import img_learn1_1 from '../assets/images/learn_1_1.jpeg';
import img_learn1_2 from '../assets/images/learn_1_2.jpg';
import img_learn2_1 from '../assets/images/learn_2_1.jpg';
import img_learn3_1 from '../assets/images/learn_3_1.jpg';
import img_learn4_1 from '../assets/images/learn_4_1.jpeg';
import img_learn5_1 from '../assets/images/learn_5_1.jpg';
import img_learn5_2 from '../assets/images/learn_5_2.jpg';

export default ()=>{

    //// Contents ////
    let rendering = <>
        <TitleChanger title='Learn'/>
        <Navbar currentPage='learn' />
        {/*Main Content*/}
        <main>
            <section class="relative flex items-center justify-center py-14 bg-gray-100 box-border">
                <div class="flex flex-wrap w-[65rem] mx-10">
                    <div class="w-1/12">
                        <div >
                            <Icon name="bulb" size="5" tailwindClass="stroke-teal-400"/>
                        </div>
                    </div>
                    <div class="lg:w-11/12 w-full box-border pl-3">
                        <h5 class="text-lg font pb-2 tracking-wide">
                            Having vital information is the key to everything. By knowing what mental health is, you can definitely assess your life at ease. Controlling the triggers of your emotions, a journey towards inner peace begins and having a mental well-being. Join us as we delve into the world of mental health.
                        </h5>
                    </div>
                    
                </div>
                
            </section>

            <section class="relative flex justify-center w-auto mb-36 mt-20 mx-10 box-border">
                <div class="w-[62rem]">
                    {/*Module 1*/}
                    <article class="w-full flex flex-wrap">
                        <div class="w-1/12 overflow-hidden box-border">
                            <div>
                                <Icon name="donut1" size='.3' tailwindClass='fill-teal-400' />
                            </div>
                            <div class="h-full w-[30px] flex justify-center box-border">
                                <div class=" relative h-full w-[8px] bg-teal-400">
                                </div>
                            </div>
                        </div>
                        <div class="w-11/12 overflow-hidden hover:bg-gray-200 cursor-pointer border-box p-3 rounded-lg mb-5" onClick={()=>{location.href="/learn/m1"}}>
                            <h3 class="text-3xl font-serif pb-2 text-teal-400">1. Defining Mental Health</h3>
                            <p class="break-normal font-extralight">
                                Learning about mental health is a powerful step in taking care of yourself and those around you. Mental health is often an overlooked aspect of our well-being, but little we know that it is just as important as physical health. In this first article, we will look further back to history and determine the importance of educating ourselves about mental health. 
                            </p>
                            <a class="text-sm break-normal font-extralight underline underline-offset-2 decoration-1">Learn More</a>
                            <div class="flex flex-start flex-wrap mt-3 gap-3">
                                <div class="bg-sky-400 w-2/12 aspect-square">
                                    <img class="relative w-full h-full object-cover object-center" src={img_learn1_1} />
                                </div>
                                <div class="bg-sky-400 w-2/12 aspect-square">
                                    <img class="relative w-full h-full object-cover object-center" src={img_learn1_2} />
                                </div>
                            </div>
                        </div>
                    </article>
                    {/*Module 2*/}
                    <article class="w-full flex flex-wrap">
                        <div class="w-1/12 overflow-hidden box-border">
                            <div>
                                <Icon name="donut2" size='.3' tailwindClass='fill-teal-400' />
                            </div>
                            <div class="h-full w-[30px] flex justify-center box-border">
                                <div class=" relative h-full w-[8px] bg-teal-400">
                                </div>
                            </div>
                        </div>
                        <div class="w-11/12 overflow-hidden hover:bg-gray-200 cursor-pointer border-box p-3 rounded-lg mb-5" onClick={()=>{location.href="/learn/m2"}}>
                            <h3 class="text-3xl font-serif pb-2 text-teal-400">2. Why We Experience It?</h3>
                            <p class="break-normal font-extralight">
                                Ever since we lived in this world, we are demanded by expectations and responsibilities. And as we grow older, these things piled up into a mountain of oblivion that you yourselves cannot control anymore leading up into recursive state of mental problems. Unfortunately, mental health issues are reckoning in today's fast-paced and stressful world. From depression to more severe conditions like schizophrenia. In this article, we will uncover the root of our sadness and why it occurs so frequently.
                            </p>
                            <a class="text-sm break-normal font-extralight underline underline-offset-2 decoration-1">Learn More</a>
                            <div class="flex flex-start flex-wrap mt-3 gap-3">
                                <div class="bg-sky-400 w-2/12 aspect-square">
                                    <img class="relative w-full h-full object-cover object-center" src={img_learn2_1} />
                                </div>
                            </div>
                        </div>
                    </article>
                    {/*Module 3*/}
                    <article class="w-full flex flex-wrap">
                        <div class="w-1/12 overflow-hidden box-border">
                            <div>
                                <Icon name="donut2" size='.3' tailwindClass='fill-teal-400' />
                            </div>
                            <div class="h-full w-[30px] flex justify-center box-border">
                                <div class=" relative h-full w-[8px] bg-teal-400">
                                </div>
                            </div>
                        </div>
                        <div class="w-11/12 overflow-hidden hover:bg-gray-200 cursor-pointer border-box p-3 rounded-lg mb-5" onClick={()=>{location.href="/learn/m3"}}>
                            <h3 class="text-3xl font-serif pb-2 text-teal-400">3. Common Illnesses</h3>
                            <p class="break-normal font-extralight">
                                Mental health is a crucial aspect of overall wellness and can greatly impact our daily lives. Mental health issues on the other hand varies between people and other factors that affecting them like environment, social status, financial situation etc. It could be simple like having a bad day or having a whole nation army pressing your life. In this article, we only coveer: Depression, Obsessive-compulsive disorder, Panic Disorder and Generalized Anxiety Disorder. There are many other ones that are complex like the schizophrenia, but that is for another story.
                            </p>
                            <a class="text-sm break-normal font-extralight underline underline-offset-2 decoration-1">Learn More</a>
                            <div class="flex flex-start flex-wrap mt-3 gap-3">
                                <div class="bg-sky-400 w-5/12 aspect-video">
                                    <img class="relative w-full h-full object-cover object-center" src={img_learn3_1} />
                                </div>
                            </div>
                        </div>
                    </article>
                    {/*Module 4*/}
                    <article class="w-full flex flex-wrap">
                        <div class="w-1/12 overflow-hidden box-border">
                            <div>
                                <Icon name="donut2" size='.3' tailwindClass='fill-teal-400' />
                            </div>
                            <div class="h-full w-[30px] flex justify-center box-border">
                                <div class=" relative h-full w-[8px] bg-teal-400">
                                </div>
                            </div>
                        </div>
                        <div class="w-11/12 overflow-hidden hover:bg-gray-200 cursor-pointer border-box p-3 rounded-lg mb-5" onClick={()=>{location.href="/learn/m4"}}>
                            <h3 class="text-3xl font-serif pb-2 text-teal-400">4. Medication and Preventive Measures</h3>
                            <p class="break-normal font-extralight">
                                Humans will always seek healing for the good of their life, but there will be times that we are not getting attention and help we needed and ended up killing ourselves. Is there a cure? Can I have it ASAP? Well, in this article, we will dive in the common practices and discipline that will definitely help us assess our mental health issues. A quick disclaimer that this is not a replacement for professional consultation from a real doctor. It is recommended to always seek professionals first.
                            </p>
                            <a class="text-sm break-normal font-extralight underline underline-offset-2 decoration-1">Learn More</a>
                            <div class="flex flex-start flex-wrap mt-3 gap-3">
                                <div class="bg-sky-400 w-2/12 aspect-square">
                                    <img class="relative w-full h-full object-cover object-center" src={img_learn4_1} />
                                </div>
                            </div>
                        </div>
                    </article>
                    {/*Module 5*/}
                    <article class="w-full flex flex-wrap">
                        <div class="w-1/12 overflow-hidden box-border">
                            <div>
                                <Icon name="donut2" size='.3' tailwindClass='fill-teal-400' />
                            </div>
                            <div class="h-full w-[30px] flex justify-center box-border">
                                <div class=" relative h-full w-[8px] bg-teal-400">
                                </div>
                            </div>
                        </div>
                        <div class="w-11/12 overflow-hidden hover:bg-gray-200 cursor-pointer border-box p-3 rounded-lg mb-5" onClick={()=>{location.href="/learn/m5"}}>
                            <h3 class="text-3xl font-serif pb-2 text-teal-400">5. Spreading Awareness</h3>
                            <p class="break-normal font-extralight">
                                Having a good life is not about having good stuffs all by yourselves. Though it is good for some situations that you have edge on something, but keep in mind that as you grow, society needs to grow too. Good life also happen when you see the goodness from other people and later you will experienced their greatness too. In this article, you will see the core of having one society becomes positive about their living. We will contribute to the growing world of fast-paced environment while keeping our mental well-being intact.
                            </p>
                            <a class="text-sm break-normal font-extralight underline underline-offset-2 decoration-1">Learn More</a>
                            <div class="flex flex-start flex-wrap mt-3 gap-3">
                                <div class="bg-sky-400 w-2/12 aspect-square">
                                    <img class="relative w-full h-full object-cover object-center" src={img_learn5_1} />
                                </div>
                                <div class="bg-sky-400 w-2/12 aspect-square">
                                    <img class="relative w-full h-full object-cover object-center" src={img_learn5_2} />
                                </div>
                            </div>
                        </div>
                    </article>
                    {/*Module 6*/}
                    <article class="w-full flex flex-wrap">
                        <div class="w-1/12 overflow-hidden box-border">
                            <div>
                                <Icon name="donut2" size='.3' tailwindClass='fill-teal-400' />
                            </div>
                            <div class="h-full w-[30px] flex justify-center box-border">
                                <div class=" relative h-full w-[8px] bg-teal-400">
                                </div>
                            </div>
                        </div>
                        <div class="w-11/12 overflow-hidden hover:bg-gray-200 cursor-pointer border-box p-3 rounded-lg mb-5" onClick={()=>{location.href="/learn/m6"}}>
                            <h3 class="text-3xl font-serif pb-2 text-teal-400"><span class="relative myNew">6. Testimony of Others</span></h3>
                            <p class="break-normal font-extralight">
                                For the last part, we will see an interview video of a person currently going through one of the most common mental health disorders, depression, and how this person manages it. By seeing others do good in their lives we are also motivated to do the same thing.
                            </p>
                            <a class="text-sm break-normal font-extralight underline underline-offset-2 decoration-1">Learn More</a>
                            <div class="flex flex-start flex-wrap mt-3 gap-3">
                                <div class="relative bg-sky-400 w-2/12 aspect-video">
                                    <div class="absolute w-full h-full flex justify-center items-center">
                                        <Icon name="play" size='3' tailwindClass='fill-teal-400' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </article>
                    {/*Final Message*/}
                    <article class="w-full flex justify-center mt-10">
                        <a href="#" class="text-lg break-normal text-teal-400 hover:text-sky-400 hover:underline decoration-4 underline-offset-4 duration-150">Back To Top</a>
                    </article>
                    
                </div>
            </section>

        </main>

        <Footer />
        
    </>
    //// Contents ////

    return rendering;
}