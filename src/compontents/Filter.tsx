    import { Search, TypeIcon } from 'lucide-react';
    
    type FilterProps = {
            title: string
            placeholder: string
        }
    
    function Filter({title, placeholder}: FilterProps) {
        return (
        
            <div className="flex flex-col items-center mt-10">
                        
                <p className="text-center font-bold text-[#00a2f7] text-xl">
                        Busque o conteúdo que deseja assistir hoje
                    </p>

                    <p className="text-[#00a2f7] text-sm">
                        Conteúdo exclusivo todos os dias 
                    </p>
                    <h2>{title}</h2> 

                <div className="flex gap-2 items-center mt-2">
                    
                    <input 
                    type="text"
                    placeholder="Curso de React"
                    className="bg-white border border-[#bfbdbd] rounded-md w-153.75 h-[45px] text-xs px-2" 
                    />

                    <div className='h-[45px] w-[35px] flex justify-center items-center rounded-md bg-[#e1f4ff] '>
                        <Search size={16} className='text-[#00a2f7]' cursor-pointer />
                    </div>  

                </div>
            </div>
    )    
}

export default Filter;