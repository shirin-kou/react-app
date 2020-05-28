import React from 'react';
import Booklist from './components/Booklist';
import { BrowserRouter, Route, Link } from 'react-router-dom'; //linkはaタグのようなもの
import axios from 'axios';

const App = () => {
  const languages = ['Wine', 'Beer', 'Cocktail', 'Coffee'];
  const getDataFromAPI = async keyword => {
    const requestUrl = 'https://www.googleapis.com/books/v1/volumes?q=intitle:'
    const result = await axios.get(`${requestUrl}${keyword}`);
    return result;
  }

  return (
    <BrowserRouter>
      <div style={{ margin: 20 + "px" }}>
        <h1>Drink Books</h1>
        <div>
          <p><Link to='/'>Wine</Link></p>
          <p><Link to='/beer'>Beer</Link></p>
          <p><Link to='/cocktail'>Cocktail</Link></p>
          <p><Link to='/coffee'>Coffee</Link></p>
        </div>
        <hr />
        <Route
          exact
          path='/'
          render={
            props =>
              <Booklist
                language={languages[0]}
                getData={keyword => getDataFromAPI(keyword)}
              />
          }
        />
        <Route
          path='/beer'
          render={
            props =>
              <Booklist
                language={languages[1]}
                getData={keyword => getDataFromAPI(keyword)}
              />
          }
        />
        <Route
          path='/cocktail'
          render={
            props =>
              <Booklist
                language={languages[2]}
                getData={keyword => getDataFromAPI(keyword)}
              />
          }
        />
        <Route
          path='/coffee'
          render={
            props =>
              <Booklist
                language={languages[3]}
                getData={keyword => getDataFromAPI(keyword)}
              />
          }
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
