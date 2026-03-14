import { useContext } from 'react';
import { LawyerContext } from '../../providers/LawyerProvider';
import DisplayBookings from './DisplayBookings';
// import Chart from '../../components/chart/chart';

const MyBookings = () => {

    const { lawyers, storedLawyer } = useContext(LawyerContext)

    const bookdLawyers = lawyers.filter(lawyer => storedLawyer.includes(lawyer.id))

    return (
        <div>
            {/* <Chart></Chart> */}
            <div className='text-center text-black mt-10'>
                <h1 className='md:text-4xl text-3xl font-bold'>My Appointmets</h1>
                <p className='pt-4'>Our platform connects you with verified, experienced Lawyers across various specialties — all at your convenience.</p>

                {
                    bookdLawyers.length < 1 ?
                        <div className='bg-[#F3F3F3] py-10 px-7 md:py-20 md:px-14 text-black text-center rounded-2xl my-14'>
                            <h3 className='md:text-3xl text-2xl font-bold'>No appointments booked yet.</h3>
                        </div>
                        :
                        <div className='mt-16'>
                            {
                                bookdLawyers.map(bookedLawyer => <DisplayBookings key={bookedLawyer.id} bookedLawyer={bookedLawyer}></DisplayBookings>)
                            }
                        </div>
                }

            </div>
        </div>
    );
};

export default MyBookings;