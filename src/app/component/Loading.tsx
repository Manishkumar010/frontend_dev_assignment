import React from 'react'

const Loading = () => {
  return (
      <div className="bg-white rounded-2xl overflow-hidden shadow-md animate-pulse">
      <div className="w-full h-56 bg-gray-300"></div>
      <div className="p-6 space-y-3">
        <div className="h-4 bg-gray-300 rounded w-3/4"></div>
        <div className="h-3 bg-gray-200 rounded w-1/2"></div>
        <div className="h-5 bg-gray-300 rounded w-1/3"></div>
      </div>
    </div>
  )
}

export default Loading