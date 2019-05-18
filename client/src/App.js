import React from 'react';
import { ToastContainer, toast } from "react-toastify";
import NavBar from './components/navBar';
import Home from './components/home';
import { Provider } from "react-redux";
import configureStore from "./store/store";
import './App.css';
import "react-toastify/dist/ReactToastify.css";


const reduxStore = configureStore(window.REDUX_INITIAL_DATA);

function App() {
  return (
  	<Provider store={reduxStore}>
	    <React.Fragment>
	    	<ToastContainer autoClose={3000} position={toast.POSITION.BOTTOM_CENTER} />
	      	<NavBar/>
	      	<Home/>
	    </React.Fragment>
    </Provider>
  );
}

export default App;
