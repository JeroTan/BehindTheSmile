import { useState } from 'react'
///-- Imports Here
import Icon from '../Icon.jsx';
///-- Assets Here

export default ({content, w=false, aspect=false}) =>{

    w = w==false?'w-full':`md:${w} w-full`;
    aspect = aspect==false?'aspect-video':aspect;
    console.log(w)
    let returner = <>
    <div class={w}>
        <div class={`bg-sky-400 ${aspect} w-full`} >
            <img class="relative w-full h-full object-cover object-center" src={content} />
        </div>
    </div>  
    </>
    return returner;
}