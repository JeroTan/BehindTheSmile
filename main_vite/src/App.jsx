import { useState } from 'react'
import { Routes, Route} from 'react-router-dom';
//import reactLogo from './assets/react.svg' How to import an image

//-- Import My Components --//
import {Routing} from './utilities/Routing.jsx';

function App() {

  const rendering = <>
  <h2></h2>
    <Routes>
      <Route path={Routing().home['path']} element={Routing().home['link']} />
    </Routes>
  </>

  return rendering;
}

export default App
