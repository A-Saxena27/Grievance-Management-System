import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

function StudentDashboard() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div>
      <Navbar />
      <div className="p-10">
        <h1 className="text-3xl font-bold">Welcome {user.fullName}</h1>
        <div className="min-h-screen bg-mint-200 p-10">
          <div className="flex justify-between items-center mb-10">
            <div>
              <h1 className="text-4xl font-bold text-gray-800">
                Student Dashboard
              </h1>

              <p className="text-gray-500 mt-2">
                Manage your grievances easily
              </p>
            </div>

            <div className="flex gap-4">
              {/* Create Complaint */}
              <Link to="/create-complaint">
                <button
                  className="
            bg-blue-500
            hover:bg-blue-600
            text-white
            px-6
            py-3
            rounded-xl
            shadow-md
            hover:shadow-xl
            transition
          "
                >
                  + Create Complaint
                </button>
              </Link>

              {/* View Complaints */}
              <Link to="/my-complaints">
                <button
                  className="
            bg-black
            hover:bg-mint-300
            text-white
            px-6
            py-3
            rounded-2xl
            shadow-md
            hover:shadow-xl
            transition
          "
                >
                  View My Complaints
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentDashboard;
