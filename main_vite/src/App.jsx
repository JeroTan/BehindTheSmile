import { useState } from 'react'
import { Routes, Route} from 'react-router-dom';
//import reactLogo from './assets/react.svg' How to import an image

//-- Import My Components --//
import {Routing} from './utilities/Routing.jsx';

export default ()=>
<>
  <Routes>
  {Object.keys(Routing()).map( (item)=> 
    <>
      <Route path={Routing()[item]['path']} element={Routing()[item]['link']} />
    </>
  )}
  </Routes>
</>;

/*
export default ()=>
<>
  <Routes>
    <Route path={Routing().home['path']} element={Routing().home['link']} />
  </Routes>
</>;
*/