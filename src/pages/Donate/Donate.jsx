/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const Donate = ({ donate }) => {
    const { id, donorName, image, amount, date, bloodGroup, purpose, textColor, cardBackground, buttonBackground } = donate;
    return (
        <div style={{ backgroundColor: cardBackground }} className="p-6 space-y-1 shadow-2xl rounded-md">
            <img className="w-full rounded-md" src={image} alt="" />
            <h4 className="text-2xl font-semibold" style={{ color: textColor }} >{donorName}</h4>
            <p className="text-2xl">{bloodGroup}</p>
            <div>
                <Link to={`/donation/${id}`}>
                    <button className="text-white px-6 py-2" style={{ backgroundColor: buttonBackground, color: textColor }}>View Details</button>
                </Link>
            </div>
        </div>
    );
};

export default Donate;