import * as Avatar from '@radix-ui/react-avatar'
import { AvatarImage } from '@radix-ui/react-avatar'
import * as Slider from '@radix-ui/react-slider'
import { Text } from '@react-three/drei'
import { FaHeart, FaHeartBroken } from 'react-icons/fa'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import confusedFace from '@/public/image/sentiments/confused.png'
import happyFace from '@/public/image/sentiments/happy-face.png'
import nearSadFace from '@/public/image/sentiments/near-sad.png'
import sadFace from '@/public/image/sentiments/sad.png'
import smileFace from '@/public/image/sentiments/smile.png'

const data = {
  positive: 69,
  negative: 20,
}

const currentStatus = (positive: number, negative: number): {
  icon: {};
  status: string;
} => {
  const ratio = positive / (positive + negative)

  if (ratio >= 0.8) {
    return {
      icon: happyFace,
      status: 'Very High',
    }
  } else if (ratio >= 0.6) {
    return {
      icon: smileFace,
      status: 'High',
    }
  } else if (ratio >= 0.4) {
    return {
      icon: confusedFace,
      status: 'Medium',
    }
  } else if (ratio >= 0.2) {
    return {
      icon: nearSadFace,
      status: 'Low',
    }
  } else {
    return {
      icon: sadFace,
      status: 'Very Low',
    }
  }
}

export default function TokenSentiments() {
  // @ts-ignore
  // @ts-ignore
  // @ts-ignore
  // @ts-ignore
  // @ts-ignore
  // @ts-ignore
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-normal">Sentiments</CardTitle>
      </CardHeader>
      <CardContent className={'flex flex-row items-center justify-between'}>
        <div className={'flex flex-col items-center p-auto m-auto'}>
          <Avatar.Root
            className="bg-blackA1 inline-flex h-[45px] w-[45px] select-none items-center justify-center overflow-hidden rounded-full align-middle">
            <Avatar.Image
              alt="Colm Tuite"
              className="h-full w-full rounded-[inherit] object-cover"
              // @ts-ignore
              src={currentStatus(data.positive, data.negative).icon.src}
            />
            <Avatar.Fallback
              className="text-violet11 leading-1 flex h-full w-full items-center justify-center bg-white text-[15px] font-medium"
              delayMs={600}
            >
              SMILE
            </Avatar.Fallback>
          </Avatar.Root>
          <h3>{Math.floor(data.positive * 100 / (data.positive + data.negative))}</h3>
          <h3>
            {currentStatus(data.positive, data.negative).status}
          </h3>
        </div>
        <div className={''}>
          <div className={'flex flex-row justify-between'}>
            <h3>
              {data.positive + ' '}
              ({Math.floor(data.positive * 100 / (data.positive + data.negative))}%)
            </h3>
            <h3>
              {data.negative + ' '}
              ({100 - Math.floor(data.positive * 100 / (data.positive + data.negative))}%)
            </h3>
          </div>
          <Slider.Root
            disabled
            className="relative flex items-center select-none touch-none w-[200px] h-5"
            value={[data.positive * 100 / (data.positive + data.negative)]}
          >
            <Slider.Track className="bg-red-600 relative grow rounded-full h-[3px]">
              <Slider.Range className="absolute bg-green-600 rounded-full h-full" />
            </Slider.Track>
          </Slider.Root>

          <div className={'flex flex-row justify-between'}>
            <Button variant="outline">
              <FaHeart />
            </Button>

            <Button variant="outline">
              <FaHeartBroken />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}