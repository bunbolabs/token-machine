// @ts-ignore
import React, { useEffect, useState } from 'react'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Table, TableCell, TableRow } from '@/components/ui/table'
import Orca from '@/public/image/pools/orca.png'
import Raydium from '@/public/image/pools/raydium.png'

const TokenPools = () => {
  const [markets, setMarkets] = useState([
    {
      icon: Orca,
      name: 'Orca',
      volume: 145130599.69,
    },
    {
      icon: Raydium,
      name: 'Raydium',
      volume: 153080470.15,
    },
  ])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

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
    <Card className={'mt-2'}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-normal">Token Pools</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          {markets.map((market, index) => (
            <TableRow key={index}>
              <TableCell className="flex items-center gap-2">
                <div className="flex items-center gap-1">
                    <span>
                      <img src={market.icon.src} alt={market.name} width={24} height={24} />
                    </span>
                  <span className="font-medium">{market.name}</span>
                </div>
                <span className="text-gray-500">{formatVolume(market.volume)}</span>
              </TableCell>
            </TableRow>
          ))}
        </Table>
      </CardContent>
    </Card>
  )
}

export default TokenPools
