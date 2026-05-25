import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    navigate("/login");
  };

  return (
    <div className="bg-slate-100 shadow-md px-8 py-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-blue-400">Grievence Center</h1>

      <div className="flex items-center gap-4">
        <span className="font-medium">{user?.role}</span>

        <button
          onClick={logout}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Navbar;
