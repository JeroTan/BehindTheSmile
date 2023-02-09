import { useState } from 'react'

//-- The component pages --//
import Home from '../pages/Home.jsx';

export const Routing = ()=>{
    return {
        home:{
            link:<Home/>,
            path:'/'
        },
        about:{
            link:'./pages/About.jsx',
            path:'/about'
        },
        learn:{
            link:'./pages/Learn.jsx',
            path:'/learn'
        },
        discover:{
            link:'./pages/Discover.jsx',
            path:'/discover'
        },
        e_404:{
            link:'.pages/NotFound.jsx',
            path:'*'
        }
    }
};