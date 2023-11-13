import './App.css'
import Kundkorg from './Components/Kundkorg/Kundkorg.tsx';
import Menu from './Components/Menu/menu.tsx';
import AnställdaOrdrar from './Components/anställda/AnställdaOrdrar.tsx';

function App() {

  return (
    <>
      <AnställdaOrdrar/>
      <Menu/>
    </>
  )
}

export default App
