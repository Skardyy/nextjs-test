'use client'
import { useRouter } from 'next/navigation'

export async function getServerSideProps(context: any) {
  const res = await fetch(`http://localhost:3000/api/missions`);
  const data = await res.json()

  return {
    props: { data },
  }
}

interface Props {
  data: string[]
}

export default function MissionSelect({data}: Props) {
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
        {data.map(mission => 
          <option key={mission} value={mission}>{mission}</option>
        )}
      </select>
      <button onClick={confirmClick} className='btn-primary'>Confirm</button>
    </div>
  )
}