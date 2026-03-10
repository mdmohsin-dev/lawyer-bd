import bannerImg from "../../../src/assets/images/banner-img-1.png"

const Banner = () => {
    return (
        <div className="mt-8 text-white flex flex-col justify-center items-center text-center bg-no-repeat bg-center md:h-138 px-20 gap-6 rounded-3xl" style={{backgroundImage:`url(${bannerImg})`}}>
            <h2 className="text-5xl font-semibold">It avoids subjective claims or exaggeration that might raise red flags legally</h2>
            <p className="text-gray-400">Our platform connects you with verified, experienced lawyers across various legal specialties — all at your convenience. Whether you need legal advice, contract assistance, or help with a legal dispute, you can easily find and consult the right lawyer. Book consultations in minutes and get professional legal support you can trust.</p>
        </div>
    );
};

export default Banner;