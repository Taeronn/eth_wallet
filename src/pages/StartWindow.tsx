import { Button } from '@mui/material'
import { Link, Navigate } from 'react-router-dom'

const StartWindow = () => {
	const mnemonic: string | null = localStorage.getItem('walletMnemonic')

	return (
		<div
			className='wallet-wrapper'
			style={{ display: 'flex', alignItems: 'center' }}
		>
			{mnemonic ? <Navigate to='/' /> : null}
			<div className='start-window'>
				<h1>Do you have a wallet?</h1>
				<div className='start-btn-container'>
					<Button variant='contained'>
						<Link to='/create'>Create a new wallet</Link>
					</Button>
					<Button variant='outlined'>
						<Link to='/import'>Import existing wallet</Link>
					</Button>
				</div>
			</div>
		</div>
	)
}

export default StartWindow
