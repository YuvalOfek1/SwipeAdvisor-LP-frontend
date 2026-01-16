import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Metrics from './components/Metrics/Metrics'
import VideoPlaceholder from './components/VideoPlaceholder/VideoPlaceholder'
import Waitlist from './components/Waitlist/Waitlist'
import Footer from './components/Footer/Footer'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Bounce, ToastContainer } from 'react-toastify'

function App() {

  const queryClient = new QueryClient()
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
   
    </QueryClientProvider>
    
  )
}

export default App
