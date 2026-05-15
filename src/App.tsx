import { useState, useEffect, Suspense, lazy } from 'react'
import Home from './pages/Home'

const Docs = lazy(() => import('./pages/Docs'))

function App() {
  const [path, setPath] = useState(window.location.pathname)

  useEffect(() => {
    const handleLocationChange = () => {
      setPath(window.location.pathname)
    }

    window.addEventListener('popstate', handleLocationChange)
    
    // Intercept link clicks for manual routing
    const handleLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const link = target.closest('a')
      if (link && link.href.includes(window.location.origin)) {
        e.preventDefault()
        window.history.pushState({}, '', link.href)
        handleLocationChange()
      }
    }

    window.addEventListener('click', handleLinkClick)
    return () => {
      window.removeEventListener('popstate', handleLocationChange)
      window.removeEventListener('click', handleLinkClick)
    }
  }, [])

  return (
    <Suspense fallback={
      <div className="min-h-screen bg-[#0A0A0A] flex items-center justify-center">
        <div className="flex flex-col items-center gap-6">
          <div className="w-12 h-12 rounded-full border-2 border-[#E4FF9C]/20 border-t-[#E4FF9C] animate-spin" />
          <span className="text-[10px] font-mono text-white/40 uppercase tracking-[0.4em] animate-pulse">Initializing Laboratory</span>
        </div>
      </div>
    }>
      {path.startsWith('/docs') ? <Docs /> : <Home />}
    </Suspense>
  )
}

export default App
