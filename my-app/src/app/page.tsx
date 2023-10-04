'use client'
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()
  const confirmClick = () => {
      const mission = document.getElementById("mission") as HTMLSelectElement;
      console.log(mission.value)
      router.push(`/View?mission=${mission.value}&category=category1`)
  }
  return ( 
    <div className='flex justify-center flex-col items-center m-32'>
      <h1 className='text-3xl text-yellow'>Mission</h1>
      <p className='text-gray-300'>please choose a mission</p>
      <select id="mission" className='bg-foreground rounded-md my-8 w-40 h-8 pl-2'>
        <option value="mission1">mission1</option>
        <option value="mission2">mission2</option>
        <option value="mission3">mission3</option>
      </select>
      <button onClick={confirmClick} className='btn-primary'>Confirm</button>
    </div>
  )
}