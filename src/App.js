import './App.css';
import Card from './components/card/card';

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
    <Card data={countries[0]}></Card>
  );
}

export default App;
