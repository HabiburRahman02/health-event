import { useLoaderData } from "react-router-dom";
import Slider from "../Slider/Slider";
import Services from "../Service/Service";
import { useEffect, useState } from "react";
import Doctor from "../Doctor/Doctor";
import CustomerFeedback from "../CustomerFeedback/CustomerFeedback";
import Footer from "../Footer/Footer";


const Home = () => {
    const services = useLoaderData();

    const [doctors, setDoctors] = useState([])
    useEffect(() => {
        fetch('doctors.json')
            .then(res => res.json())
            .then(data => setDoctors(data))
    }, [])
    return (
        <div>
            <Slider></Slider>
            <div>
                <h3 className="font-bold text-2xl mt-12 mb-6">All Health Services Here</h3>
                <div className="grid md:grid-cols-3 gap-8">
                    {
                        services.map(service => <Services
                            key={service.id}
                            service={service}
                        ></Services>)
                    }
                </div>
                <h3 className="font-bold text-2xl mt-12 mb-6">Our Doctors</h3>
                <div className="grid md:grid-cols-3 gap-8">
                    {
                        doctors.map(doctor => <Doctor
                            key={doctor.id}
                            doctor={doctor}
                        ></Doctor>)
                    }
                </div>
            </div>
            <CustomerFeedback></CustomerFeedback>
            <Footer></Footer>
        </div>
    );
};

export default Home;