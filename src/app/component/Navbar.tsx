'use client'
import React from 'react'
import SearchBar from './SearchBar'

interface NavbarProps {
  search: string
  setSearch: (value: string) => void
}

export default function Navbar({ search, setSearch }: NavbarProps) {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md px-6 py-3 flex flex-col md:flex-row items-center justify-between gap-4">
      {/* Logo / Brand Name */}
      <div className="text-2xl font-bold text-indigo-600">
        SolveEase
      </div>

      {/* Navigation Links */}
      <nav className="flex gap-6 font-medium text-gray-700">
        <a href="/" className="hover:text-indigo-600 transition-colors">Home</a>
        <a href="/workers" className="hover:text-indigo-600 transition-colors">Workers</a>
        <a href="/about" className="hover:text-indigo-600 transition-colors">About</a>
        <a href="/contact" className="hover:text-indigo-600 transition-colors">Contact</a>
      </nav>


     {/* Search bar here for search a workers and sticy a search baar on top  */}
      <div className="w-full md:w-1/3">
        <SearchBar value={search} onChange={setSearch} />
      </div>
    </header>
  )
}
