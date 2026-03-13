import bannerImg from "../../../src/assets/images/banner-img-1.png"

const Banner = () => {
    return (
        <div className="mt-8 text-white flex flex-col justify-center items-center text-center bg-no-repeat bg-center bg-cover md:h-138 lg:px-20 px-6 gap-6 rounded-3xl py-10" style={{backgroundImage:`url(${bannerImg})`}}>
            <h2 className="lg:text-5xl md:text-4xl text-2xl font-semibold">It avoids subjective claims or exaggeration that might raise red flags legally</h2>
            <p className="text-gray-400">Our platform connects you with verified, experienced lawyers across various legal specialties — all at your convenience. Whether you need legal advice, contract assistance, or help with a legal dispute.</p>
        </div>
    );
};

export default Banner;