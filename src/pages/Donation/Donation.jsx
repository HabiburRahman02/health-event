import { useLoaderData } from "react-router-dom";
import Donate from "../Donate/Donate";
import Footer from "../Footer/Footer";


const Donation = () => {
    const donations = useLoaderData();
    console.log(donations)
    return (
        <div>
            <h3 className="text-3xl my-3 text-center">Our free blood name</h3>
            <div className="grid md:grid-cols-4 mb-6 gap-6">
                {
                    donations.map(donate => <Donate
                        key={donate.id}
                        donate={donate}
                    ></Donate>)
                }
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Donation;