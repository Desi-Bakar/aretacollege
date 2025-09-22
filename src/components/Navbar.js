import React, { useState } from "react"
import { Link } from "gatsby"
import logo from "../img/Logo_Baru.png"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isProgramsOpen, setIsProgramsOpen] = useState(false)

  return (
    <nav className="bg-[#0F1E4A] text-white shadow-md relative z-50">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Kampus Full Praktik" className="w-36" />
        </Link>

        {/* Burger Button (mobile) */}
        <button
          className="md:hidden flex flex-col space-y-1 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="block w-6 h-0.5 bg-white"></span>
          <span className="block w-6 h-0.5 bg-white"></span>
          <span className="block w-6 h-0.5 bg-white"></span>
        </button>

        {/* Menu (desktop) */}
        <div className="hidden md:flex space-x-6 items-center">
          <Link to="/about" className="hover:text-yellow-400 transition">About</Link>

          {/* Dropdown */}
          <div className="relative group">
            <button
              onClick={() => setIsProgramsOpen(!isProgramsOpen)}
              className="hover:text-yellow-400 transition"
            >
              Programs ▾
            </button>
            <div className="absolute left-0 mt-2 w-56 bg-yellow-400 text-blue-900 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition pointer-events-none group-hover:pointer-events-auto">
              <Link to="/products#ti" className="block px-4 py-2 font-bold hover:bg-yellow-300 rounded-t-lg">Teknik Informatika</Link>
              <Link to="/products#si" className="block px-4 py-2 font-bold hover:bg-yellow-300">Sistem Informasi</Link>
              <Link to="/products#bd" className="block px-4 py-2 font-bold hover:bg-yellow-300 rounded-b-lg">Bisnis Digital</Link>
            </div>
          </div>

          <Link to="/biaya" className="hover:text-yellow-400 transition">Biaya Kuliah</Link>
          <Link to="/blog" className="hover:text-yellow-400 transition">Blog</Link>
          <Link to="/contact" className="hover:text-yellow-400 transition">Contact</Link>
          <a
            href="https://pmb.aretacollege.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-400 transition"
          >
            Registration
          </a>
        </div>
      </div>

      {/* Menu Mobile */}
      {isOpen && (
        <div className="md:hidden bg-blue-800 space-y-2 px-4 py-4">
          <Link to="/about" className="block hover:text-yellow-400">About</Link>

          {/* Dropdown Mobile */}
          <details className="bg-[#10255f] rounded-md">
            <summary className="cursor-pointer px-4 py-2 text-white">Programs</summary>
            <div className="pl-6 py-2 space-y-2">
              <Link to="/products#ti" className="block text-yellow-400">Teknik Informatika</Link>
              <Link to="/products#si" className="block text-yellow-400">Sistem Informasi</Link>
              <Link to="/products#bd" className="block text-yellow-400">Bisnis Digital</Link>
            </div>
          </details>

          <Link to="/biaya" className="block hover:text-yellow-400">Biaya Kuliah</Link>
          <Link to="/blog" className="block hover:text-yellow-400">Blog</Link>
          <Link to="/contact" className="block hover:text-yellow-400">Contact</Link>
          <a
            href="https://pmb.aretacollege.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="block hover:text-yellow-400"
          >
            Registration
          </a>
        </div>
      )}
    </nav>
  )
}

export default Navbar
