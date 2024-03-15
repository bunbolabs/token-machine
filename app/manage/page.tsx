'use client'

import TokenPrice from '@/app/manage/components/price'

import TokenInformation from './components/information'

export default function Page() {
  return (
    <main className="container mt-8">
      <div className={'space-y-8'}>
        <div className=" grid grid-cols-11 gap-4">
          <div className="col-span-4">
            <TokenInformation />
          </div>

          <div className="col-span-7">
            <TokenPrice />
          </div>

          <div className="col-span-7">
            <TokenPrice />
          </div>
        </div>
      </div>
    </main>
  )
}
