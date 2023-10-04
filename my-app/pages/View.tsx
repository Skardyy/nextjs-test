import Navbar from '../components/Navbar'
import { useRouter } from 'next/navigation'
import { useSearchParams } from 'next/navigation'
import Table from '../components/Table';

export async function getServerSideProps(context) {
  const missionID = context.query.mission;
  const res = await fetch(`http://localhost:3000/api/missions?mission=${missionID}`);
  const data = await res.json()

  return {
    props: { data },
  }
}

export default function View({data}) {
  const flatData: {}[] = [];
  data.cat[0].locations[0].items.forEach(item => {
    flatData.push({
      type: item.type,
      name: item.name,
      value: item.value
    })
  })
    
  
  return (
    <div>
      <Navbar/>
      <Table data={flatData}/>
    </div>
  )
}