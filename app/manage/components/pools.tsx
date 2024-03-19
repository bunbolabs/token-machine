import { ArrowUpRight } from 'lucide-react'
import { Line, LineChart, ResponsiveContainer } from 'recharts'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { Table, TableCell, TableRow } from '@/components/ui/table'

const data = [
  {
    icon: '🔥',
    name: 'Burn',
    volume: 10000000000,
  },
  {
    icon: '🔒',
    name: 'Locked',
    volume: 10000000000,
  },
  {
    icon: '🔐',
    name: 'Staked',
    volume: 10000000000,
  },
  {
    icon: '🔓',
    name: 'Unlocked',
    volume: 10000000000,
  },
]

export default function TokenPools() {
  const formatVolume = (volume: number) => {
    let result = volume.toString()
    let suffix = ''

    if (volume >= 1e9) {
      result = ((volume / 1e9).toFixed(1))
      suffix = 'B'
    } else if (volume >= 1e6) {
      result = (volume / 1e6).toFixed(1)
      suffix = 'M'
    } else if (volume >= 1e3) {
      result = (volume / 1e3).toFixed(1)
      suffix = 'K'
    }

    return `$${result}${suffix}`
  }

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-normal">Token Pools</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          {
            data.map((item, index) => (
              <TableRow key={index}>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      <span>{item.icon}</span>
                      <span className="font-medium">{item.name}</span>
                    </div>
                    <span className="text-gray-500">{formatVolume(item.volume)}</span>
                  </div>
                </TableCell>
              </TableRow>
            ))
          }
        </Table>
      </CardContent>
    </Card>
  )
}
