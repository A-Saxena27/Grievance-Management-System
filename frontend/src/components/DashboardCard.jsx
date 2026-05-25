function DashboardCard({ title, count }) {
  return (
    <div className="bg-white shadow rounded-xl p-6">
      <h2 className="text-gray-500">{title}</h2>

      <p className="text-3xl font-bold mt-2">{count}</p>
    </div>
  );
}

export default DashboardCard;
