import { createSlice } from '@reduxjs/toolkit'
import { Account } from '../models/Account'
import { Wallet } from 'ethers'
import { infuraProvider } from '../utils/walletUtils'

const initialState: Account = {
	mnemonic: '',
	privateKey: '',
	address: '',
	balance: '0',
}

export const accountSlice = createSlice({
	name: 'account',
	initialState,
	reducers: {
		createAccount: (state) => {
      const wallet = Wallet.fromPhrase(state.mnemonic)
      state.privateKey = wallet.privateKey,
      state.address = wallet.address,
      state.balance = wallet.
    },
		changeAccount: () => {},
    refreshBalance: () => {
    }
	},
})
