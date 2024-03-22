import { Canvas } from '@react-three/fiber'
import Link from 'next/link'

import Coin from '@/app/manage/components/coin'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { formatWalletAddress } from '@/lib/utils'

export default function TokenInformation() {
  return (
    <Card className={'h-full'}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-normal">Token Information</CardTitle>
      </CardHeader>
      <CardContent>
        <div className={'mt-1 grid grid-cols-[150px,1fr] gap-4'}>
          <figure className={'col-span-1 h-[150px] w-[150px] overflow-hidden rounded-2xl'}>
            <Canvas>
              <ambientLight />
              <directionalLight intensity={1} position={[0, 0, 5]} />
              <Coin
                texture={
                  'https://static01.nyt.com/images/2016/09/28/us/17xp-pepethefrog_web1/28xp-pepefrog-articleLarge.jpg?quality=75&auto=webp&disable=upscale'
                }
              />
            </Canvas>
          </figure>

          <div className={'col-span-1 flex flex-col'}>
            <span className={'text-xl font-bold'}>BOOK OF MEME</span>
            <span className={'text-sm text-muted-foreground'}>$BOME</span>
            <Link className={'mt-1 text-sm underline'} href={'/abc'} target={'_blank'}>
              {formatWalletAddress('ukHH6c7mMyiWCf1b9pnWe25TSpkDDt3H5pQZgZ74J82')}
            </Link>
            <span className={'mt-2 text-sm text-muted-foreground'}>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
              Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
              ultricies nec.
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
