import { Paper } from '@mui/material'

const MnemonicContainer = (props: { mnemonicWord: string; index: number }) => {
	return (
		<div className='mnemonic-container'>
			<Paper
				variant='outlined'
				style={{
					height: '100%',
					fontSize: 22,
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				{props.index + 1}. {props.mnemonicWord}
			</Paper>
		</div>
	)
}

export default MnemonicContainer
