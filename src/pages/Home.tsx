import { Navigate } from 'react-router-dom'
import Header from '../components/Header'

const Home = () => {
	const mnemonic: string | null = localStorage.getItem('walletMnemonic')

	return (
		<div className='wallet-wrapper'>
			{!mnemonic ? <Navigate to='/start' /> : null}
			<Header />
			<p>Home</p>
		</div>
	)
}

export default Home
