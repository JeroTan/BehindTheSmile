import { useState } from 'react'
///-- Imports Here
import Icon from '../Icon.jsx';
///-- Assets Here

export default ({content, w='w-full'}) =>{
    return <>
    <div class={'flex flex-wrap '+(w!='w-full'?`md:w-full ${w}`:`w-full`)}>
        <div class="w-1/12">
            <div class="h-full w-[.3rem] bg-teal-400">
            </div>
        </div>
        <div class="w-11/12">
            <p class="text-lg italic break-normal font-extralight">
                {content}
            </p>
        </div>
        
    </div>  
    </>
}