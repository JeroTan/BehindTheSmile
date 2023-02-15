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
<TitleChanger title='404 Not Found'/>
<Navbar currentPage='' />

{/*Main Content*/}
<main class="relative flex justify-center w-auto mb-36 mt-20 mx-10 box-border">
    <article class="w-[62rem]">
        
    </article>
</main>
<Footer />

</>
//// Contents ////
return rendering;

}