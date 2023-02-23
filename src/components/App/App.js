import './App.css';

function App({item1, item2, item3, item4}) {
  return (
    <menu className="App">
      <li><a className='item' href='#'>{item1}</a></li>
      <li><a className='item' href='#'>{item2}</a></li>
      <li><a className='item' href='#'>{item3}</a></li>
      <li><a className='item' href='#'>{item4}</a></li>
    </menu>
  );
}

export default App;
