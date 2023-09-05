import { useEffect, useState } from 'react'
import Header from '../components/Header'
import { Button } from '@mui/material'
import { generateMnemonic } from '../utils/walletUtils'
import MnemonicContainer from '../components/MnemonicContainer'
import { Link, useNavigate } from 'react-router-dom'

// TODO: Add Redux

const AccountCreate = () => {
	const navigate = useNavigate()
	const mnemonicLocal: string | null = localStorage.getItem('walletMnemonic')

	const [mnemonic, setMnemonic] = useState('')
	const [mnemonicArray, setMnemonicArray] = useState([''])

	const generateNewMnemonic = () => {
		const newMnemonic = generateMnemonic()
		setMnemonic(newMnemonic)
		setMnemonicArray(newMnemonic.split(' '))
	}

	useEffect(() => {
		mnemonicLocal ? navigate('/') : generateNewMnemonic()
	}, [])

	return (
		<div className='wallet-wrapper'>
			<Header back='/start' />
			<div className='mnemonic-wrapper'>
				{mnemonicArray.map((mnemonicWord, index) => {
					return (
						<MnemonicContainer
							mnemonicWord={mnemonicWord}
							key={index}
							index={index}
						/>
					)
				})}
			</div>
			<div
				className='start-btn-container'
				style={{ justifyContent: 'flex-start', margin: 10 }}
			>
				<Link to='/'>
					<Button
						variant='contained'
						style={{ margin: '0 20px' }}
						onClick={() => {
							localStorage.setItem('walletMnemonic', mnemonic)
						}}
					>
						Continue
					</Button>
				</Link>

				<Button
					variant='outlined'
					onClick={() => {
						navigator.clipboard.writeText(mnemonic)
					}}
				>
					Copy
				</Button>
			</div>
		</div>
	)
}

export default AccountCreate
