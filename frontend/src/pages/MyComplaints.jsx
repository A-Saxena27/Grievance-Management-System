import { useEffect, useState } from "react";

import { getMyComplaints } from "../services/complaintService";
import Navbar from "../components/Navbar";

function MyComplaints() {
  const [complaints, setComplaints] = useState([]);

  useEffect(() => {
    fetchComplaints();
  }, []);

  const fetchComplaints = async () => {
    try {
      const data = await getMyComplaints();

      setComplaints(data.data);

      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen bg-sky-50">
      <div>
        <Navbar />
      </div>
      <div className="max-w-5xl mx-auto p-8">
        <h1 className="text-3xl font-bold mb-6">My Complaints</h1>
      </div>
      <div className="space-y-4">
        {complaints.map((complaint) => (
          <div
            key={complaint._id}
            className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 transition-all duration-300 hover:bg-indigo-100 hover:shadow-2xl hover:-translate-y-1"
          >
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-2xl font-bold text-gray-800">
                  {complaint.title}
                </h2>

                <p className="text-gray-600 mt-2">{complaint.description}</p>
              </div>

              <span
                className={`px-4 py-1 rounded-full text-white text-sm font-semibold
      ${
        complaint.status === "pending"
          ? "bg-yellow-500"
          : complaint.status === "in_progress"
            ? "bg-blue-500"
            : "bg-green-500"
      }`}
              >
                {complaint.status}
              </span>
            </div>

            <div className="flex gap-3 mt-5 flex-wrap">
              <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm">
                {complaint.category}
              </span>

              <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                {complaint.level}
              </span>
            </div>

            <p className="text-gray-400 text-sm mt-5">
              Created: {new Date(complaint.createdAt).toLocaleString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyComplaints;
