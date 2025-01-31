import Image from 'next/image'
import { PocketMon } from '../../../types'
import { NeonGradientCard } from '@/components/ui/neon-gradient-card'

const PokemonCard = ({ item }: { item: PocketMon }) => {
  const baseURL = 'https://pocketbase-production-3d71.up.railway.app/api/files'

  const url = `${baseURL}/${item.collectionId}/${item.id}/${item.image}`
  return (
    <NeonGradientCard
      className="max-w-sm items-center justify-center text-center"
      neonColors={{ firstColor: '#00d0ff', secondColor: '#00FFF1' }}
      borderRadius={20}
      borderSize={3}
    >
      <div className="">
        <h2 className="text-xl font-bold text-center">{item.name}</h2>
        <div className="flex justify-between">
          <span className="text-sm">{item.type}</span>
          <span className="text-sm">HP: {item.hp}</span>
        </div>
      </div>
      {/* Image */}
      <div className="w-full flex justify-center">
        <div className="p-2 space-y-2">
          <Image src={`${url}`} width={160} height={160} alt="" />
        </div>
      </div>
      <div className="p-2 space-y-2">
        <div className=" p-1 rounded">
          <div className="flex justify-between">
            <span>{item.attack_one}</span>
            <span>{item.attack_one_damage}</span>
          </div>
        </div>
        <div className="p-1 rounded">
          <div className="flex justify-between">
            <span>{item.attack_two}</span>
            <span>{item.attack_two_damage}</span>
          </div>
        </div>
      </div>
      <div className="bg-gray-100 dark:bg-gray-700 p-2 flex justify-between text-xs">
        <div>Weakness: {item.weakness}</div>
        <div>Resistance: {item.resistance}</div>
      </div>
    </NeonGradientCard>
  )
}

export default PokemonCard
