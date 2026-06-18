import { useState } from "react";
import { Lock, TvMinimalPlay } from "lucide-react";

const Info = () => {
    const [show, setShow] = useState(false);
 
    return <div className="flex justify-between items-center  text-[#00a2f7] rounded-sm">

        <div className="flex flex-col py-4 px-2 bg-white rounded-md">
            <p className="font-bold">Pratique com projetos reais</p> 
            <p className="w-[700px] text-sm">Em vez de apenas ensinas teoia, focamos em código real para instapirar seu próximo projeto. Não precisa ser chato.</p>        
            <div className="flex items-center gap-2 mt-4">         
                <button className="flex rounded-sm justify-center items-center gap-2 py-1 my-2 bg-[#00a2f7] w-42 cursor-pointer hover:open: text-white" onClick={() => setShow(!show)}>
                    
                            <Lock size={16} /> Desbloquear curso
                </button>
                    {show && (
                        <p className="text-sm  text-[#00a2f7]  flex items-center gap-2 font-bold cursor-pointer  " onClick={() => alert("Redirecionando para o curso...")}>
                            <TvMinimalPlay size={16} />  Clique para assistir!
                        </p>
                        
                    )}
            </div>   
        </div>
        <div className="bg-white rounded-md py-3 px-2">
            <p className="font-bold text-sm">Curso Rápido</p>
            <p className="text-xs">Cursos Práticos de curta duração</p>
            <button className="w-46 mt-2 flex flex-col bg-white rounded-sm w-20 cursor-pointer border border-[#00a2f7]">Assistir</button>
        </div>
        
    </div>
}

export default Info; 