import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
import reportWebVitals from './reportWebVitals';
import NewApp from './components/NewApp/NewApp';
import Card from './components/card/card';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App
      item1='docs'
      item2='goods'
      item3='contacts'
      item4='cart'
      />
    <NewApp/>
    <Card 
      url='https://flagcdn.com/w320/au.png'
      name='aus'
      capital='sydnei'
      lang='eng'
      currency='dollar'
      />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
