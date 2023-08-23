import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import StartWindow from './pages/StartWindow'
import AccountCreate from './pages/AccountCreate'
import AccountImport from './pages/AccountImport'
import Home from './pages/Home'
import Settings from './pages/Settings'

function App() {
	return (
		<div className='App'>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/start' element={<StartWindow />} />
					<Route path='/create' element={<AccountCreate />} />
					<Route path='/import' element={<AccountImport />} />
					<Route path='/settings' element={<Settings />} />
				</Routes>
			</BrowserRouter>
		</div>
	)
}

export default App
