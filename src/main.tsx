import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './compontents/Header.tsx'
import Footer from './compontents/Footer.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>

    <div className='container'>

      <Header/>
        <div className='content'>
          
        </div>
      <Footer/>

    </div>

    
  </StrictMode>,
)
