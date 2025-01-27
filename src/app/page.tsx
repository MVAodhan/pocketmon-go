'use client'

import { usePB } from '@/app/hooks'

import { useEffect, useState } from 'react'
import PokemonCard from './components/pocketmon-card'
import { PocketMon } from '../../types'

export default function Home() {
  const [pocketmon, setPoketmon] = useState<PocketMon[]>([])
  const pb = usePB()
  const getPoketmon = async () => {
    const records = await pb.collection('pocketmon').getFullList<PocketMon>()
    setPoketmon(records)
  }

  useEffect(() => {
    getPoketmon()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <main className="flex w-screen min-h-screen justify-center items-center font-[family-name:var(--font-geist-sans)] ">
      <div>
        <div className="grid grid-cols gap-2 justify-center sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 self-start">
          {pocketmon.map((item) => (
            <div key={item.id}>
              <PokemonCard item={item} />
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
