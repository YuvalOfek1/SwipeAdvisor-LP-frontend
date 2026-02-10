import { useCallback, useEffect, useState } from 'react'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Metrics from './components/Metrics/Metrics'
import VideoPlaceholder from './components/VideoPlaceholder/VideoPlaceholder'
import VideoModal from './components/VideoModal/VideoModal'
import Waitlist from './components/Waitlist/Waitlist'
import Footer from './components/Footer/Footer'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Bounce, ToastContainer } from 'react-toastify'

function App() {
  const [demoOpen, setDemoOpen] = useState(false)
  const queryClient = new QueryClient()

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement).closest('a[href="#demo"]')
      if (anchor) {
        e.preventDefault()
        setDemoOpen(true)
      }
    }
    document.addEventListener('click', handler)
    return () => document.removeEventListener('click', handler)
  }, [])

  const closeDemo = useCallback(() => setDemoOpen(false), [])

  return (
    <QueryClientProvider client={queryClient}>
       <ToastContainer
      position="bottom-center"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick={false}
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
      transition={Bounce}
    />
    <div className="page">
      <Header />
      <main>
        <Hero />
        <Waitlist />
        <VideoPlaceholder />
        <Metrics />
        {/* <Features /> */}
      </main>
      <Footer />
    </div>
    {demoOpen && <VideoModal onClose={closeDemo} />}
   
    </QueryClientProvider>
    
  )
}

export default App
