import { useLoaderData, useParams } from "react-router-dom";


const DonateDetails = () => {
    const donations = useLoaderData();
    const { id } = useParams()
    const idInt = parseInt(id)
    const donation = donations.find(don => don.id === idInt)
    const { donorName, amount, image, date, textColor, purpose, buttonBackground } = donation
    console.log(donations, id, idInt, donation)
    return (
        <div className="space-y-2 mb-4">
            <div className="relative">
                <img className="w-full rounded-t-md" src={image} alt="" />
                <div className="w-full bg-gray-500 py-14 px-6 "><button className="absolute bottom-0  px-6 py-3 rounded-md shadow-2xl mb-8" style={{ backgroundColor: buttonBackground, color: textColor }}>Donate ${amount}</button></div>
            </div>
            <p className="text-2xl font-semibold">{purpose}</p>
            <h3 style={{ color: textColor }}>Date: {date}</h3>
        </div>
    );
};

export default DonateDetails;