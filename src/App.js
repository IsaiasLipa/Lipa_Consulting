import React from 'react'
import Main from './components/MainComponent'
import {BrowserRouter} from 'react-router-dom'

import Navbar from './components/Navbar'

function App() {
  return (
    
    <div className="App" style={{"height": "500hv"}} >
      
     <BrowserRouter>
     
     <Main/>
     </BrowserRouter>
      
    </div>
  );
}

export default App;
