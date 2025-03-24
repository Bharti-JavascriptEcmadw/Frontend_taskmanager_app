import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import axios from "axios";

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    // const handleRegister = async (e) => {
    //     e.preventDefault();
    //     setError(""); 
    //     try {
    //         await axios.post("https://backend-keup.onrender.com/", { name, email, password });
    //         navigate("/");
    //     } catch (error) {
    //         setError(error.response?.data?.error || "Registration failed!");
    //     }
    // };

    const handleRegister =async (e)=>{
    navigate("/")}

    
    return (
        <div className="flex min-h-screen items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500 p-6">
            <div className="bg-white bg-opacity-10 backdrop-blur-lg shadow-xl  p-8 w-full max-w-md border border-white border-opacity-20">
                <h2 className="text-3xl font-bold text-center text-white">Create Account</h2>

                {error && <p className="text-red-400 text-center mt-2">{error}</p>}

                <form onSubmit={handleRegister} className="mt-6">
                    <div className="mb-4">
                        <label className="block text-white font-medium">First Name</label>
                        <input 
                            type="text"
                            className="w-full px-4 py-2 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg focus:ring-2 focus:ring-blue-300 focus:outline-none text-white placeholder-gray-200"
                            placeholder="Enter your name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-white font-medium">Last Name</label>
                        <input 
                            type="text"
                            className="w-full px-4 py-2 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg focus:ring-2 focus:ring-blue-300 focus:outline-none text-white placeholder-gray-200"
                            placeholder="Enter your name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>


                    <div className="mb-4">
                        <label className="block text-white font-medium">Email</label>
                        <input 
                            type="email"
                            className="w-full px-4 py-2 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg focus:ring-2 focus:ring-blue-300 focus:outline-none text-white placeholder-gray-200"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-white font-medium">Password</label>
                        <input 
                            type="password"
                            className="w-full px-4 py-2 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg focus:ring-2 focus:ring-blue-300 focus:outline-none text-white placeholder-gray-200"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    <button 
                        onClick={()=>navigate("/")}
                        type="submit"
                        className="w-full bg-gray-900 hover:from-green-500 hover:to-green-700 text-white font-bold py-2 rounded-lg transition-transform transform hover:scale-105 duration-300"
                    >
                        Register
                    </button>
                </form>

                <div className="text-center mt-4">
                    <p className="text-white">
                        Already have an account? 
                        <button 
                            onClick={() => navigate("/")}
                            className="text-yellow-300 font-bold ml-1 hover:underline"
                        >
                            Login Here
                        </button>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Register;
