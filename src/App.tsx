import './App.css'
import Kundkorg from './Components/Kundkorg/Kundkorg.tsx';
import Menu from './Components/Menu/menu.tsx';
import AnställdaOrdrar from './Components/anställda/AnställdaOrdrar.tsx';
import { EmployeeView } from './routes/employee-view.jsx'

function App() {

  return (
    <>
      {/* <AnställdaOrdrar/> */}
      {/* <Menu/> */}
     <EmployeeView />
     {/* <Kundkorg/> */}
    </>
  )
}

export default App
