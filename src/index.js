import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/App';
import MarvelServices from './services/marvelServices';
import './style/style.scss';

const marvelService = new MarvelServices();
marvelService.getAllCharacters().then(res => res.data.results.forEach(element => {
  console.log(element);
}))

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

