
import Menu from './Components/Menu/menu'
import Kundkorg from './Components/Kundkorg/Kundkorg'
import { useContext } from "react"
import Kvitto from "./Components/Kvitto/Kvitto.tsx";


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
      <Kvitto/>
    </>
  )
}

export default App
