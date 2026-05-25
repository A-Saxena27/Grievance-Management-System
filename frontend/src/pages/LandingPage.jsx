import { Link } from "react-router-dom";
import ContactSection from "../components/ContactSection";

function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-10 py-6 bg-white shadow-md">
        <h1 className="text-3xl font-bold text-blue-600">Grievance Center</h1>

        <div className="flex gap-4">
          <Link to="/login">
            <button
              className="
                px-5
                py-2
                rounded-xl
                border
                border-blue-500
                text-blue-500
                hover:bg-blue-50
                transition
              "
            >
              Login
            </button>
          </Link>

          <Link to="/register">
            <button
              className="
                px-5
                py-2
                rounded-xl
                bg-blue-500
                text-white
                hover:bg-blue-600
                transition
                shadow-md
              "
            >
              Sign Up
            </button>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="flex flex-col justify-center items-center text-center px-6 py-24">
        <h1 className="text-6xl font-extrabold text-gray-800 leading-tight">
          Smart University <br />
          Grievance Management
        </h1>

        <p className="mt-6 text-lg text-gray-600 max-w-2xl">
          Raise complaints, track resolutions, and communicate with
          administration seamlessly through one centralized platform.
        </p>

        <div className="flex gap-6 mt-10">
          <Link to="/register">
            <button
              className="
                bg-blue-500
                hover:bg-blue-600
                text-white
                px-8
                py-4
                rounded-2xl
                text-lg
                shadow-lg
                transition
              "
            >
              Get Started
            </button>
          </Link>

          <Link to="/login">
            <button
              className="
                bg-white
                hover:bg-gray-100
                text-gray-800
                px-8
                py-4
                rounded-2xl
                text-lg
                shadow-lg
                transition
              "
            >
              Login
            </button>
          </Link>
        </div>
      </div>

      {/* Features */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-10 pb-20">
        <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition">
          <h2 className="text-2xl font-bold text-blue-600 mb-4">
            Easy Complaint Filing
          </h2>

          <p className="text-gray-600">
            Students can quickly submit complaints with categories,
            descriptions, and priority levels.
          </p>
        </div>

        <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition">
          <h2 className="text-2xl font-bold text-green-600 mb-4">
            Real-Time Tracking
          </h2>

          <p className="text-gray-600">
            Track complaint progress from pending to resolution with live
            updates.
          </p>
        </div>

        <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition">
          <h2 className="text-2xl font-bold text-purple-600 mb-4">
            Admin Analytics
          </h2>

          <p className="text-gray-600">
            Powerful dashboards and analytics help administrators manage
            grievances efficiently.
          </p>
        </div>
        <ContactSection />
      </div>
    </div>
  );
}

export default LandingPage;
