// @ts-ignore

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableCell, TableRow } from '@/components/ui/table';
import { Connection, PublicKey } from '@solana/web3.js';

const TokenPools = () => {
  const [markets, setMarkets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
// Connect to Solana devnet
  const connection = new Connection('https://api.devnet.solana.com', 'singleGossip');

  const PROGRAM_ID = new PublicKey('TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA');

  useEffect(() => {
    getPools()
      .then(pools => console.log(pools))
      .catch(error => console.error(error))

  }, []);

  async function getPools() {
    const options = {
      method: 'POST',
      headers: {accept: 'application/json', 'content-type': 'application/json'},
      body: JSON.stringify({
        id: 1,
        jsonrpc: '2.0',
        method: 'getTokenAccountBalance',
        params: ['23zF9Azpe9CN4iPeTsQndD1mQpcb5Gz1qFREL5gPTZvG']
      })
    };

    fetch('https://api.devnet.solana.com', options)
      .then(response => response.json())
      .then(response => console.log(response))
      .catch(err => console.error(err));
  }

  const formatVolume = (volume: number) => {
    let result = volume.toString();
    let suffix = '';

    if (volume >= 1e9) {
      result = ((volume / 1e9).toFixed(1));
      suffix = 'B';
    } else if (volume >= 1e6) {
      result = (volume / 1e6).toFixed(1);
      suffix = 'M';
    } else if (volume >= 1e3) {
      result = (volume / 1e3).toFixed(1);
      suffix = 'K';
    }

    return `$${result}${suffix}`;
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-normal">Token Pools</CardTitle>
      </CardHeader>
      <CardContent>
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Error: {error}</p>
        ) : (
          <Table>
            {markets.map((market, index) => (
              <TableRow key={index}>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      <span>🔥</span>
                      {/*<span className="font-medium">{market.name}</span>*/}
                    </div>
                    {/*<span className="text-gray-500">{formatVolume(market.volume)}</span>*/}
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </Table>
        )}
      </CardContent>
    </Card>
  );
};

export default TokenPools;
