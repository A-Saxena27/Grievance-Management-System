import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="w-64 h-screen bg-black text-white p-5">
      <h2 className="text-2xl font-bold mb-10">Dashboard</h2>

      <div className="flex flex-col gap-4">
        <Link to="/admin-complaints">Complaints</Link>

        <Link to="/my-complaints">My Complaints</Link>

        <Link to="/create-complaint">Create Complaint</Link>
      </div>
    </div>
  );
}

export default Sidebar;
