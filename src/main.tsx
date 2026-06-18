import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './compontents/Header.tsx'
import Footer from './compontents/Footer.tsx'
import Filter from './compontents/Filter.tsx'
import Card from './compontents/Card.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>

    <div className='flex flex-col h-screen bg-[#F4FBFF]'>

      <Header/>
        <main className='flex-1 max-w-[1200px] m-auto w-full'>

          <Filter placeholder='Buscar seu curso' title="Busque o conteúdo que deseja assistir hoje" />
          
          <div className='gap-4 mt-6 bg-white rounded-md py-2'>

            <p className='text-[#00a2f7] font-bold text-center'>Os cursos mais buscados</p>
            
            <div className='grid grid-cols-4 gap-2 p-2'>

              <Card title="Fundamentos do React.js" duration="9h" img="./public/react.png" />

              <Card title="Fundamentos do Nest.Js Intermediário" duration="12h" img='./public/node.png'/>

              <Card title="Fundamentos do Next.Js" duration="10h" img='./public/nextjs.svg'/>

              <Card title="Curso de Tailwind CSS Fundamentos" duration="11h" img='./public/tailwind.png'/>

            </div>

          </div>      
    
        </main>
      <Footer/> 

    </div>
    
  </StrictMode>,
)
