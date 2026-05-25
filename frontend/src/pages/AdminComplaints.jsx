import { useEffect, useState } from "react";
import API from "../services/api";
import {
  updateComplaintStatus,
  assignComplaint,
} from "../services/complaintService";

import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

import Navbar from "../components/Navbar";
import toast from "react-hot-toast";

function AdminComplaints() {
  const [complaints, setComplaints] = useState([]);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("");

  useEffect(() => {
    fetchComplaints();
  }, []);

  const fetchComplaints = async () => {
    try {
      const token = localStorage.getItem("token");

      const response = await API.get("/complaints", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setComplaints(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleAssign = async (id) => {
    const assignedTo = prompt("Enter Committee Member ID");

    if (!assignedTo) return;

    try {
      await assignComplaint(id, assignedTo);

      toast.success("Complaint assigned");

      fetchComplaints();
    } catch (error) {
      toast.error("Assignment failed");
    }
  };

  const handleStatusChange = async (id, status) => {
    try {
      await updateComplaintStatus(id, status);

      toast.success("Status updated");

      fetchComplaints();
    } catch (error) {
      toast.error("Update failed");
    }
  };

  const filteredComplaints = complaints.filter((complaint) => {
    const matchesSearch =
      complaint.title.toLowerCase().includes(search.toLowerCase()) ||
      complaint.category.toLowerCase().includes(search.toLowerCase());

    const matchesStatus =
      statusFilter === "" || complaint.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  const analyticsData = [
    {
      name: "Pending",
      value: complaints.filter((c) => c.status === "pending").length,
    },
    {
      name: "In Progress",
      value: complaints.filter((c) => c.status === "in_progress").length,
    },
    {
      name: "Resolved",
      value: complaints.filter((c) => c.status === "resolved").length,
    },
  ];

  return (
    <>
      <Navbar />

      <div className="flex min-h-screen bg-sky-100">
        {/* Sidebar */}
        <div className="w-64 bg-white shadow-xl p-6">
          <h1 className="text-2xl font-bold text-blue-600 mb-10">
            Admin Panel
          </h1>

          <div className="space-y-4">
            <button className="w-full text-left bg-blue-500 text-white p-3 rounded-xl">
              Dashboard
            </button>

            <a href="#Chart">
              <button className="w-full text-left hover:bg-gray-100 p-3 rounded-xl transition">
                Analytics
              </button>
            </a>

            <a href="#Complaints">
              <button className="w-full text-left hover:bg-gray-100 p-3 rounded-xl transition">
                Complaints
              </button>
            </a>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8">
          {/* Heading */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-800">
              Complaint Management
            </h1>

            <p className="text-gray-500 mt-2">
              Monitor and manage student grievances
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-2xl transition hover:bg-blue-50">
              <h2 className="text-gray-500">Total Complaints</h2>

              <p className="text-4xl font-bold mt-3">{complaints.length}</p>
            </div>

            <div className="bg-yellow-100 p-6 rounded-2xl shadow-md hover:shadow-2xl transition hover:bg-yellow-200">
              <h2 className="text-yellow-700">Pending</h2>

              <p className="text-4xl font-bold mt-3">
                {complaints.filter((c) => c.status === "pending").length}
              </p>
            </div>

            <div className="bg-green-100 p-6 rounded-2xl shadow-md hover:shadow-2xl transition hover:bg-green-200">
              <h2 className="text-green-700">Resolved</h2>

              <p className="text-4xl font-bold mt-3">
                {complaints.filter((c) => c.status === "resolved").length}
              </p>
            </div>
          </div>

          {/* Search + Filter */}
          <div className="flex gap-4 mb-8">
            <input
              type="text"
              placeholder="Search complaints..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="
                border
                p-3
                rounded-xl
                w-full
                shadow-sm
                focus:outline-none
                focus:ring-2
                focus:ring-blue-400
              "
            />

            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="
                border
                p-3
                rounded-xl
                shadow-sm
                focus:outline-none
                focus:ring-2
                focus:ring-blue-400
              "
            >
              <option value="">All Status</option>

              <option value="pending">Pending</option>

              <option value="in_progress">In Progress</option>

              <option value="resolved">Resolved</option>
            </select>
          </div>

          {/* Analytics */}
          <div className="bg-white p-6 rounded-2xl shadow-md mb-10">
            <h2 id="Chart" className="text-2xl font-bold mb-6">
              Complaint Analytics
            </h2>

            <PieChart width={400} height={300}>
              <Pie data={analyticsData} dataKey="value" outerRadius={100} label>
                <Cell fill="#15fafa" />
                <Cell fill="#60fa84" />
                <Cell fill="#e43d80" />
              </Pie>

              <Tooltip />

              <Legend />
            </PieChart>
          </div>

          {/* Complaint Cards */}
          <div id="Complaints" className="space-y-6">
            {filteredComplaints.map((complaint) => (
              <div
                key={complaint._id}
                className="
                  bg-white
                  p-6
                  rounded-2xl
                  shadow-md
                  border
                  border-gray-100
                  transition-all
                  duration-300
                  hover:bg-gradient-to-r
                  hover:from-blue-100
                  hover:to-purple-50
                  hover:shadow-2xl
                  hover:-translate-y-1
                "
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800">
                      {complaint.title}
                    </h2>

                    <p className="text-gray-600 mt-2">
                      {complaint.description}
                    </p>
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

                {/* Actions */}
                <div className="mt-5 flex gap-4">
                  <select
                    className="
                      border
                      p-2
                      rounded-xl
                      focus:outline-none
                      focus:ring-2
                      focus:ring-blue-400
                    "
                    value={complaint.status}
                    onChange={(e) =>
                      handleStatusChange(complaint._id, e.target.value)
                    }
                  >
                    <option value="pending">Pending</option>

                    <option value="in_progress">In Progress</option>

                    <option value="resolved">Resolved</option>
                  </select>

                  <button
                    onClick={() => handleAssign(complaint._id)}
                    className="
                      bg-blue-500
                      hover:bg-blue-600
                      text-white
                      px-4
                      py-2
                      rounded-xl
                      transition
                    "
                  >
                    Assign
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminComplaints;
