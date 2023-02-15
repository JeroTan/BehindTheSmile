import { useState } from 'react'
///-- Imports Here
import Icon from '../Icon.jsx';
///-- Assets Here

export default ({content, pb=false}) =>{
    pb = pb!=false?pb:'pb-10';
    return <>
    <div>
        <h1 class={`text-5xl font-serif ${pb} text-teal-400`}>{content}</h1>
    </div>  
    </>
}