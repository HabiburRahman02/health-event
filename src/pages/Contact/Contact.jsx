import Footer from "../Footer/Footer";


const Contact = () => {
    return (
        <div>
            <div className="">
                <h2 className="text-4xl text-center my-4">Frequently Asked Questions</h2>
                <div className="collapse collapse-arrow bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 text-white mb-3">
                    <input type="radio" name="my-accordion-2" defaultChecked />
                    <div className="collapse-title text-xl font-medium">
                        What are the public health facilities in Bangladesh?
                    </div>
                    <div className="collapse-content">
                        <p>District hospitals, maternal and child welfare centers are considered to be on the secondary level. Upazila health complexes, union health & family welfare centers, and community clinics (lowest-level healthcare facilities) are the primary level healthcare providers.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 text-white mb-3">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">
                        Our hospital facilities?
                    </div>
                    <div className="collapse-content">
                        <p>24 hours ambulance service,
                            means all property or rights in property, real and personal, tangible and intangible, including all facilities suitable for providing hospital and health care services and including any and all structures, buildings, improvements, additions, extensions, replacements, appurtenances, lands, rights in land, furnishings, landscaping, approaches, roadways and other related and supporting facilities, now or hereafter owned, leased, operated or used, in whole or in part, by Virginia Commonwealth University as part of, or in connection with, the Medical College of Virginia Hospitals in the normal course of its operations as a teaching, research and medical treatment facility.
                        </p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 text-white mb-3">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">
                       More then 100 staff
                    </div>
                    <div className="collapse-content">
                        <p>Noun The entire staff has done a great job this year. The staff is at a meeting. She is a new member of the staff</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 text-white mb-3">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">
                       World best hospital
                    </div>
                    <div className="collapse-content">
                        <p>Noun The entire staff has done a great job this year. The staff is at a meeting. She is a new member of the staff</p>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Contact;