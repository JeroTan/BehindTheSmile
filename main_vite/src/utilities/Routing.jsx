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

import {createBrowserRouter, RouterProvider} from 'react-router-dom';

const router = createBrowserRouter([
    {
        element:<Home/>,
        path:'/'
    },
    {
        element:<Home/>,
        path:'/home'
    },
    {
        element:<Learn />,
        path:'/learn'
    },
    {
        element:<Learn1 />,
        path:'/learn/m1'
    },
    {
        element:<Learn2 />,
        path:'/learn/m2'
    },
    {
        element:<Learn3 />,
        path:'/learn/m3'
    },
    {
        element:<Learn4 />,
        path:'/learn/m4'
    },
    {
        element:<Learn5 />,
        path:'/learn/m5'
    },
    {
        element:<Learn6 />,
        path:'/learn/m6'
    },
    {
        element:<Discover />,
        path:'/discover'
    },
    {
        element:<About />,
        path:'/about'
    },
    {
        element:<NotFound />,
        path:'*'
    }
  ]);

export default ()=>{
    return  <RouterProvider router={router} />
};