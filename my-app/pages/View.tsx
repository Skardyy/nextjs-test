import Navbar from '../components/Navbar'
import { useRouter } from 'next/navigation'
import { useSearchParams } from 'next/navigation'

export default function Page() {
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