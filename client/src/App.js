import React from 'react';
import NavBar from './components/navBar';
import Home from './components/home';
import { Provider } from "react-redux";
import configureStore from "./store/store";
import './App.css';


const reduxStore = configureStore(window.REDUX_INITIAL_DATA);

function App() {
  return (
  	<Provider store={reduxStore}>
	    <React.Fragment>
	      <NavBar/>
	      <Home/>
	    </React.Fragment>
    </Provider>
  );
}

export default App;
