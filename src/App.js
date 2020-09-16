import React, {useState } from 'react';
import './App.css';
import { Header } from './components/Header/Header';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { News } from './containers/News/News';
import { PopUp } from './components/PopUp/PopUp';
import { HomePage } from './containers/HomePage/HomePage';

function App() {

  const [showPopUp, setShowPopUp] = useState(false);

  return (
    <BrowserRouter>
      <div className="App">
        <Header setShowPopUp={setShowPopUp} />
        
        {
          showPopUp ? <PopUp setShowPopUp={setShowPopUp} /> : null
        }
        
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/news" component={News} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;