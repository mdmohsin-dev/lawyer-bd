import { Link } from "react-router";

const Lawyer = ({lawyer}) => {
    const {image,name,type,status,id}=lawyer



    return (
        <div className="w-full border border-[#14141426] p-5 flex items-center gap-10 rounded-xl">
            <img className="w-48 h-48 rounded-xl" src={image} alt="" />
            <div className="w-full">
                <h3 className="text-2xl font-bold">{name}</h3>
                <p className="py-3">{type}</p>
                <p className={`${status==='available'?'bg-green-50 text-green-500':'bg-red-50 text-red-500'} w-26 text-center py-1 font-semibold rounded-3xl`}>{status}</p>
                <Link to={`/lawyerDetails/${id}`}
                className="inline-block text-center py-2 rounded-3xl mt-4 w-full border border-[#8BB4F2] text-[#176AE5]">View Details</Link>
            </div>
        </div>
    );
};

export default Lawyer;