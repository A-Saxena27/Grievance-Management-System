import { useState } from "react";
import { createComplaint } from "../services/complaintService";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import Navbar from "../components/Navbar";
import ContactSection from "../components/ContactSection";

function CreateComplaint() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    subcategory: "",
    level: "department",
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
      await createComplaint(formData);

      toast.success("Complaint created successfully");

      navigate("/my-complaints");
    } catch (error) {
      console.log(error);

      toast.error(
        error.response?.data?.message || "Failed to create complaint",
      );
    }
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-sky-100 flex justify-center items-center p-6">
        <div className="bg-white w-full max-w-3xl rounded-3xl shadow-2xl p-10">
          <h1 className="text-4xl font-bold mb-2 text-gray-800">
            Raise a Complaint
          </h1>

          <p className="text-gray-500 mb-8">
            Submit your grievance to the university system
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Title */}
            <div>
              <label className="block mb-2 font-semibold">
                Complaint Title
              </label>

              <input
                type="text"
                name="title"
                placeholder="Enter complaint title"
                value={formData.title}
                onChange={handleChange}
                className="
                  w-full
                  border
                  p-4
                  rounded-xl
                  focus:outline-none
                  focus:ring-2
                  focus:ring-blue-400
                "
                required
              />
            </div>

            {/* Description */}
            <div>
              <label className="block mb-2 font-semibold">Description</label>

              <textarea
                name="description"
                placeholder="Describe your issue..."
                rows="5"
                value={formData.description}
                onChange={handleChange}
                className="
                  w-full
                  border
                  p-4
                  rounded-xl
                  focus:outline-none
                  focus:ring-2
                  focus:ring-blue-400
                "
                required
              />
            </div>

            {/* Category */}
            <div>
              <label className="block mb-2 font-semibold">Category</label>

              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="
                  w-full
                  border
                  p-4
                  rounded-xl
                  focus:outline-none
                  focus:ring-2
                  focus:ring-blue-400
                "
                required
              >
                <option value="">Select Category</option>

                <option value="Examination">Examination</option>

                <option value="Hostel">Hostel</option>

                <option value="Academics">Academics</option>

                <option value="Fees">Fees</option>

                <option value="Discipline">Discipline</option>
              </select>
            </div>

            {/* Subcategory */}
            <div>
              <label className="block mb-2 font-semibold">Subcategory</label>

              <input
                type="text"
                name="subcategory"
                placeholder="Enter subcategory"
                value={formData.subcategory}
                onChange={handleChange}
                className="
                  w-full
                  border
                  p-4
                  rounded-xl
                  focus:outline-none
                  focus:ring-2
                  focus:ring-blue-400
                "
              />
            </div>

            {/* Level */}
            <div>
              <label className="block mb-2 font-semibold">
                Complaint Level
              </label>

              <select
                name="level"
                value={formData.level}
                onChange={handleChange}
                className="
                  w-full
                  border
                  p-4
                  rounded-xl
                  focus:outline-none
                  focus:ring-2
                  focus:ring-blue-400
                "
              >
                <option value="department">Department</option>

                <option value="institute">Institute</option>

                <option value="university">University</option>
              </select>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="
                w-full
                bg-blue-500
                hover:bg-blue-600
                text-white
                font-semibold
                p-4
                rounded-xl
                transition
                duration-300
              "
            >
              Submit Complaint
            </button>
          </form>
        </div>
        <ContactSection />
      </div>
    </>
  );
}

export default CreateComplaint;
