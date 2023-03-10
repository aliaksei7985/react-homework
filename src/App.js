import './App.css';
import NavBar from './components/navBar/navBar';
import Card from './components/card/card';
import NewApp from './components/NewApp/NewApp';
import Lang from './components/languages/lang';
import Counter from './components/counter/counter';
import LoginForm from './components/Login/Login';
import Lesson221 from './components/221lesson/Lesson221';

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
  const data = countries.map(elem => <Card key={elem.id} data={elem}></Card>);  
  return (
    <div>
      <NavBar
      item1 = 'docs'
      item2 = 'goods'
      item3 = 'contacts'
      item4 = 'cart'
      >
        <LoginForm />
      </NavBar>
      <div className='wrapper'>
        {data}
      </div>
      <NewApp/>
      <Lang/>
      <Counter />
      <Lesson221 />
    </div>
  );
}

export default App;
