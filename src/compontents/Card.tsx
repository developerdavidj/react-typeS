type CardProps = {
    title?: string;
    duration?: string;
    img?: string;
}

const Card = ({title, duration, img}: CardProps) => {

    return(
        <div className="border border-[#00a2f7] w-[220px] rounded-sm p-4">
            <img src={img} className="mx-auto w-32 w-[134px] h-[134px] object-cover" />
            <p className="text-[#00a2f7] font-bold mt-1.5">{title}</p>
            <p className="text-[#00a2f7] text-sm mt-1">{duration}</p>
            <button className='bg-[#00a2f7] text-white py-1 rounded-sm text-sm w-full cursor-pointer mt-2'>Inscreva-se</button>
        </div>
    )
}

export default Card;