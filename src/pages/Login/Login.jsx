import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {
    const { signIn, loginWithGoogle } = useContext(AuthContext);
    const [showPassword, setShowPassword] = useState(false);
    // const [loginSuccess, setLoginSuccess] = useState('')


    const handleToast = () => {

    }

    const handleLogin = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email')
        const password = form.get('password')
        console.log(email, password);

        // setLoginSuccess('')


        // if (email === 'me@gmail.com' && password === '111222A#') {
        //     toast('Login Successfully')
        // }
        // else {
        //     toast('failed')
        // }

        signIn(email, password)
            .then(result => {
                console.log(result.user);
                toast('Login Successfully')
            })
            .catch(error => {
                console.error(error)
                toast('Password or email does not match')
            })
    }

    const handleGoogle = () => {
        loginWithGoogle()
            .then(() => {
                toast('Login Success')
            })
            .catch()

    }

    return (
        <div>
            <div className=" shadow-2xl rounded-md bg-white p-8 md:w-1/2 mx-auto mt-12 font-semibold">
                <form onSubmit={handleLogin} className="space-y-4">
                  
                    <h4 className="font-bold text-3xl">Please Login</h4>
                    <input className=" mb-4 w-full py-4 rounded-md border ps-2" placeholder="Enter Your Email" type="email" name="email" id="" required /><br />
                    <div className="relative">
                        <input
                            className=" mb-4 w-full py-4 rounded-md border ps-2"
                            placeholder="Enter Your Password"
                            type={showPassword ? 'text' : 'password'}
                            name="password"
                            id="" required />
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
                    <button onClick={handleToast} className=" mb-4 w-full py-4 rounded-md ps-2 bg-gradient-to-r font-bold text-white from-pink-500 to-fuchsia-500">Login</button>
                    <ToastContainer></ToastContainer>
                </form>
                <p className="text-center mt-4">Do not have an account? <Link className="ms-4 text-blue-500 font-bold" to='/registration'>Registration</Link></p>
            </div>
            <div className="text-center mt-12">
                <button onClick={handleGoogle} className="btn btn-outline btn-secondary rounded-full px-24 font-bold hover:bg-gradient-to-r from-pink-500 to-fuchsia-500">Login with Google</button>
            </div>
        </div>
    );
};

export default Login;