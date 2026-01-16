import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Metrics from './components/Metrics/Metrics'
import VideoPlaceholder from './components/VideoPlaceholder/VideoPlaceholder'
import Features from './components/Features/Features'
import Waitlist from './components/Waitlist/Waitlist'
import Footer from './components/Footer/Footer'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

function App() {

  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
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
    </QueryClientProvider>
  )
}

export default App
