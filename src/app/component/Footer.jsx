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
          <a href="/" className="hover:text-indigo-600 transition-colors">Home</a>
          <a href="/workers" className="hover:text-indigo-600 transition-colors">Workers</a>
          <a href="/about" className="hover:text-indigo-600 transition-colors">About</a>
          <a href="/contact" className="hover:text-indigo-600 transition-colors">Contact</a>
        </div>

        {/* Copyright */}
        <div className="text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} SolveEase. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
