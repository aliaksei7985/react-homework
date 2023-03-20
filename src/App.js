import { Routes, Route, Link } from 'react-router-dom';

import './App.css';
import Goods from './components/Goods/Goods';
import Discount from './components/Discount/Discount';
import Contacts from './components/Contacts/Contacts'

function App() {
  return (
    <>
      <header>
        <menu className="App">
          <Link to='goods'><a className='item' href='#'>Goods</a></Link>
          <Link to='discount'><a className='item' href='#'>Discount</a></Link>
          <Link to='contacts'><a className='item' href='#'>Contacts</a></Link>
          <li><a className='item' href='#'>Cart</a></li>
        </menu>
      </header>

    <Routes>
      <Route path='/goods' element={<Goods/>} />
      <Route path='/discount' element={<Discount/>} />
      <Route path='/contacts' element={<Contacts/>} />
    </Routes>
    </>
  )
}

export default App;