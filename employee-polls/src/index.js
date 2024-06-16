import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { persistor, store } from './store';
import { PersistGate } from 'redux-persist/integration/react';
import { LoginScreen } from './features/login/LoginScreen';
import { ProtectedRoute } from './commons/ProtectedRoute';
import '../src/commons/common.css';
import SignupScreen from './features/signup/SignupScreen';
import { MainScreen } from './features/main/MainScreen';
import { HomeScreen } from './features/home/HomeScreen';
import { NewPollScreen } from './features/newpoll/NewPollScreen';
import { LoadingBar } from 'react-redux-loading-bar';
import { App } from './App';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
