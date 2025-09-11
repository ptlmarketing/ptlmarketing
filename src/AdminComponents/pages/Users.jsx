import React from "react";

function Users() {
  const users = [
    { id: 1, name: "Amit Kumar", email: "amit@example.com", role: "Admin" },
    { id: 2, name: "Rohit Sharma", email: "rohit@example.com", role: "Editor" },
    { id: 3, name: "Priya Singh", email: "priya@example.com", role: "User" },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Users Management</h1>

      {/* Responsive Wrapper */}
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-700 rounded-lg text-sm md:text-base overflow-x-auto">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="p-3 text-left whitespace-nowrap">ID</th>
              <th className="p-3 text-left whitespace-nowrap">Name</th>
              <th className="p-3 text-left whitespace-nowrap">Email</th>
              <th className="p-3 text-left whitespace-nowrap">Role</th>
              <th className="p-3 text-left whitespace-nowrap">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr
                key={user.id}
                className="border-b border-gray-600 hover:bg-gray-700"
              >
                <td className="p-3">{user.id}</td>
                <td className="p-3">{user.name}</td>
                <td className="p-3">{user.email}</td>
                <td className="p-3">{user.role}</td>
                <td className="p-3 space-x-2">
                  <button className="bg-blue-600 text-white px-2 py-1 rounded-md hover:bg-blue-700 text-xs md:text-sm">
                    Edit
                  </button>
                  <button className="bg-red-600 text-white px-2 py-1 rounded-md hover:bg-red-700 text-xs md:text-sm">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Users;
