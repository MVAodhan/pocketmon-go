import { RecordModel } from 'pocketbase'

export interface PocketMon extends RecordModel {
  name: string
  image: string
  type: string
  hp: number
  attack_one: string
  attack_two: string
  weakness: string
  resistance: string
}
