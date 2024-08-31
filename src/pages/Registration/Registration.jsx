import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Registration = () => {
    const { createUser, loginWithGoogle } = useContext(AuthContext);
    const [showPassword, setShowPassword] = useState(false);

    // const handleToast = () => {

    // }

    const handleRegister = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = form.get('name')
        const email = form.get('email')
        const password = form.get('password')
        console.log(name, email, password);
        console.log(form)



        if (password.length < 6) {
            return toast('Password atleast 6 character or longer!!')
        }
        else if (!/^(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}[\]:;<>,.?~\\-])/.test(password)) {
            return toast('1 Character must be capital and a special symbol')
        }

        createUser(email, password)
            .then(result => {
                console.log(result.user);
                toast('User Create Successfully')
            })
            .catch(() => {
                toast('Email-already-in-use')
            })
    }

    const handleGoogle = () => {
        loginWithGoogle()
            .then(() => {
                toast('Login Success')
            })
            .catch(()=>{
                toast('error')
            })

    }

    return (
        <div>
            <div className=" shadow-2xl rounded-md bg-white p-8 md:w-1/2 mx-auto mt-12 font-semibold">

                <form onSubmit={handleRegister} className="space-y-4 ">
                    <h4 className="font-bold text-3xl">Please Registration</h4>
                    <input className=" mb-4 w-full py-4 rounded-md border ps-2" placeholder="Enter Your Name" type="text" name="name" id="" required /> <br />
                    <input className=" mb-4 w-full py-4 rounded-md border ps-2" placeholder="Enter Your Email" type="email" name="email" id="" required /><br />
                    <div className="relative">
                        <input
                            className="mb-4 w-full py-4 rounded-md border ps-2"
                            placeholder="Enter Your Password"
                            type={showPassword ? 'text' : 'password'}
                            name="password"
                            required />
                        <span className="absolute right-4 top-4 cursor-pointer" onClick={() => setShowPassword(!showPassword)}>
                            {
                                showPassword ?
                                    <FaEyeSlash className="text-2xl"></FaEyeSlash>
                                    :
                                    <FaEye className="text-2xl"></FaEye>
                            }
                        </span>
                    </div>
                    <br />
                    <button  className=" mb-4 w-full py-4 rounded-md ps-2 bg-gradient-to-r font-bold text-white from-pink-500 to-fuchsia-500">Register</button>
                    <ToastContainer></ToastContainer>
                </form>
                <p className="text-center mt-4">Already have an account? <Link className="ms-4 text-blue-500 font-bold" to='/login'>Login</Link></p>
            </div>
            <div className="text-center mt-12">
                <button onClick={handleGoogle} className="text-white btn btn-outline btn-secondary rounded-full px-24 font-bold hover:bg-gradient-to-r from-pink-500 to-fuchsia-500">Login with Google</button>
            </div>
        </div>
    );
};

export default Registration;