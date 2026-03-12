import { useContext } from 'react';
import { LawyerContext } from '../../providers/LawyerProvider';
import { useParams } from 'react-router';

const LawyersDetails = () => {

    const { lawyers } = useContext(LawyerContext)
    const { id } = useParams()


    const lawyer = lawyers?.find(lawyer => lawyer.id === id)

    if (!lawyer) {
        return <p>Loading..</p>
    }
    const date = new Date()
    const weekDay = date.toLocaleDateString("en-US", { weekday: "long" })

    const { image, name, type, yearsOfExperience, consultationFee, availability, licenseNo } = lawyer

    return (
        <div className='mt-8'>
            <div className='bg-[#F3F3F3] py-20 px-14 text-black text-center rounded-2xl'>
                <h3 className='text-3xl font-bold'>Lawyer’s Profile Details</h3>
                <p className='pt-4'>He is a dedicated legal professional with experience in handling various legal matters. He focuses on understanding clients’ needs and providing effective legal solutions. His work reflects professionalism, integrity, and a strong commitment to justice.</p>
            </div>
            <div className="w-full border border-[#14141426] p-5 flex items-center gap-10 rounded-xl mt-8 text-black">
                <img className="w-56 h-56 rounded-xl" src={image} alt="" />
                <div className="w-full">
                    <p className='bg-blue-50 text-blue-500 py-1 px-4 rounded-3xl w-48 text-center'>{yearsOfExperience}+ Years Experience</p>
                    <h3 className="text-2xl font-bold pt-4">{name}</h3>
                    <p className="py-4">{type}</p>
                    <div className='flex items-center gap-10'>
                        <p>Consultation Fee: {consultationFee}</p>
                        <p>License No: {licenseNo}</p>
                    </div>
                    <div className='flex gap-4 items-center mt-4'>
                        Availability{
                            availability.map(avilable => <p className='bg-green-50 text-green-500 py-1 px-4 rounded-3xl'>{avilable}</p>)
                        }
                    </div>
                </div>
            </div>
            <div className="w-full border border-[#14141426] p-8 rounded-xl mt-8 text-black mb-20">
                <h3 className='text-2xl font-bold text-center'>Book an Appointment</h3>
                <div className='flex items-center gap-3'>
                    <p className='font-semibold text-lg'>Availability:</p>
                    {availability.includes(weekDay) ? <p className='bg-green-50 text-green-500 w-44 text-center py-1 px-4 rounded-3xl'>Available Today</p> : <p className='bg-red-50 text-red-500 w-44 text-center py-1 px-4 rounded-3xl'>Unavailable Today</p>}
                </div>
                <button className='btn w-full p-6 text-lg mt-9 bg-[#0EA106] border-none rounded-3xl'>Book Appointment Now</button>
            </div>

        </div>
    );
};

export default LawyersDetails;