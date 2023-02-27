import './App.css';
import NavBar from './components/navBar/navBar';
import Card from './components/card/card';
import NewApp from './components/NewApp/NewApp';
import Lang from './components/languages/lang';

const countries = [{
  name: 'Norway',
  capital: 'Oslo',
  flags: 'https://flagcdn.com/w320/no.png',
  languages: 'Norwegian',
  currencies: 'Norwegian crone',
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
  const data = countries.map(elem => <Card key={elem.id} data={elem}></Card>);
  return (
    <div>
      <NavBar
      item1='docs'
      item2='goods'
      item3='contacts'
      item4='cart'
      />
      {data}
      <NewApp/>
      <Lang/>
    </div>
  );
}

export default App;
