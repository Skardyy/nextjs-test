import Navbar from '../components/Navbar'
import { useRouter } from 'next/navigation'
import { useSearchParams } from 'next/navigation'
import Table from '../components/Table';

interface serverProps{
  data: {
    id: string
    cat: [{
      id: string
      types: [{
        id: string
        value: number
      }]
      locations: [{
        id: string
        items: [{
          type: string
          value: boolean
          name: string
        }]
      }]
    }]
  }
}

export async function getServerSideProps(context: any) {
  const missionID = context.query.mission;
  const res = await fetch(`http://localhost:3000/api/missions?mission=${missionID}`);
  const data: serverProps = await res.json()

  return {
    props: { data },
  }
}

export default function View({data}: serverProps) {
  const cat = data.cat[0]
  return (
    <div>
      <Navbar/>
      {cat.locations.map(data => (
        <Table key={data.id} location={data} types={cat.types}/>
      ))}
    </div>
  )
}