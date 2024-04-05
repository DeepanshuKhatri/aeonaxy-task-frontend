import React, { useEffect, useState } from "react";
import login_image from "../assets/images/login_image.jpeg";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ name: "", username: "", email: "", password: "" });
    const handleChange = (e) => {
        const { value, name } = e.target;
        setFormData((data) => ({ ...data, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        navigate("/profile")
    }

    return (
        <div className="flex w-full h-screen">
            <div className=" h-full md:block md:w-[370px] xl:w-[30%]  hidden flex  py-14 gap-3 flex-col text-left items-start bg-[#F3D783]">
                <h1 className="px-16">Dribble</h1>
                <h1 className="font-bold text-xl px-16">
                    Discover the world's top designer's and creatives.
                </h1>
                <img src={login_image} alt="login_image" />
            </div>
            <div className="flex w-[70%] flex-1 flex-col p-6 gap-7 items-center">
                <div className=" w-full mb-5 flex justify-end text-sm">
                    Already a member?&nbsp;<span className=" text-purple-700"> Sign In</span>
                </div>
                <div className="flex flex-col md:w-[80%] max-w-[500px] sm:w-[500px] xs:w-[80%] justify-start gap-16">
                    <p className="text-left text-[24px] font-bold">Sign Up to Dribble</p>
                    <form onSubmit={handleSubmit}>
                        <div className="flex flex-col md:flex-row md:gap-8 w-full ">
                            <div className="mb-10 flex-1">
                                <label htmlFor="name" className="block text-sm  font-bold">Name</label>
                                <input type="text" id="name" name="name" value={formData.name} onChange={(e) => handleChange(e)} className="mt-1 p-2 bg-[#F3F3F3] w-full border rounded-md" required />
                            </div>
                            <div className="mb-10 flex-1">
                                <label htmlFor="name" className="block text-sm  font-bold">Username</label>
                                <input type="text" id="username" name="username" value={formData.username} onChange={(e) => handleChange(e)} className="mt-1 p-2 bg-[#F3F3F3] border w-full rounded-md" required />
                            </div>
                        </div>
                        <div className="mb-10">
                            <label htmlFor="name" className="block text-sm  font-bold">Email</label>
                            <input id="email" name="email" type="email" value={formData.email} onChange={(e) => handleChange(e)} className="mt-1 p-2 w-full border bg-[#F3F3F3] rounded-md" required />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="name" className="block text-sm  font-bold">Password</label>
                            <input type="password" id="password" name="password" value={formData.password} onChange={(e) => handleChange(e)} className="mt-1 p-2 w-full border bg-[#F3F3F3] rounded-md" required />
                        </div>
                        <div className="mb-8 flex gap-3 items-start">
                            <input className="h-6 w-[40px]" type="checkbox" required />
                            <p className="text-[#424242] text-[16px] text-start">Creating an account means you're okay with our <a href="#" className="text-purple-700">Terms of service, Privacy Policy, </a> and out default <a href="#" className="text-purple-700">Notification Settings.</a></p>
                        </div>
                        <button type="submit" className="bg-[#EA4B8B] h-[40px] w-[200px] rounded-lg mb-6 text-white">Create Account</button>
                        <p className="text-[12px] text-[#424242]">This site is protected by reCAPTCHA and the Google </p>
                        <p className="text-[12px] text-[#424242]"><a className="text-purple-700 " href="#">Privacy Policy</a> and <a href="#" className="text-purple-700">Terms of Service</a> apply.</p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
