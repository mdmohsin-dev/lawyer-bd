import { Link } from 'react-router';

const Error = () => {
    return (
        <div className='min-h-screen text-white flex flex-col justify-center items-center gap-7'>
            <h1 className='text-5xl font-semibold'>Opss !</h1>
            <h3 className='text-2xl'>Page not found</h3>
            <Link className='btn' to='/'>Home</Link>
        </div>
    );
};

export default Error;