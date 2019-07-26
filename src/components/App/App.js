import React, { useState} from 'react';
import './App.scss';
import Header from '../Header/Header';
import HeadCard from '../HeadCard/HeadCard';
import GridContainer from '../Grid/GridContainer';

/** 
  Page 0 = Suggestions
  Page 1 = Size
  Page 2 = Dough
  Page 3 = Flavor
**/
function App() {
  let centerContent = ''; 
  const titlesList = [
    'Monte sua Pizza ou escolha uma Sugestão Abaixo',
    'Escolha o Tamanho da sua Pizza',
    'Escolha a Massa da sua Pizza',
    'Escolha o Sabor da sua Pizza',
  ];
  const [page, setPage] = useState(0);
  const [headTitle, setTitle] = useState(titlesList[0]);

  let changePage = (page) => {
    setPage(page);
    setTitle(titlesList[page]);
  }

    return (
      <div className="App">
        <Header onChangePage={changePage}/>
        <HeadCard title={headTitle} onChangePage={changePage} page={page}/>
        <div className="App-content">
          <GridContainer page={page} onChangePage={changePage}/>
        </div>
      </div>
    );
}

export default App;
