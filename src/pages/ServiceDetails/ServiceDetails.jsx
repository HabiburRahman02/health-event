import { useLoaderData, useNavigate, useParams } from "react-router-dom";


const ServiceDetails = () => {
    const services = useLoaderData()
    const { id } = useParams()
    const idInt = parseInt(id);
    const service = services.find(service => service.id === idInt);
    const { image, longDescription } = service
    console.log(services, id, service)

    const navigate = useNavigate()
    const handleBack = () => {
        navigate(-1)
    }

    return (
        <div className="md:w-3/5 mx-auto space-y-3  mb-3 p-3">
            <img className="rounded-md" src={image} alt="" />
            <p className="text-2xl font-semibold text-justify">{longDescription}</p>
            <div className="text-center">
                <button onClick={handleBack} className="btn btn-secondary border-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-12 ">Back Home</button>
            </div>
        </div>
    );
};

export default ServiceDetails;