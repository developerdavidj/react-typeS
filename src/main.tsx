import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './compontents/Header.tsx'
import Footer from './compontents/Footer.tsx'
import Filter from './compontents/Filter.tsx'
import Card from './compontents/Card.tsx'
import Info from "./compontents/Info.tsx"

createRoot(document.getElementById('root')!).render(
  <StrictMode>

    <div className='flex flex-col h-screen bg-[#F4FBFF]'>

      <Header/>
        <main className='flex-1 max-w-[1200px] m-auto w-full'>

          <Filter placeholder='Buscar seu curso' title="Busque o conteúdo que deseja assistir hoje" />
          
          <div className=' mt-6 bg-white rounded-md p-4 '>

            <p className='text-[#00a2f7] font-bold text-center'>Os cursos mais buscados</p>
            
            <div className='grid grid-cols-5 gap-4 mt-4 justify-items-center'>

              <Card title="Fundamentos do React.js" duration="9h" img="./public/react.png" />

              <Card title="Fundamentos do Node.Js " duration="12h" img='./public/node.png'/>

              <Card title="Fundamentos do Next.Js" duration="10h" img='./public/nextjs.svg'/>

               <Card title="Curso de Tailwind CSS Fundamentos" duration="11h" img='./public/tailwind.png'/>

               <Card title="Curso de Vue.js Fundamentos" duration="11h" img='https://images.icon-icons.com/2107/PNG/512/file_type_vue_icon_130078.png'/>

            </div>
            
          </div>   
          <div className=' mt-6 py-4 rounded-md p-4 '>
            <Info />
          </div>   
        </main>
      <Footer/> 

    </div>
    
  </StrictMode>,
)
