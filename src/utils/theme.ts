import { createTheme } from '@mui/material'

const COLOR = {
	BG: '#252422',
	primary: '#F24B4B', //mid
	secondary: '#992323', //dark
	tertiary: '#E35959', //light
	quaternary: '#F2F0D8', //white
}

export { COLOR }

const theme = createTheme({
	palette: {
		mode: 'dark',
	},
	components: {
		MuiButton: {
			variants: [
				{
					props: { variant: 'outlined' },
					style: {
						borderColor: COLOR.primary,
						color: COLOR.primary,
						'&:hover': {
							borderColor: COLOR.tertiary,
						},
					},
				},
				{
					props: { variant: 'contained' },
					style: {
						backgroundColor: COLOR.primary,
						color: COLOR.quaternary,
						'&:hover': {
							backgroundColor: COLOR.secondary,
						},
					},
				},
			],
		},
		MuiIconButton: {
			variants: [
				{
					props: {},
					style: {
						color: COLOR.quaternary,
					},
				},
			],
		},
		MuiTextField: {
			variants: [
				{
					props: {},
					style: {
						color: COLOR.quaternary,
					},
				},
			],
		},
	},
})

export default theme
