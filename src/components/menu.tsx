
import  { useState } from 'react';
import Matratter from './Matratter';
import Drycker from './Dryck.tsx';
import Tillbehor from './Tillbehor';
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
        <button onClick={() => handleCategoryChange('matratter')}>Maträtter</button>
        <button onClick={() => handleCategoryChange('drycker')}>Drycker</button>
        <button onClick={() => handleCategoryChange('tillbehor')}>Tillbehör</button>
      </div>
      {activeCategory === 'matratter' && <Matratter />}
      {activeCategory === 'drycker' && <Drycker />}
      {activeCategory === 'tillbehor' && <Tillbehor />}
      </div>
    </div>
  );
}

export default Menu;
