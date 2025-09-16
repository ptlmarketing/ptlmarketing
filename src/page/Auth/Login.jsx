import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { login } from "../../utility/Auth";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Loader from "../../components/Loader";
import { loginUserAPIService } from "../../service/apiService";
import { toast } from "react-toastify";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false); // ✅ Show/Hide password state
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
  setLoading(true);
  try {
    const res = await loginUserAPIService(data);
    // console.log(res?.token);
    if (res?.success) {
      localStorage.setItem("authToken", res?.token);
      toast.success(res?.message)
      navigate("/dashboard");
    } else {
      alert(res.data.message || "Login failed");
    }
  } catch (error) {
    console.error(error);
     toast.success(res?.message)
    alert(error.response?.data?.message || "Login failed");
  } finally {
    setLoading(false);
  }
};


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 p-4">
      <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white text-center mb-6">
          Admin Login
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Username */}
          <div>
            <label className="block mb-1 text-gray-700 dark:text-gray-200 font-medium">
              Username
            </label>
            <input
              type="text"
              {...register("name", { required: "Username is required" })}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
              placeholder="Enter your username"
            />
            {errors.name && (
              <span className="text-red-500 text-sm">
                {errors.name.message}
              </span>
            )}
          </div>

          {/* Password */}
          <div className="relative">
            <label className="block mb-1 text-gray-700 dark:text-gray-200 font-medium">
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"} // Toggle type
              {...register("password", { required: "Password is required" })}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
              placeholder="Enter your password"
            />
            {/* Show/Hide icon */}
            <div
              className="absolute right-3 top-9 cursor-pointer text-gray-500 dark:text-gray-300"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </div>
            {errors.password && (
              <span className="text-red-500 text-sm">
                {errors.password.message}
              </span>
            )}
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full flex justify-center items-center gap-2 text-white px-4 py-2 rounded button-color transition-colors ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {loading ? (
              <>
                <Loader /> Logging in...
              </>
            ) : (
              <>Login</>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
