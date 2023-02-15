import { useState } from 'react'
///-- Imports Here
import Icon from '../Icon.jsx';
///-- Assets Here

export default ({content, w='w-full'}) =>{
    return <>
    <div class={w!='w-full'?`md:${w} w-full`:`w-full`}>
        <p class="break-normal font-extralight">
            {content}
        </p>
    </div>  
    </>
}