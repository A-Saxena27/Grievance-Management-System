import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import DashboardCard from "../components/DashboardCard";
import Navbar from "../components/Navbar";

return (
  <div className="flex">
    <Sidebar />

    <div className="flex-1 bg-gray-100 min-h-screen">
      <Navbar />

      <div className="p-8">
        <div className="grid grid-cols-3 gap-6 mb-8">
          <DashboardCard title="Total Complaints" count={complaints.length} />

          <DashboardCard
            title="Pending"
            count={complaints.filter((c) => c.status === "pending").length}
          />

          <DashboardCard
            title="Resolved"
            count={complaints.filter((c) => c.status === "resolved").length}
          />
        </div>

        <div className="space-y-4">
          {complaints.map((complaint) => (
            <div key={complaint._id} className="bg-white p-5 rounded-xl shadow">
              {/* existing complaint content */}
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);
