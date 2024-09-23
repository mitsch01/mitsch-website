"use client"
import Counter from "components/Counter"
import Link from "next/link"


export default function Footer() {
  return (
    <footer className='site-footer'>
      <p>Our footer</p>
      <nav>
        <ul>
          <li>
            <Link href='/'>Home</Link>
          </li>
          <li>
            <Link href='/about'>About</Link>
          </li>
          <li>
            <Link href='/projects'>Projects</Link>
          </li>
          <li>
            <Link href='/playground'>Playground</Link>
          </li>
          <li>
            <Link href='/contact'>Contact</Link>
          </li>
        </ul>
      </nav>
      <p>Copyright ${new Date().getFullYear()}</p>
      <Counter />
    </footer>
  )
}
