import { useState } from 'react'
///-- Imports Here
import Icon from '../Icon.jsx';
///-- Assets Here

export default ({link = [false, false]}) =>{
    let linktags = [];
    if(link[0] != false){
        linktags[0] = <>
            <a class="p-4 py-2 my-2 bg-slate-200 text-teal-500" href={link[0]}>Prev</a>
        </>
    }
    else
        linktags[0] = null;

    if(link[1] != false){
        linktags[1] = <>
            <a class="p-4 py-2 my-2 bg-teal-400 text-slate-100" href={link[1]}>Next</a>
        </>
    }
    else
        linktags[1] = null;


    return <>
    <div class={`w-full flex flex-wrap justify-end gap-2`}>
        <div class="">
            {linktags[0]}
        </div>
        <div class="">
            {linktags[1]}
        </div>
    </div>  
    </>
}


{/*<button type="button" class="relative bg-slate-900 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 text-sm text-white font-semibold h-12 px-6 rounded-lg flex items-center dark:bg-slate-700 dark:hover:bg-slate-600 pointer-events-auto">Show more...</button>*/}