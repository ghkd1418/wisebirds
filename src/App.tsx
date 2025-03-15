import { RouterProvider } from 'react-router';

import { ToastContainer } from 'react-toastify';

import { routers } from './routes';

function App() {
	return (
		<>
			<RouterProvider router={routers} />
			<ToastContainer />
		</>
	);
}

export default App;
