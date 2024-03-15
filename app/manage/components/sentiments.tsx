import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import happyFace from '@/public/image/sentiments/happy-face.png'
import smileFace from '@/public/image/sentiments/smile.png'
import confusedFace from '@/public/image/sentiments/confused.png'
import sadFace from '@/public/image/sentiments/sad.png'
import nearSadFace from '@/public/image/sentiments/near-sad.png'

const data = {
  positive: '69',
  negative: '20'
}

export default function TokenSentiments() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-normal">Token Sentiments</CardTitle>
      </CardHeader>
      <CardContent>

      </CardContent>
    </Card>
  )
}
