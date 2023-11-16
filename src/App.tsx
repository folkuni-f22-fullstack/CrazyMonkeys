
import Menu from './Components/Menu/menu'
import Kundkorg from './Components/Kundkorg/Kundkorg'
import { useContext } from "react"
import './App.css'
import { EmployeeView } from './routes/employee-view'
import StartPage from './routes/Startpage/Startpage'
import { Delivery } from './Routes/Delivery'

import { FunkyContext } from "./ContextRoot"
function App() {

  const {isLoggedIn} = useContext(FunkyContext)

  return (
    <>

         
    {
      isLoggedIn ? <EmployeeView /> : <StartPage/>
    }
      <Menu />
      <Kundkorg/>
      <Delivery />
    </>
  )
}

export default App
