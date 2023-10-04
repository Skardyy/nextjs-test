'use client'
import { useRouter } from 'next/navigation'

export default function Home({data}:any) {
  const router = useRouter()
  router.push("/MissionSelect")
}