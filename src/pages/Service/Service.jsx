/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const Services = ({ service }) => {
    // const  {id} = useParams()
    const { id, name, description, price, image, } = service;
    return (
        <div className="p-8  shadow-2xl space-y-2 rounded-md">
            <img className="w-full rounded-md" src={image} alt="" />
            <h3 className="text-red-600 font-semibold text-2xl">{name}</h3>
            <p className="font-semibold">Price: ${price}</p>
            <p >{description}</p><br />
            <Link to={`/service/${id}`} className="mt-4">
                <button className="bg-gradient-to-r from-purple-500 to-pink-500 py-3 rounded-md text-white font-semibold w-full">Accept Service</button>
            </Link>
        </div>
    );
};

export default Services;