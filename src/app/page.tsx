'use client'
import { WorkerType } from '@/types/workers'
import { useState, useEffect } from 'react'
import Loading from './component/Loading'
import SearchBar from './component/SearchBar'
import WorkerCard from './component/WorkerCard'
import PagiButtons from './component/PagiButtons'
import Navbar from './component/Navbar'
import Footer from './component/Footer'

// Helper hook (debounce search input)
function useDebounce(value: string, delay: number) {
  const [debouncedValue, setDebouncedValue] = useState(value)

  useEffect(() => {
    const handler = setTimeout(() => setDebouncedValue(value), delay)
    return () => clearTimeout(handler)
  }, [value, delay])

  return debouncedValue
}

export default function WorkersPage() {
  // State management
  const [allWorkers, setWorkersData] = useState<WorkerType[]>([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState("")
  const [currentPage, setCurrentPage] = useState(1) // current page number

  const debouncedSearch = useDebounce(search, 300)
  const itemsPerPage = 9 // how much card show in a page 

  // Fetch workers data from API
  useEffect(() => {
    const loadData = async () => {
      try {
        const res = await fetch("/api/workers")
        const data = await res.json()
        setWorkersData(data.data)
      } catch (error) {
        console.error("Error fetching workers:", error)
      } finally {
        setLoading(false)
      }
    }
    loadData()
  }, [])

  // Filter workers based on search input
  const filteredWorkers = allWorkers.filter(
    (worker) =>
      worker.pricePerDay > 0 &&
      worker.id !== null &&
      worker.name.toLowerCase().includes(debouncedSearch.toLowerCase())
  )

  // Pagination code here
  const totalPages = Math.ceil(filteredWorkers.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const paginatedWorkers = filteredWorkers.slice(startIndex, endIndex)

  // Reset to page 1 when search input change ho
  useEffect(() => {
    setCurrentPage(1)
  }, [debouncedSearch])

  return (<>
  
      <Navbar search={search} setSearch={setSearch} />
    <main className="container mx-auto px-4 py-10 bg-[#DBEAFE] min-h-screen">
      {/* Page Heading here */}
      <h1 className="text-4xl font-extrabold mb-8 text-center bg-gradient-to-r from-indigo-400 to-purple-600 bg-clip-text text-transparent">
        Our Workers
      </h1>


      {/* Search bar here for search a workers and sticy a search baar on top  */}
      {/* <SearchBar value={search} onChange={setSearch} /> */}

      {/* if user enter a page then show the loading skeleton here*/}
      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {Array.from({ length: 6 }).map((_, idx) => (
            <Loading key={idx} />
          ))}
        </div>
      ) : paginatedWorkers.length > 0 ? (
        <>
          {/* all workers list here from a api */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {paginatedWorkers.map((worker) => (
              <WorkerCard key={worker.id} worker={worker} />
            ))}
          </div>

          {/* Pagination controls here for view  previous and next page*/}
          <div className="flex justify-center items-center gap-4 mt-10">
            <PagiButtons onClick={() => setCurrentPage(p => Math.max(p - 1, 1))} disabled={currentPage === 1}>
              Previous
            </PagiButtons>

            <span className="font-semibold text-gray-800">
              Page {currentPage} of {totalPages}
            </span>

             <PagiButtons  onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              } 
              disabled={currentPage === totalPages} >
              Next
            </PagiButtons>
          </div>
        </>
      ) : (
        //  Reset to first page whenever the search input changes
        <p className="text-center text-gray-700 text-lg mt-10">
          No workers found for "<span className="font-semibold">{search}</span>"
        </p>
      )}

    </main>
      <Footer/>
    </>
  )
}
