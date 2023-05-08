import Link from 'next/link'
import React from 'react'
import { TbBrandPushover } from "react-icons/tb";

const Navbar = () => {
  return (
    <nav className="bg-white shadow w-full h-16  light:bg-white flex items-center justify-between md:px-24 px-8  ">
        <div className="cursor-pointer text-4xl  primary-color ">
          <Link href="/">
            <TbBrandPushover />
          </Link>
        </div>
        <ul className="md:flex hidden gap-5 items-center justify-center primary-color font-sans ">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/projects">Projects</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>

    </nav>
  )
}

export default Navbar