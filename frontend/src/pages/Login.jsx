import { useState } from "react";
import { loginUser } from "../services/authService";
import toast from "react-hot-toast";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = await loginUser(formData);

      localStorage.setItem("token", data.token);

      localStorage.setItem("user", JSON.stringify(data.user));

      toast.success(data.message);

      // ROLE BASED REDIRECTION
      if (data.user.role === "admin") {
        navigate("/admin-complaints");
      } else if (data.user.role === "committee") {
        navigate("/committee-dashboard");
      } else {
        navigate("/student-dashboard");
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="min-h-screen flex bg-gradient-to-br from-blue-100 via-white to-indigo-100">
      {/* LEFT SECTION */}
      <div className="hidden lg:flex w-1/2 flex-col justify-center px-20">
        <h1 className="text-6xl font-bold text-gray-800 leading-tight">
          Smart University <br />
          Grievance Management
        </h1>

        <p className="mt-8 text-xl text-gray-600 leading-relaxed max-w-xl">
          Raise complaints, track resolutions, and communicate seamlessly with
          university administration through one centralized platform.
        </p>

        <div className="flex gap-6 mt-10">
          <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition w-52">
            <h2 className="text-2xl font-bold text-blue-600">Fast Tracking</h2>

            <p className="text-gray-500 mt-2">Real-time complaint updates</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition w-52">
            <h2 className="text-2xl font-bold text-green-600">Secure</h2>

            <p className="text-gray-500 mt-2">Protected user authentication</p>
          </div>
        </div>
      </div>

      {/* RIGHT SECTION */}
      <div className="flex w-full lg:w-1/2 justify-center items-center p-8">
        <div
          className="
            w-full
            max-w-md
            bg-fuchsia-50
            backdrop-blur-lg
            p-10
            rounded-3xl
            shadow-2xl
            border
            border-rose-100
          "
        >
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-800">Welcome Back</h1>

            <p className="text-gray-500 mt-3">
              Login to continue to your dashboard
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email */}
            <div>
              <label className="block mb-2 font-semibold text-gray-700">
                Email Address
              </label>

              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="
                  w-full
                  border
                  border-gray-300
                  p-4
                  rounded-xl
                  focus:outline-none
                  focus:ring-2
                  focus:ring-blue-400
                  transition
                "
                onChange={handleChange}
                required
              />
            </div>

            {/* Password */}
            <div>
              <label className="block mb-2 font-semibold text-gray-700">
                Password
              </label>

              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                className="
                  w-full
                  border
                  border-gray-300
                  p-4
                  rounded-xl
                  focus:outline-none
                  focus:ring-2
                  focus:ring-blue-400
                  transition
                "
                onChange={handleChange}
                required
              />
            </div>

            {/* Button */}
            <button
              className="
                w-full
                bg-blue-500
                hover:bg-blue-600
                text-white
                p-4
                rounded-xl
                font-semibold
                shadow-lg
                hover:shadow-2xl
                transition
                duration-300
              "
            >
              Login
            </button>
          </form>

          {/* Footer */}
          <p className="text-center text-gray-500 mt-8">
            Don’t have an account?{" "}
            <Link
              to="/register"
              className="text-blue-600 font-semibold hover:underline"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
