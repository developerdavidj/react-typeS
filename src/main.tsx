import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './compontents/Header.tsx'
import Footer from './compontents/Footer.tsx'
import Filter from './compontents/Filter.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>

    <div className='container'>

      <Header/>
        <div className='content'>
          <Filter />
        </div>
      <Footer/>

    </div>

    
  </StrictMode>,
)
