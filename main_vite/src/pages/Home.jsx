import { useState } from 'react'
//-- The Add-ons here --//
import {TitleChanger} from '../utilities/Title.jsx'
import Navbar from '../utilities/Navbar.jsx'

export default ()=>{
    
    //// Contents ////
    let rendering = <>
        <TitleChanger title='Home'/>
        <Navbar />
        <div>Hello World</div>

    </>
    //// Contents ////

    return rendering;
}