import { useEffect, useState } from "react";
import API from "../services/api";
import { updateComplaintStatus } from "../services/complaintService";
import { addComment } from "../services/complaintService";
import toast from "react-hot-toast";
import Navbar from "../components/Navbar";

function CommitteeDashboard() {
  const [complaints, setComplaints] = useState([]);

  useEffect(() => {
    fetchAssignedComplaints();
  }, []);

  const fetchAssignedComplaints = async () => {
    try {
      const token = localStorage.getItem("token");

      const response = await API.get("/complaints/assigned", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setComplaints(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleStatusChange = async (id, status) => {
    try {
      await updateComplaintStatus(id, status);

      toast.success("Status updated");

      fetchAssignedComplaints();
    } catch (error) {
      toast.error("Failed to update");
    }
  };

  const handleComment = async (id) => {
    const text = prompt("Enter comment");

    if (!text) return;

    try {
      await addComment(id, text);

      toast.success("Comment added");

      fetchAssignedComplaints();
    } catch (error) {
      toast.error("Failed to add comment");
    }
  };

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-6">Committee Dashboard</h1>
      <Navbar />

      <div className="space-y-4">
        {complaints.map((complaint) => (
          <div key={complaint._id} className="border p-5 rounded-xl shadow">
            <h2 className="text-xl font-bold">{complaint.title}</h2>

            <p className="mt-2">{complaint.description}</p>
            <div className="mt-4">
              <h3 className="font-bold mb-2">Comments</h3>

              {complaint.comments.map((comment, index) => (
                <div key={index} className="bg-gray-100 p-2 rounded mb-2">
                  {comment.text}
                </div>
              ))}
            </div>

            <div className="flex gap-4 mt-4">
              <span className="bg-gray-200 px-3 py-1 rounded-full">
                {complaint.category}
              </span>

              <span className="bg-blue-200 px-3 py-1 rounded-full">
                {complaint.status}
              </span>
            </div>

            <div className="mt-5">
              <select
                value={complaint.status}
                onChange={(e) =>
                  handleStatusChange(complaint._id, e.target.value)
                }
                className="border p-2 rounded-lg"
              >
                <option value="pending">Pending</option>

                <option value="in_progress">In Progress</option>

                <option value="resolved">Resolved</option>
              </select>
            </div>
            <button
              onClick={() => handleComment(complaint._id)}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg"
            >
              Add Comment
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CommitteeDashboard;
