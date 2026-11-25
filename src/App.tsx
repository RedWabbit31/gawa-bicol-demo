import { Routes, Route, Link } from 'react-router-dom'
import { useEffect } from 'react'
import { supabase } from './lib/supabase'

function Home() {
  useEffect(() => {
    supabase.auth.getSession().then(({ error }) => {
      console.log(error ? 'Supabase error: ' + error.message : 'Supabase connected')
    })
  }, [])

  return (
    <div className="min-h-screen bg-emerald-50 flex flex-col items-center justify-center gap-4">
      <h1 className="text-3xl font-bold text-emerald-700">Gawa Bicol</h1>
      <Link to="/workers" className="rounded-lg bg-emerald-600 px-4 py-2 text-white">
        Kailangan ko ng tao
      </Link>
    </div>
  )
}

function Workers() {
  return (
    <div className="min-h-screen bg-emerald-50 p-6">
      <Link to="/" className="text-emerald-700 underline">Back</Link>
      <h2 className="mt-4 text-2xl font-bold text-emerald-700">Workers</h2>
    </div>
  )
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/workers" element={<Workers />} />
    </Routes>
  )
}