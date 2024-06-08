import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { persistor, store } from './store';
import { PersistGate } from 'redux-persist/integration/react';
import { LoginScreen } from './login/LoginScreen';
import { ProtectedRoute } from './commons/ProtectedRoute';
const router = createBrowserRouter([
	// {
	// 	path: '/signup',
	// 	element: <SignupScreen />,
	// },
	{
		path: '/login',
		element: <LoginScreen />,
	},
	{
		path: '/',
		element: (
			<ProtectedRoute>
				<LoginScreen />
			</ProtectedRoute>
		),
	},
	// {
	// 	path: '/book-detail/:bookId',
	// 	element: (
	// 		<ProtectedRoute>
	// 			<BookDetailScreen />
	// 		</ProtectedRoute>
	// 	),
	// },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<RouterProvider router={router} />
			</PersistGate>
		</Provider>
	</React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
