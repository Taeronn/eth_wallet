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
		primary: {
			main: COLOR.primary,
			contrastText: COLOR.quaternary,
		},
		secondary: {
			main: COLOR.quaternary,
		},
	},
	components: {
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
		MuiFormControl: {
			variants: [
				{
					props: {},
					style: {
						width: '100%',
						'&:hover': {
							borderColor: COLOR.quaternary,
						},
					},
				},
			],
		},
	},
})

export default theme
