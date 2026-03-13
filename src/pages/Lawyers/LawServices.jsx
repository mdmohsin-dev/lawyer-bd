import successLawyer from "../../../src/assets/images/success-lawyer.png"
import successReview from "../../../src/assets/images/success-review.png"
import intiated from "../../../src/assets/images/success-patients.png"
import stuffs from "../../../src/assets/images/success-staffs.png"
import CountUp from "react-countup";

const LawServices = () => {
    return (
        <div className="md:mt-24 mt-18 text-black text-center">
            <h3 className="text-4xl font-bold text-center pb-7">We Provide Best Law Services</h3>
            <p>We provide reliable and professional legal services to help clients resolve their legal matters with confidence. Our experienced lawyers are dedicated to delivering effective solutions while maintaining integrity, trust, and commitment to justice.</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8 mb-24">
                <div className="flex flex-col items-center gap-3 bg-[#F3F3F3] p-10 rounded-xl">
                    <img src={successLawyer} alt="" />
                    <h3 className="text-4xl font-bold"><CountUp end={199} duration={4} enableScrollSpy={true} ></CountUp>+</h3>
                    < p className="text-gray-500">Total lawyer</p>
                </div>
                <div className="flex flex-col items-center gap-3 bg-[#F3F3F3] p-10 rounded-xl">
                    <img src={successReview} alt="" />
                    <h3 className="text-4xl font-bold"><CountUp end={467} duration={4} enableScrollSpy={true} ></CountUp>+</h3>
                    <p className="text-gray-500">Total Reviews</p>
                </div>
                <div className="flex flex-col items-center gap-3 bg-[#F3F3F3] p-10 rounded-xl">
                    <img src={intiated} alt="" />
                    <h3 className="text-4xl font-bold"><CountUp end={1990} duration={4} enableScrollSpy={true} ></CountUp>+</h3>
                    <p className="text-gray-500">Cases Initiated</p>
                </div>
                <div className="flex flex-col  items-center gap-3 bg-[#F3F3F3] p-10 rounded-xl">
                    <img src={stuffs} alt="" />
                    <h3 className="text-4xl font-bold"><CountUp end={300} duration={4} enableScrollSpy={true} ></CountUp>+</h3>
                    <p className="text-gray-500">Total Stuffs</p>
                </div>
            </div>
        </div>
    );
};

export default LawServices;