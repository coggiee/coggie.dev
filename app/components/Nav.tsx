import { navLinks } from '@/app/data/navlinks';
import Link from 'next/link';

export const Nav = () => {
  return (
    <nav>
      {navLinks.map((nav) => (
        <Link href={nav.link} key={nav.title}>
          <a className='mr-5'>{nav.title}</a>
        </Link>
      ))}
    </nav>
  )
}