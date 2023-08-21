import { ArrowBack, Settings } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const Header = ({ back = '/' }: { back?: string }) => {
	const navigate = useNavigate()
	const location = useLocation()

	return (
		<div className='header'>
			<div className='icon-button'>
				{location.pathname !== '/' && (
					<IconButton onClick={() => navigate(back)}>
						<ArrowBack />
					</IconButton>
				)}
			</div>

			<h2 id='wallet-name'>TAERONN-WALLET</h2>

			<div className='icon-button' style={{ float: 'right' }}>
				{location.pathname !== '/create' && location.pathname !== '/import' && (
					<Link to='/settings'>
						<IconButton>
							<Settings />
						</IconButton>
					</Link>
				)}
			</div>
		</div>
	)
}

export default Header
