    function Filter() {
    return (
        <div className="flex flex-col items-center">
            <p className="text-center font-bold text-[#00a2f7]">
                Busque o conteúdo que deseja assistir hoje
            </p>
            <p className="text-[#00a2f7] text-sm">
                Conteúdo exclusivo todos os dias 
            </p>

            <input 
            type="text"
            placeholder="Curso de React"
            className="bg-white border border-[#bfbdbd] rounded-md w-[615px] h-[45px] "
            />
        </div>
    )    
}

export default Filter;