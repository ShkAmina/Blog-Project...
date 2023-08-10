import React from 'react'
import StoredData from './Components/StoredData'
import { BrowserRouter} from 'react-router-dom'
import Linkcomp from './Components/LinkComp'
const App = () => {

  return (
    <div >
      <BrowserRouter>
        

        <StoredData />
      </BrowserRouter>
    </div>
  )
}

export default App