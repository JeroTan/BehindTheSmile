import { useState } from 'react'
///-- Imports Here
import { Link } from "react-router-dom";
import Icon from './Icon.jsx';

const vrt_pageHighlight = (page)=>{
    let vrt = {
        links:{
            home:'hover:underline underline-offset-4 decoration-2 decoration-sky-400',
            learn:'hover:underline underline-offset-4 decoration-2 decoration-sky-400',
            discover:'hover:underline underline-offset-4 decoration-2 decoration-sky-400',
            about:'hover:underline underline-offset-4 decoration-2 decoration-sky-400'
        }
    };
    switch(page){
        case 'home':
            vrt.links.home = 'underline underline-offset-4 decoration-2 decoration-teal-400';
        break;
        case 'learn':
            vrt.links.learn = 'underline underline-offset-4 decoration-2 decoration-teal-400';
        break;
        case 'discover':
            vrt.links.discover = 'underline underline-offset-4 decoration-2 decoration-teal-400';
        break;
        case 'about':
            vrt.links.about = 'underline underline-offset-4 decoration-2 decoration-teal-400';
        break;
    }

    return vrt;
}

export default ({currentPage})=>{
    //// Logic Ext ////
    const {links} = vrt_pageHighlight(currentPage);

    //// Contents ////
    let rendering = <>

    <header class="fixed w-full h-20 flex items-center bg-gray-200 box-border drop-shadow-md z-40">
        <nav class="sm:flex w-full hidden flex-wrap justify-center">
            <Link to={`/home`} className={`text-decoration-none basis-1/6 text-center text-slate-800 ${links.home}`}>Home</Link>
            <Link to={`/learn`} className={`text-decoration-none basis-1/6 text-center text-slate-800 ${links.learn}`}>Learn</Link>
            <Link to={`/discover`} className={`text-decoration-none basis-1/6 text-center text-slate-800 ${links.discover}`}>Discover</Link>
            <Link to={`/about`} className={`text-decoration-none basis-1/6 text-center text-slate-800 ${links.about}`}>About</Link>
        </nav>
        <nav class="sm:hidden flex w-full justify-end px-3">
            <Icon name='bars' size='2' tailwindClass='fill-teal-400'/>
        </nav>
    </header>
    
    <div class="block w-full bg-gray-200 h-20"></div>
    
    </>
    //// Contents ////
    return rendering;
}