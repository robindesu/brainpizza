import React, { useState} from 'react';
import './App.scss';
import Header from '../Header/Header';
import HeadCard from '../HeadCard/HeadCard';
import SuggestsGrid from '../SuggestsGrid/SuggestsGrid';
import SizesGrid from '../SizesGrid/SizesGrid';
import DoughsGrid from  '../DoughsGrid/DoughsGrid';

function App() {
  let centerContent = ''; 
  const titlesList = [
    'Monte sua Pizza ou escolha uma Sugestão Abaixo',
    'Escolha o Tamanho da sua Pizza',
    'Escolha a Massa da sua Pizza'
  ];
  const [page, setPage] = useState(0);
  const [headTitle, setTitle] = useState(titlesList[0]);

  let changePage = (page) => {
    setPage(page);
    setTitle(titlesList[page]);
  }
    if(page == 0){
      centerContent = <SuggestsGrid/>
    }
    else if(page == 1 ){
      centerContent = <SizesGrid onChangePage={changePage}/>
    }
    else if(page == 2 ){
      centerContent = <DoughsGrid/>
    }
    return (
      <div className="App">
        <Header onChangePage={changePage}/>
        <HeadCard title={headTitle} onChangePage={changePage} page={page}/>
        <div className="App-content">
          {centerContent}
        </div>
      </div>
    );
}

export default App;
