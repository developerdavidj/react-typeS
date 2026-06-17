import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './compontents/Header.tsx'
import Footer from './compontents/Footer.tsx'
import Filter from './compontents/Filter.tsx'
import Card from './compontents/Cardx.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>

    <div className='flex flex-col h-screen bg-[#F4FBFF]'>

      <Header/>
        <main className='flex-1 max-w-[1200px] m-auto w-full'>

          <Filter placeholder='Buscar seu curso' title="Busque o conteúdo que deseja assistir hoje" />
          
          <Card />
          
        </main>
      <Footer/>

    </div>

    
  </StrictMode>,
)
