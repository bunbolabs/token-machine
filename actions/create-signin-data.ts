import { SolanaSignInInput } from '@solana/wallet-standard-features'

export const createSignInData = async (): Promise<SolanaSignInInput> => {
  const now: Date = new Date()
  const uri = window.location.href
  const currentUrl = new URL(uri)
  const domain = currentUrl.host

  const currentDateTime = now.toISOString()

  const signInData: SolanaSignInInput = {
    domain,
    statement: 'Token Machine',
    version: '1',
    nonce: 'oBbLoEldZs',
    chainId: 'devnet',
    issuedAt: currentDateTime,
    resources: ['https://phantom.app/'],
  }

  return signInData
}
