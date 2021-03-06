import React from 'react';
import { Provider } from 'react-redux'
import store from './Redux/store'
import './App.css';
import  CakeContainer  from './Components/CakeContainer'


function App() {
  return (
    <Provider store={store}>
    <div className="App">
     <CakeContainer />
    </div>
    </Provider>
  )
}

export default App;
