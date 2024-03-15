import { ArrowUpRight } from 'lucide-react'
import { Line, LineChart, ResponsiveContainer } from 'recharts'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { cn } from '@/lib/utils'

const data = [
  {
    revenue: 10400,
    subscription: 240,
  },
  {
    revenue: 14405,
    subscription: 300,
  },
  {
    revenue: 9400,
    subscription: 200,
  },
  {
    revenue: 8200,
    subscription: 278,
  },
  {
    revenue: 7000,
    subscription: 189,
  },
  {
    revenue: 9600,
    subscription: 239,
  },
  {
    revenue: 11244,
    subscription: 278,
  },
  {
    revenue: 26475,
    subscription: 189,
  },
]

export default function TokenHolders() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-normal">Token Price</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">$0.000023</div>
        <div className={cn('flex items-center text-xs text-muted-foreground', 'text-red-300')}>
          <ArrowUpRight width={17} />
          <span>12,3%</span>
        </div>

        <div className="h-[80px]">
          <ResponsiveContainer height="100%" width="100%">
            <LineChart
              data={data}
              margin={{
                top: 5,
                right: 10,
                left: 10,
                bottom: 0,
              }}
            >
              <Line
                activeDot={{
                  r: 6,
                  style: { fill: 'var(--theme-primary)', opacity: 0.25 },
                }}
                dataKey="revenue"
                strokeWidth={2}
                style={
                  {
                    stroke: 'var(--theme-primary)',
                    '--theme-primary': 'hsl(0 0% 98%)',
                  } as React.CSSProperties
                }
                type="monotone"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className={'mt-4 flex w-full gap-3'}>
          {Array(6)
            .fill(null)
            .map((_, i) => (
              <div key={i} className={cn('flex flex-1 flex-col gap-1 rounded-lg border p-3', 'border-green-300')}>
                <span className={'text-xs text-muted-foreground'}>30 minutes</span>
                <span className={'text-lg font-semibold text-green-300'}>+123,32%</span>
              </div>
            ))}
        </div>
      </CardContent>
    </Card>
  )
}
