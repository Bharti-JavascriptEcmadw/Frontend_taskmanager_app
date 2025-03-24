import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import axios from "axios";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate(); // Hook for navigation

    // const handleLogin = async (e) => {
    //     e.preventDefault();
    //     setError(""); // Reset error message

    //     try {
    //         const res = await axios.post("https://backend-keup.onrender.com/", { email, password });
    //         localStorage.setItem("token", res.data.token);
    //         navigate("/tasks"); // Redirect to TaskBoard
    //     } catch (error) {
    //         setError(error.response?.data?.error || "Login failed!");
    //     }
    // };

    return (
        <div className="flex min-h-screen bg-teal-800 justify-center items-center">
            <div className="bg-blue-200 shadow-lg rounded-lg p-8 w-full max-w-md">
                <h2 className="text-2xl font-bold text-center text-gray-800">Login</h2>

                {error && <p className="text-red-500 text-sm text-center mt-2">{error}</p>}

                <form className="mt-6">
                    <div className="mb-4">
                        <label className="block text-gray-600 font-medium">Email</label>
                        <input 
                            type="email"
                            className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-300 focus:outline-none"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-600 font-medium">Password</label>
                        <input 
                            type="password"
                            className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-300 focus:outline-none"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    <button 
                        onClick={()=>navigate("/")}
                        type="submit"
                        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 rounded-lg transition duration-300"
                    >
                        Login
                    </button>
                </form>

                <div className="text-center mt-4">
                    <p className="text-gray-600">
                        Don't have an account? 
                        <button onClick={() => navigate("/register")} className="text-blue-500 font-bold hover:underline">
                            Sign Up
                        </button>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;