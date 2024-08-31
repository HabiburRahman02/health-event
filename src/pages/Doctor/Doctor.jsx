/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { FaArrowRight, FaFacebook, FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";


const Doctor = ({ doctor }) => {
    const { id, name, specialty, degree, experience, image } = doctor;
    return (
        <div className="p-8  border-2 shadow-lg space-y-2 rounded-lg hover:border-b-red-400 hover:border-t-green-400 hover:border-l-fuchsia-400 hover:border-r-amber-400 hover:bg-gradient-to-r from-indigo-50 via-purple-50 to-red-50 duration-100">
            <img className="w-full rounded-md" src={image} alt="" />
            <h3 className="text-red-600 text-center font-semibold text-2xl">{name}</h3>
            <p className="font-semibold">{specialty}</p>
            <p>{degree}</p>
            <div className="flex gap-4">
                <a className="border h-8 w-8 rounded-full flex justify-center items-center hover:bg-gradient-to-r from-green-300 from-10% via-purple-300 " href=""> <FaFacebookF></FaFacebookF></a>
                <a className="border h-8 w-8 rounded-full flex justify-center items-center hover:bg-gradient-to-r from-pink-300 from-10% via-blue-300 " href=""> <FaTwitter></FaTwitter></a>
                <a className="border h-8 w-8 rounded-full flex justify-center items-center hover:bg-gradient-to-r from-indigo-300 from-10% via-sky-300 " href=""> <FaInstagram></FaInstagram></a>
            </div>
            <div>
                <Link className="" to={`/doctor/${id}`}>
                        <button className="text-white flex items-center  px-6 py-3 bottom-2 font-semibold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ">Doctors Details
                            <FaArrowRight className="ms-2"></FaArrowRight>
                        </button>
                </Link>
            </div>
        </div>
    );
};

export default Doctor;