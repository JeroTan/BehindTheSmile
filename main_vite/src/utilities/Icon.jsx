import { useState } from 'react'

export default ({name, size=1, tailwindClass=''})=>{
    switch(name){
        case 'bars':
            return <svg xmlns="http://www.w3.org/2000/svg" width={(size*0.88)+'em'} height={(size*1)+'em'} viewBox="0 0 448 512"><path class={tailwindClass} d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path></svg>
        break;
        default:
            return null;
    }
}