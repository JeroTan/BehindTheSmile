import { useState } from 'react'
//-- The Add-ons here --//
import {TitleChanger} from '../utilities/Title.jsx'
import Navbar from '../utilities/Navbar.jsx'
import Footer from '../utilities/Footer.jsx'
import Icon from '../utilities/Icon.jsx';
//-- Assets --//
import Title from '../utilities/article_components/A_title.jsx';
import Paragraph from '../utilities/article_components/A_paragraph.jsx';
import Image from '../utilities/article_components/A_image.jsx';
import Small from '../utilities/article_components/A_small.jsx';
import Empha from '../utilities/article_components/A_emp_pharagraph.jsx';
import Link from '../utilities/article_components/A_linkbutton.jsx';
import img_learn1_3 from '../assets/images/learn_1_3.jpg';
import img_learn1_4 from '../assets/images/learn_1_4.png';


let content = [];
content[0] = <>
    To get started, let us know first what health is. <span class="text-teal-400">Health</span> is a state of complete well-being and can be referred to as the positive state. Now when we talk about being healthy, it can be meant as the absence of illness and/or disease. Having these kinds of illnesses will affect your "health" significantly. Like in your favorite RPG games, as you take more damage (illness) your HP (Health) decreases. Health begins and ends with you, from your physical body to your soul. Generally, health is usually based on our physical outlook. People will notice if you are feeling unwell because it shows directly from your surface appearance. In such circumstances, you may be considered <span class="text-teal-400">not healthy</span> anymore. Regardless of this, the thing that is hiding from everyone else is your health within you, your <span class="text-teal-400">mental health</span>. Even you yourself sometimes do not know if you are still okay or not. If you are familiar with RPG games, there are usually two kinds of attacks, one is magical, and the other is physical. Physical attacks are usually hindered by the characters defense stats, which is very straightforward to control and defend from enemies attacks. However, a magical attack is like your mental health. It comes with many variations, is not straightforward, and is usually not affected by the character's defense stats. The types of techniques to withstand the attack are minimal, just like how many people are having a hard time coping up with their mental health issues. Mental health is a no-joke medical condition that needs to be aware of and controlled.
</>
content[1] = <>
    <strong>TLDR</strong> Health is generally referred to as a state of complete well-being, including physical and mental health. Mental health, on the other hand, is a health that is not visible to other people. Many people are having a hard time coping with mental health. That is why it requires more attention and management.
</>
content[2] = <>
Other instititution like WHO (World Health Organization) define mental health as "state of well-being in which the individual realizes his or her own abilities, can cope with the normal stresses of life, can work productively and fruitfully, and is able to make a contribution to his or her community". The illness that disturb your mental healthiness is the mental disorder. Mental health disorder according to them can make your body vulnerable to other dieases as it weakens your immune system. It can also result to an indirect physical injury to yourselves. <br /><br />The next step of this article will explains why these disorder happens in our body and what causes it to prolong in our life.
</>

export default ()=>{

//// Contents ////
let rendering = <>
<TitleChanger title='Learn | Defining Mental Health'/>
<Navbar currentPage='learn' />

{/*Main Content*/}
<main class="relative flex justify-center w-auto mb-36 mt-20 mx-10 box-border">
    <article class="w-[62rem]">
        <Title content="Defining Mental Health" pb="pb-0"/>
        <Small content="GENESYS | February 2023"/>
        <div class="pb-10"></div>
        <Image content={img_learn1_4} />

        <div class="pb-10"></div>
        <Paragraph content={content[0]} />

        <div class="pb-10"></div>
        <Empha content={content[1]} />
        <div class="pb-10"></div>

        <div class="box-border pb-5 w-full flex flex-wrap">
            <Image content={img_learn1_3} w="w-4/12" aspect="aspect-square"/>
            <Paragraph content={content[2]} w="w-8/12 md:pl-5 pl-0"/>
        </div>

        <Link link={[false, '/learn/m2']} />
    </article>
</main>
<Footer />

</>
//// Contents ////
return rendering;

}