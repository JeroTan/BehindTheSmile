import { useState } from 'react'

//-- The component pages --//
import Home from '../pages/Home.jsx';
import Learn from '../pages/Learn.jsx';
import Learn1 from '../pages/Learn_1.jsx';
import Learn2 from '../pages/Learn_2.jsx';
import Learn3 from '../pages/Learn_3.jsx';
import Learn4 from '../pages/Learn_4.jsx';
import Learn5 from '../pages/Learn_5.jsx';
import Learn6 from '../pages/Learn_6.jsx';
import About from '../pages/About.jsx';
import Discover from '../pages/Discover.jsx';
import NotFound from '../pages/NotFound.jsx';

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
        learn1:{
            link:<Learn1 />,
            path:'/learn/m1'
        },
        learn2:{
            link:<Learn2 />,
            path:'/learn/m2'
        },
        learn3:{
            link:<Learn3 />,
            path:'/learn/m3'
        },
        learn4:{
            link:<Learn4 />,
            path:'/learn/m4'
        },
        learn5:{
            link:<Learn5 />,
            path:'/learn/m5'
        },
        learn6:{
            link:<Learn6 />,
            path:'/learn/m6'
        },
        discover:{
            link:<Discover />,
            path:'/discover'
        },
        about:{
            link:<About />,
            path:'/about'
        },
        e_404:{
            link:<NotFound />,
            path:'*'
        }
    }
};