import Link from 'next/link';
import { useSearchParams, usePathname } from 'next/navigation'

export default function Navbar() {
    const searchParamas = useSearchParams()
    const pathname = usePathname()
    const getUrl = (category: string) : string => {
        const params = new URLSearchParams(searchParamas?.toString())
        params.set("category", category)
        return pathname + "?" + params.toString()
    }
  return (
    <nav className='border-b-2 border-gray-500 transition-colors duration-500 ease-in-out hover:border-pink pb-2'>
      <Link href={getUrl("category1")} className='link'>category1</Link>
      <Link href={getUrl("category2")} className='link'>category2</Link>
      <Link href={getUrl("category3")} className='link'>category3</Link>
      <Link href={getUrl("category4")} className='link'>category4</Link>
    </nav>
  )
}