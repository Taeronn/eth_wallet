import { Navigate } from 'react-router-dom'
import Header from '../components/Header'
// import { getBalance } from '../utils/walletUtils'
// import { useState } from 'react'
// TODO: Add Redux

const Home = () => {
	const mnemonic: string | null = localStorage.getItem('walletMnemonic')
	// const [balance, setBalance] = useState();

	return (
		<div className='wallet-wrapper'>
			{!mnemonic ? <Navigate to='/start' /> : null}
			<Header />
			<h1>{}</h1>
		</div>
	)
}

export default Home
