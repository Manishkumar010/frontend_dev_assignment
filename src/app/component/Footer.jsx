import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-6">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Brand */}
        <div className="text-lg font-bold text-indigo-600">
          SolveEase
        </div>

        {/* Links */}
        <div className="flex gap-6 text-gray-700">
          <Link href="/" className="hover:text-indigo-600 transition-colors">Home</Link>
          <Link href="/workers" className="hover:text-indigo-600 transition-colors">Workers</Link>
          <Link href="/about" className="hover:text-indigo-600 transition-colors">About</Link>
          <Link href="/contact" className="hover:text-indigo-600 transition-colors">Contact</Link>
        </div>

        {/* Copyright */}
        <div className="text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} SolveEase. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
