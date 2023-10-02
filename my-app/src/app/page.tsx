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
    <div>
      <h1>Mission</h1>
      <p>please choose a mission</p>
      <select id="mission">
        <option value="mission1">mission1</option>
        <option value="mission2">mission2</option>
        <option value="mission3">mission3</option>
      </select>
      <button onClick={confirmClick}>Confirm</button>
    </div>
  )
}