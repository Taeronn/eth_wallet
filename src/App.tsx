import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import StartWindow from './pages/StartWindow'
import AccountCreate from './pages/AccountCreate'
import AccountImport from './pages/AccountImport'

function App() {
	return (
		<div className='App'>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<StartWindow />} />
					<Route path='/create' element={<AccountCreate />} />
					<Route path='/import' element={<AccountImport />} />
				</Routes>
			</BrowserRouter>
		</div>
	)
}

export default App
