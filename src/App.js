import { Routes, Route, Link } from 'react-router-dom';

import './App.css';
import Card from './components/card/card';
import InputValue from './components/InputValue/InputValue';

const countries = [{
  name: 'Oslo',
  capital: 'Norway',
  flags: 'https://flagcdn.com/w320/no.png',
  languages: 'Norwegian',
  currencies: 'crone',
  id: 1,
},
{
  name: 'Italy',
  capital: 'Rome',
  flags: 'https://flagcdn.com/w320/it.png',
  languages: 'Italy',
  currencies: 'euro',
  id: 2,
},
]



function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Card data={countries[1]} />}/>
      </Routes>
      <Routes>
        <Route path='/#' element={<InputValue />}/>
      </Routes>
    </>
  );
}

export default App;
