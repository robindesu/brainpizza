import React, { useState} from 'react';
import './App.scss';
import Header from '../Header/Header';
import HeadCard from '../HeadCard/HeadCard';
import SuggestsGrid from '../SuggestsGrid/SuggestsGrid';
import SizesGrid from '../SizesGrid/SizesGrid'

function App() {
  const titlesList = [
    'Monte sua Pizza ou escolha uma Sugestão Abaixo',
    'Escolha o tamanho da sua Pizza'
  ];
  const [page, setPage] = useState(0);
  const [headTitle, setTitle] = useState(titlesList[0]);

  let changePage = (page) => {
    console.log(page);
    setPage(page);
    setTitle(titlesList[page]);
  }
    let centerContent = ''; 
    if(page == 0){
      centerContent = <SuggestsGrid/>
    }
    else if(page == 1 ){
      centerContent = <SizesGrid/>
    }
    return (
      <div className="App">
        <Header onChangePage={changePage}/>
        <HeadCard title={headTitle} onChangePage={changePage}/>
        <div className="App-content">
          {centerContent}
        </div>
      </div>
    );
}

export default App;
