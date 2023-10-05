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

interface location {
  locationName: string
  typeList: {  
    id: string
    typeValue: number
    items: {
      value: boolean
      name: string
    }[] 
  }[]
}

export default function View({data}: serverProps) {
  const locationList: location[] = []
  data.cat[0].locations.forEach(location => {
    let typeList: {}[] = []
    data.cat[0].types.forEach(type => {
      typeList.push({
        id: type.id,
        typeValue: type.value,
        items: location.items.filter(item => {if(item.type == type.id){return item}})
      })
    })
    let mLocation = {
      locationName: location.id,
      typeList: typeList,
    } as location
    locationList.push(mLocation)
  })

  return (
    <div>
      <Navbar/>
      {locationList.map(data => (
        <Table key={data.locationName} typeList={data.typeList}/>
      ))}
    </div>
  )
}