
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Menu from './Components/Menu/menu'
import Kundkorg from './Components/Kundkorg/Kundkorg'
import StartPage from './routes/Startpage/Startpage'
import Kvitto from './Components/Kvitto/Kvitto'

import Betallning from './Components/betallning/Betallning'
function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
     <Route  index element = {<StartPage/>}/> 
     <Route path='/startpage'element = {<StartPage/>}/> 
     <Route path='/menu' element= {<Menu/>}/> 
     <Route path='/kundkorg' element= {<Kundkorg/>}/> 
     <Route path='/kvitto' element= {<Kvitto/>}/> 
     <Route path='/betallning' element= {<Betallning />}/> 

      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
