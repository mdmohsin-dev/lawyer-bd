import React, { useContext } from 'react';
import { LawyerContext } from '../../providers/LawyerProvider';
import Swal from 'sweetalert2';

const DisplayBookings = ({ bookedLawyer }) => {
    const { name, type, consultationFee, id } = bookedLawyer
    const { storedLawyer, setStoredLawyer } = useContext(LawyerContext)

    const handleCancleAppointment = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You want to cancel this appointment.",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "Appointment canceled",
                    icon: "success"
                });
                const remainingLawyers = storedLawyer.filter(lawyer => lawyer !== id)
                localStorage.setItem("lawyer", JSON.stringify(remainingLawyers))
                setStoredLawyer(remainingLawyers)
            }
        });
    }

    return (
        <div className='border border-[#14141426] p-6 rounded-2xl mb-12'>
            <div className='flex justify-between items-center'>
                <div className=' flex flex-col items-start gap-1'>
                    <p className='text-2xl font-bold'>{name}</p>
                    <p>{type}</p>
                </div>
                <p>Appointment Fee: {consultationFee}</p>
            </div>
            <button onClick={() => handleCancleAppointment(id)}
                className='cursor-pointer border bg-transparent w-full py-3 rounded-3xl border-red-500 text-red-500 mt-7 font-medium'>Cancel Appointment</button>
        </div>
    );
};

export default DisplayBookings;