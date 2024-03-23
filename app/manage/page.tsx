'use client'

import TokenHolders from '@/app/manage/components/holders'
import TokenPools from '@/app/manage/components/pools'
import TokenPrice from '@/app/manage/components/price'
import TokenSecurity from '@/app/manage/components/security'
import TokenSentiments from '@/app/manage/components/sentiments'

import TokenInformation from './components/information'

export default function Page() {
  return (
    <main className="container mt-8">
      <div className={'space-y-8'}>
        <div className="grid grid-cols-11 gap-4">
          <div className="col-span-4">
            <TokenInformation />
          </div>

          <div className="col-span-7">
            <TokenPrice />
          </div>

          <div className="col-span-3">
            <TokenSentiments />
            <TokenPools />
          </div>

          <div className="col-span-8">
            <TokenSecurity />
          </div>

          <div className="col-span-6">
            <TokenHolders />
          </div>

          <div className="col-span-5">

          </div>
        </div>
      </div>
    </main>
  )
}
