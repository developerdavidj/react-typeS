import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './compontents/Header.tsx'
import Footer from './compontents/Footer.tsx'
import Filter from './compontents/Filter.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>

    <div className='flex flex-col h-screen bg-[#F4FBFF]'>

      <Header/>
        <div className='flex-1 max-w-[1200px] m-auto w-full'>
          <Filter/>
        </div>
      <Footer/>

    </div>

    
  </StrictMode>,
)
