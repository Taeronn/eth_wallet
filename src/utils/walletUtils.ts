import { Wallet, ethers } from 'ethers'
import { Account } from '../models/Account'

export const infuraProvider = new ethers.InfuraProvider(
	'mainnet',
	import.meta.env.VITE_INFURA_KEY
)

export async function getBalance(address: string) {
	return ethers.formatEther(await infuraProvider.getBalance(address))
}

export function generateMnemonic(): string {
	const wallet = Wallet.createRandom()
	if (wallet.mnemonic) {
		return wallet.mnemonic.phrase
	} else {
		throw new Error('Mnemonic is undefined')
	}
}

export function generateAccount(mnemonic: string = ''): { account: Account } {
	const wallet = Wallet.fromPhrase(mnemonic)
	const account: Account = {
		mnemonic,
		privateKey: wallet.privateKey,
		address: wallet.address,
		balance: '0',
	}

	return { account }
}
