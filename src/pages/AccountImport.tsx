import { Navigate } from 'react-router-dom'
import Header from '../components/Header'
import { Box, TextField } from '@mui/material'

const AccountImport = () => {
	const mnemonic: string | null = localStorage.getItem('walletMnemonic')

	// const [seedPhrase, setSeedPhrase] = useState('')
	// const [isValidSeedPhrase, setIsValidSeedPhrase] = useState(false)

	// const handleSeedPhraseChange = (event: any) => {
	// 	const inputSeedPhrase = event.target.value
	// 	setSeedPhrase(inputSeedPhrase)
	// 	setIsValidSeedPhrase(validateSeedPhrase(inputSeedPhrase))
	// }

	// const validateSeedPhrase = (phrase: string) => {
	// 	return phrase.trim().split(' ').length === 12
	// }

	// const handleContinueClick = () => {
	// 	console.log('Valid Seed Phrase:', seedPhrase)
	// }

	return (
		<div className='wallet-wrapper'>
			{mnemonic ? <Navigate to='/' /> : null}
			<Header back='/start' />
			<p>Account Import</p>
			<Box component='form'>
				<TextField label='Write your seed phrase' variant='outlined' />
			</Box>

			{/* <form>
				<div>
					<label>Enter 12-word Seed Phrase:</label>
					<input
						type='text'
						value={seedPhrase}
						onChange={handleSeedPhraseChange}
					/>
				</div>
				<div>
					{isValidSeedPhrase ? (
						<p>Seed phrase is valid.</p>
					) : (
						<p>Seed phrase must contain 12 words.</p>
					)}
				</div>
				<button
					type='button'
					onClick={handleContinueClick}
					disabled={!isValidSeedPhrase}
				>
					Continue
				</button>
			</form> */}
		</div>
	)
}

export default AccountImport
