
import  { useState } from 'react';
import Matratter from '../Menu/Matratter.tsx';
import Drycker from '../Menu/Dryck.tsx';
import Tillbehor from '../Menu/Tillbehor.tsx';
import '../assets/menu.css'


function Menu() {
  const [activeCategory, setActiveCategory] = useState('matratter'); 
  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
  };

  return (
    <div className='outer-container'>
        <div className='inner-container'>
      <h1>Meny</h1>
      <div>
        <button className='btn' onClick={() => handleCategoryChange('matratter')}>Maträtter</button>
        <button className='btn' onClick={() => handleCategoryChange('drycker')}>Drycker</button>
        <button className='btn' onClick={() => handleCategoryChange('tillbehor')}>Tillbehör</button>
      </div>    
        <div className='funky-hr-title'><hr className='funky-hr'></hr>Funky Fusion<hr className='funky-hr'></hr></div>

      {activeCategory === 'matratter' && <Matratter />}
      {activeCategory === 'drycker' && <Drycker />}
      {activeCategory === 'tillbehor' && <Tillbehor />}
      {/* <hr></hr>
      <Drycker />
      <hr></hr>
      <Tillbehor /> */}
      </div>
      
    </div>
  );
}

export default Menu;
