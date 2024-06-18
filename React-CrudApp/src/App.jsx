import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Create from './component/Create'
import Read from './component/Read'
import Updata from './component/Updata'

function App() {

  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route exact path='' element={<Create />} />
          <Route  exact path='/read' element={<Read />} />
          <Route exact path='/updata' element={<Updata />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
