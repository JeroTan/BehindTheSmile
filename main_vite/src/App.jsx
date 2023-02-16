import { useState } from 'react'
import {Routes, Route, createBrowserRouter, RouterProvider} from 'react-router-dom';
//import reactLogo from './assets/react.svg' How to import an image

//-- Import My Components --//
import Routing from './utilities/Routing.jsx';

export default ()=>
<>
    <Routing />
</>;

/*
export default ()=>
<>
  <Routes>
    <Route path={Routing().home['path']} element={Routing().home['link']} />
  </Routes>
</>;
*/