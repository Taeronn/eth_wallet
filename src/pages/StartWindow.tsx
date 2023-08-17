import { Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const StartWindow = () => {
	return (
		<div
			className='wallet-wrapper'
			style={{ display: 'flex', alignItems: 'center' }}
		>
			<div className='start-window'>
				<h1>Do you have a wallet?</h1>
				<div className='btn-container'>
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
