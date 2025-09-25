'use client'
import { WorkerType } from '@/types/workers'
import Image from 'next/image'

// color deffined here for workers works show deffirent
const serviceColors: Record<string, string> = {
  Electrician: "bg-yellow-100 text-yellow-800",
  Mason: "bg-green-100 text-green-800",
  Roofer: "bg-blue-100 text-blue-800",
}

export default function WorkerCard({ worker, priority }: { worker: WorkerType, priority?: boolean }) {
  return (
    <div
      data-aos="fade-up"
      className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-transform duration-300 hover:-translate-y-1 group cursor-pointer"
    >
      <div className="relative w-full h-56 overflow-hidden">
        <Image
          loading="lazy"
          src={worker.image}
          alt={`Profile picture of ${worker.name}, providing ${worker.service}`}
          fill
          sizes="(max-width: 640px) 100vw,(max-width: 1024px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          priority={priority}
        />
      </div>
      <div className="p-6">
        <h2 className="text-xl font-bold mb-2">{worker.name}</h2>
        <span
          className={`inline-block mb-3 px-3 py-1 text-xs font-medium rounded-full ${serviceColors[worker.service] || "bg-indigo-100 text-indigo-700"}`}
        >
          {worker.service}
        </span>
        <p className="text-lg font-bold text-indigo-600">
          ₹{Math.round(worker.pricePerDay * 1.18).toLocaleString()}
          <span className="text-sm font-medium"> / day</span>
        </p>
      </div>
    </div>
  )
}
