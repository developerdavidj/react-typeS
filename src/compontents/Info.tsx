const Info = () => {
    return <div className="flex justify-between items-center p-4  text-[#00a2f7] rounded-sm">

        <div className="flex px-2 flex-col py-4">
            <p className="font-bold">Pratique com projetos reais</p> 
            <p className="w-[700px] text-sm">Em vez de apenas ensinas teoia, focamos em código real para instapirar seu próximo projeto. Não precisa ser chato.</p>
            <button className="flex rounded-sm flex-col py-1 my-2 bg-[#00a2f7] w-32 text-white">Ver mais</button>
        </div>

        <div className="bg-white rounded-md py-3 px-2">
            <p className="font-bold text-sm">Curso Rápido</p>
            <p className="text-xs">Cursos Práticos de curta duração</p>
            <button className="w-46 mt-2 flex flex-col bg-white rounded-sm w-20 cursor-pointer border border-[#00a2f7]">Assistir</button>
        </div>
        
    </div>
}

export default Info; 