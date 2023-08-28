import { Wallet } from 'ethers'

export function generateMnemonic(): string {
	const wallet = Wallet.createRandom()
	if (wallet.mnemonic) {
		return wallet.mnemonic.phrase
	} else {
		throw new Error('Mnemonic is undefined')
	}
}
