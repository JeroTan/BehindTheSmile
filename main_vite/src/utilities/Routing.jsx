import { useState } from 'react'

//-- The component pages --//
import Home from '../pages/Home.jsx';
import Learn from '../pages/Learn.jsx';

export const Routing = ()=>{
    return {
        home:{
            link:<Home/>,
            path:'/'
        },
        home2:{
            link:<Home/>,
            path:'/home'
        },
        learn:{
            link:<Learn />,
            path:'/learn'
        },
        discover:{
            link:'./pages/Discover.jsx',
            path:'/discover'
        },
        about:{
            link:'<./pages/About.jsx>',
            path:'/about'
        },
        e_404:{
            link:'.pages/NotFound.jsx',
            path:'*'
        }
    }
};