import React from 'react';
import Banner from '../Banner/Banner';
import Lawyers from '../Lawyers/Lawyers';
import LawServices from '../Lawyers/LawServices';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Lawyers></Lawyers>
            <LawServices></LawServices>
        </div>
    );
};

export default Home;