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
    <nav>
      <Link href={getUrl("category1")}>category1</Link>
      <Link href={getUrl("category2")}>category2</Link>
      <Link href={getUrl("category3")}>category3</Link>
      <Link href={getUrl("category4")}>category4</Link>
    </nav>
  )
}