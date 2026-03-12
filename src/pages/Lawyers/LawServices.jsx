import successLawyer from "../../../src/assets/images/success-lawyer.png"

const LawServices = () => {
    return (
        <div className="mt-24 text-black text-center">
            <h3 className="text-4xl font-bold text-center pb-7">We Provide Best Law Services</h3>
            <p>We provide reliable and professional legal services to help clients resolve their legal matters with confidence. Our experienced lawyers are dedicated to delivering effective solutions while maintaining integrity, trust, and commitment to justice.</p>
            <div className="grid grid-cols-4 gap-6 mt-8 mb-24">
                <div className="flex flex-col items-start gap-3 bg-[#F3F3F3] p-10 rounded-xl">
                    <img src={successLawyer} alt="" />
                    <h3 className="text-4xl font-bold">199+</h3>
                    < p className="text-gray-500">Total lawyer</p>
                </div>
                <div className="flex flex-col items-start gap-3 bg-[#F3F3F3] p-10 rounded-xl">
                    <img src={successLawyer} alt="" />
                    <h3 className="text-4xl font-bold">467+</h3>
                    <p className="text-gray-500">Total Reviews</p>
                </div>
                <div className="flex flex-col items-start gap-3 bg-[#F3F3F3] p-10 rounded-xl">
                    <img src={successLawyer} alt="" />
                    <h3 className="text-4xl font-bold">1990+</h3>
                    <p className="text-gray-500">Cases Initiated</p>
                </div>
                <div className="flex flex-col items-start gap-3 bg-[#F3F3F3] p-10 rounded-xl">
                    <img src={successLawyer} alt="" />
                    <h3 className="text-4xl font-bold">300+</h3>
                    <p className="text-gray-500">Total Stuffs</p>
                </div>
            </div>
        </div>
    );
};

export default LawServices;