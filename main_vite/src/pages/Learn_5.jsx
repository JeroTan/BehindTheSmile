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
import img_learn5_1 from '../assets/images/learn_5_1.jpg';
import img_learn5_2 from '../assets/images/learn_5_2.jpg';


export default ()=>{

//// Contents ////
let rendering = <>
<TitleChanger title='Learn | Spreading Awareness'/>
<Navbar currentPage='learn' />

{/*Main Content*/}
<main class="relative flex justify-center w-auto mb-36 mt-20 mx-10 box-border">
    <article class="w-[62rem]">
        <Link link={['/learn/m4', '/learn/m6']} />
    </article>
</main>
<Footer />

</>
//// Contents ////
return rendering;

}