import './App.css';
import NavBar from './components/navBar/navBar';
import Card from './components/card/card';
import NewApp from './components/NewApp/NewApp';

function App() {
  return (
    <div>
      <NavBar
      item1='docs'
      item2='goods'
      item3='contacts'
      item4='cart'
      />
      <Card 
      url='https://flagcdn.com/w320/au.png'
      name='aus'
      capital='sydnei'
      lang='eng'
      currency='dollar'
      />
      <NewApp/>
    </div>
  );
}

export default App;
