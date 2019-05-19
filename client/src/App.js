import React from 'react';
import { ToastContainer, toast } from "react-toastify";
import NavBar from './components/navBar';
import Home from './components/home';
import { Provider } from "react-redux";
import configureStore from "./store/store";
import './App.css';
import "react-toastify/dist/ReactToastify.css";


const reduxStore = configureStore(window.REDUX_INITIAL_DATA);

class App extends React.Component {

	render() {
		return (
			<Provider store={reduxStore}>
				<div className="App">
					<ToastContainer autoClose={3000} position={toast.POSITION.BOTTOM_CENTER} />
					<NavBar />
					<Home />
				</div>
			</Provider>
		);
	}
}

export default App;
