import Navbar from '../components/Navbar'
import { useRouter } from 'next/navigation'
import { useSearchParams } from 'next/navigation'

export async function getServerSideProps(context) {
  const missionID = context.query.mission;
  const res = await fetch(`http://localhost:3000/api/missions?mission=${missionID}`);
  const data = await res.json()

  return {
    props: { data },
  }
}

export default function View({data}) {
  console.log(data)
  const router = useRouter()
  const searchParams = useSearchParams()
  const mission = searchParams?.get("mission")
  const category = searchParams?.get("category")
  
  return (
    <div>
      <Navbar/>
      <p>{mission}</p>
    </div>
  )
}