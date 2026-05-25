import { useState } from "react";
import { registerUser } from "../services/authService";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    department: "",
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
      const data = await registerUser(formData);

      toast.success(data.message);

      console.log(data);

      navigate("/login");
    } catch (error) {
      toast.error(error.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="min-h-screen flex bg-gradient-to-br from-indigo-100 via-white to-blue-100">
      {/* LEFT SECTION */}
      <div className="hidden lg:flex w-1/2 flex-col justify-center px-20">
        <h1 className="text-6xl font-extrabold text-gray-800 leading-tight">
          Join The <br />
          Grievance Portal
        </h1>

        <p className=" font-serif mt-8 text-xl text-gray-600 leading-relaxed max-w-xl">
          Create your student account and access a centralized platform for
          complaint tracking, communication, and issue resolution.
        </p>

        <div className="flex gap-6 mt-10">
          <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition w-52">
            <h2 className="text-2xl font-bold text-blue-600">
              Complaint Tracking
            </h2>

            <p className="text-gray-500 mt-2">
              Monitor complaint progress instantly
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition w-52">
            <h2 className="text-2xl font-bold text-green-600">
              Smart Workflow
            </h2>

            <p className="text-gray-500 mt-2">Faster issue management system</p>
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
            border-gray-100
          "
        >
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-800">Create Account</h1>

            <p className="text-gray-500 mt-3">Register to continue</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Full Name */}
            <div>
              <label className="block mb-2 font-semibold text-gray-700">
                Full Name
              </label>

              <input
                type="text"
                name="fullName"
                placeholder="Enter your full name"
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

            {/* Department */}
            <div>
              <label className="block mb-2 font-semibold text-gray-700">
                Department
              </label>

              <input
                type="text"
                name="department"
                placeholder="Enter your department"
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
              Register
            </button>
          </form>

          {/* Footer */}
          <p className="text-center text-gray-500 mt-8">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-blue-600 font-semibold hover:underline"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;
