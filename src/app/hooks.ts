import PocketBase from 'pocketbase'

export const usePB = () => {
  const pb = new PocketBase('https://pocketbase-production-3d71.up.railway.app/')
  return pb
}
