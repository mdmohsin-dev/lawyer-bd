import { useContext } from 'react';
import { LawyerContext } from '../../providers/LawyerProvider';
import DisplayBookings from './DisplayBookings';
import Chart from '../../components/chart/chart';

const MyBookings = () => {

    const { lawyers, storedLawyer } = useContext(LawyerContext)

    const bookdLawyers = lawyers.filter(lawyer => storedLawyer.includes(lawyer.id))

    return (
        <div>
            <Chart></Chart>
            <div className='text-center text-black mt-10'>
                <h1 className='text-4xl font-bold'>My Appointmets</h1>
                <p className='pt-4'>Our platform connects you with verified, experienced Lawyers across various specialties — all at your convenience.</p>

                <div className='mt-16'>
                    {
                        bookdLawyers.map(bookedLawyer => <DisplayBookings key={bookedLawyer.id} bookedLawyer={bookedLawyer}></DisplayBookings>)
                    }
                </div>

            </div>
        </div>
    );
};

export default MyBookings;