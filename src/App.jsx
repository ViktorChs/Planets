import React from "react"
import { Route, Routes , Link} from "react-router-dom"

import Home from './Home'
import Crew from './Crew'
import Destination from './Destination'
import Technology from './Technology'



function App() {
return(
    <div>

      <Routes>
        <Route path='/' element={ <Home />}  />
        <Route path='/Crew' element={ <Crew />} />
        <Route path='/Destination' element={ <Destination />} />
        <Route path='/Technology' element={ <Technology />} />
      </Routes> 
      </div>
)
}

export default App



