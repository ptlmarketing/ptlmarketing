import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { FaEdit, FaTrash } from "react-icons/fa";

function Users() {
  const [data, setData] = useState([
    { id: 1, name: "Loading User...", email: "loading@example.com", role: "Loading..." },
    { id: 2, name: "Loading User...", email: "loading@example.com", role: "Loading..." },
    { id: 3, name: "Loading User...", email: "loading@example.com", role: "Loading..." },
    { id: 4, name: "Loading User...", email: "loading@example.com", role: "Loading..." },
    { id: 5, name: "Loading User...", email: "loading@example.com", role: "Loading..." },
    { id: 6, name: "Loading User...", email: "loading@example.com", role: "Loading..." },
  ]);
  const [loading, setLoading] = useState(true);

  // ✅ GET Users API
  const fetchUsers = async () => {
    try {
      const res = await fetch("/api/users"); 
      const users = await res.json();
      setData(users);
    } catch (error) {
      console.error("Error fetching users:", error);
    } finally {
      setLoading(false); 
    }
  };

  // ✅ UPDATE Role API
  const updateUserRole = async (id, newRole) => {
    try {
      await fetch(`/api/users/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ role: newRole }),
      });

      setData((prevData) =>
        prevData.map((user) =>
          user.id === id ? { ...user, role: newRole } : user
        )
      );
      alert(`Role updated to ${newRole}`);
    } catch (error) {
      console.error("Error updating role:", error);
    }
  };

  // ✅ DELETE User API
  const deleteUser = async (id) => {
    try {
      await fetch(`/api/users/${id}`, { method: "DELETE" });

      setData((prevData) => prevData.filter((user) => user.id !== id));
      alert(`User with ID ${id} deleted`);
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  // ✅ Edit Role (Prompt)
  const handleEditRole = (id) => {
    const newRole = prompt("Enter new role (e.g. Admin, User, Editor):");
    if (newRole) {
      updateUserRole(id, newRole);
    }
  };

  // ✅ Fetch users on mount
  useEffect(() => {
    fetchUsers();
  }, []);

  // ✅ Table columns
  const columns = [
    { name: "ID", selector: (row) => row.id, sortable: true, width: "70px" },
    { name: "User Name", selector: (row) => row.name, sortable: true },
    { name: "Email ID", selector: (row) => row.email, sortable: true },
    { name: "Role", selector: (row) => row.role, sortable: true },
    {
      name: "Action",
      cell: (row) => (
        <div className="flex gap-2">
          <button
            onClick={() => handleEditRole(row.id)}
            className="flex items-center gap-1 px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
          >
            <FaEdit /> Edit Role
          </button>
          <button
            onClick={() => deleteUser(row.id)}
            className="flex items-center gap-1 px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
          >
            <FaTrash /> Delete
          </button>
        </div>
      ),
    },
  ];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">
        Users List
      </h2>
      <div className="overflow-x-auto rounded-t-lg border border-gray-200 dark:border-gray-700">
        <DataTable
          columns={columns}
          data={data}
          pagination
          highlightOnHover
          striped
          progressPending={loading} // ✅ Loading spinner
          progressComponent={
            <div className="flex justify-center items-center p-6">
              <div className="w-8 h-8 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
              <span className="ml-2 text-blue-600">Loading...</span>
            </div>
          }
          customStyles={{
            rows: {
              style: { backgroundColor: "transparent" },
            },
            headCells: {
              style: { backgroundColor: "transparent", fontWeight: "bold" },
            },
            cells: {
              style: { backgroundColor: "transparent" },
            },
          }}
        />
      </div>
    </div>
  );
}

export default Users;
