import { FaSmile } from "react-icons/fa";
import { BsEmojiHeartEyes, BsEmojiSunglassesFill } from "react-icons/bs";

const CustomerFeedback = () => {

    return (
        <div className="my-12">
            <h3 className="text-2xl font-bold mb-3">Patient Feedback</h3>
            <div className="grid md:grid-cols-3 gap-8">
                <div className="shadow-2xl space-y-3 p-8 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-md">
                    <FaSmile className="mx-auto text-7xl"></FaSmile>
                    <h6 className="font-bold text-xl">I am Jakir</h6>
                    <p className="font-semibold">Excellent service and great communication. The doctor was very knowledgeable.</p>
                    <p className="font-semibold">Thank you</p>
                </div>
                <div className="shadow-2xl p-8 space-y-3 bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white rounded-md">
                    <BsEmojiHeartEyes className="mx-auto text-7xl"></BsEmojiHeartEyes>
                    <h6 className="font-bold text-xl">I am Saddam</h6>
                    <p className="font-semibold">Excellent service and great communication. The doctor was very knowledgeable.</p>
                    <p className="font-semibold">Thank you so much</p>
                </div>
                <div className="shadow-2xl p-8 bg-gradient-to-r space-y-3 from-cyan-500 to-blue-500 text-white rounded-md">
                    <BsEmojiSunglassesFill className="mx-auto text-7xl"></BsEmojiSunglassesFill>
                    <h6 className="font-bold text-xl">I am Sumaiya</h6>
                    <p className="font-semibold">Excellent service and great communication. The doctor was very knowledgeable.</p>
                    <p className="font-semibold">Thank you</p>
                </div>
            </div>
        </div>
    );
};

export default CustomerFeedback;