import { BsEmojiAngryFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className=" mt-48 ">
            <div className="flex justify-center">
                <h4 className="text-3xl flex items-center  text-red-500 font-bold ">
                    <span className="mr-4">Opsss Error</span>
                    <BsEmojiAngryFill></BsEmojiAngryFill>
                </h4> <br />
            </div>
            <div className="text-center mt-6">
                <button className="btn btn-secondary "><Link to='/'>Back Home</Link></button>

            </div>
        </div>
    );
};

export default ErrorPage;