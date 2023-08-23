import { Link, Navigate } from 'react-router-dom'
import Header from '../components/Header'
import {
	Alert,
	AlertTitle,
	Box,
	Button,
	Divider,
	TextField,
} from '@mui/material'
import { useState } from 'react'
import { ethers } from 'ethers'

const AccountImport = () => {
	const mnemonicLocal: string | null = localStorage.getItem('walletMnemonic')

	const [mnemonic, setMnemonic] = useState('')
	const [isValidMnemonic, setIsValidMnemonic] = useState(false)

	const handleMnemonicChange = (event: any) => {
		const inputMnemonic = event.target.value
		setMnemonic(inputMnemonic)
		setIsValidMnemonic(validateMnemonic(inputMnemonic))
	}

	const validateMnemonic = (phrase: string) => {
		return (
			phrase.trim().split(' ').length === 12 &&
			ethers.Mnemonic.isValidMnemonic(phrase)
		)
	}

	return (
		<div className='wallet-wrapper'>
			{mnemonicLocal ? <Navigate to='/' /> : null}
			<Header back='/start' />
			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
				}}
			>
				<h3>Access your wallet with your mnemonic phrase</h3>
			</div>
			<Divider style={{ marginBottom: 20 }} />

			<Alert
				severity='error'
				style={{
					marginBottom: 20,
					display: mnemonic === '' || isValidMnemonic ? 'none' : '',
					animation: 'ease-in 1s',
				}}
			>
				<AlertTitle>Error</AlertTitle>
				Please enter a valid mnemonic phrase
			</Alert>

			<Box component='form' className='import-form'>
				<TextField
					label='Write your seed phrase'
					variant='outlined'
					color='secondary'
					style={{ marginBottom: 20 }}
					onChange={handleMnemonicChange}
				/>
				<Button
					variant='contained'
					disabled={!isValidMnemonic}
					onClick={() => {
						localStorage.setItem('walletMnemonic', mnemonic)
					}}
				>
					<Link to='/'>Confirm</Link>
				</Button>
			</Box>
		</div>
	)
}

export default AccountImport
