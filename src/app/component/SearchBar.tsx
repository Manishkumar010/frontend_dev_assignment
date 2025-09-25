'use client'
export default function SearchBar({ value, onChange }: { value: string, onChange: (val: string) => void }) {
  return (
    <div className="flex justify-center p-1 sticky top-0 z-50 ">
      <input
        type="text"
        placeholder="Search workers..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full sm:w-1/2 px-4 py-2 rounded-lg border text-black focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />
    </div>
  )
}
