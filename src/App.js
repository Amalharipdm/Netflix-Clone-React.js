import NavBar from './Components/NavBar/NavBar';
import {action, orginals} from './urls'
import React  from 'react';
import './App.css'
import Banner from './Components/Banner/Banner';
import RowPost from './Components/RowPost/RowPost';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <RowPost url={orginals} title='Netflix orginals' />
      <RowPost url={action} title='Action' isSmall />
    </div>
  );
}

export default App;
