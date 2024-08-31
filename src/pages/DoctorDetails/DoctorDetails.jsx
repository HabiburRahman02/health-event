import { Link, useLoaderData, useParams } from "react-router-dom";

const DoctorDetails = () => {
    const doctors = useLoaderData()
    const { id } = useParams();
    const idInt = parseInt(id);
    const doctor = doctors.find(dr => dr.id === idInt);

    const { name, specialty, degree, experience, image } = doctor;
    console.log(doctor, idInt)
    return (
        <div className="mt-12 p-12 md:w-1/2 shadow-2xl font-semibold space-y-3 rounded-md mx-auto text-center ">
            <img className="w-36 h-36 rounded-full mx-auto border-4 border-t-red-400 border-r-blue-400 border-s-green-400 border-b-fuchsia-400" src={image} alt="" />
            <p className="font-bold text-2xl text-red-500">Hi, I am {name}</p>
            <p>Specialist: {specialty}</p>
            <p className="">{experience} experiences</p>
            <p>{degree}</p>
            <div>
                <Link to='/'>
                    <button className="btn btn-secondary border-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-12 ">Back Home</button>
                </Link>
            </div>
        </div>
    );
};

export default DoctorDetails;