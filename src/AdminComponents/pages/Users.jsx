import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { getAllUser } from "../../service/apiService";

function Users() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true); // ✅ Loading state

  const getAllUserData = async () => {
    try {
      setLoading(true); // start loader
      const res = await getAllUser();
      setData(res?.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    } finally {
      setLoading(false); // stop loader
    }
  };

  useEffect(() => {
    getAllUserData();
  }, []);

  // Table columns
  const columns = [
    { name: "ID", selector: (row) => row._id, sortable: true, width: "270px" },
    { name: "Name", selector: (row) => row.name, sortable: true },
    { name: "Email", selector: (row) => row.email, sortable: true },
  ];

  // Custom styles for modern look
  const customStyles = {
    header: {
      style: {
        fontSize: "20px",
        fontWeight: "bold",
        color: "#1f2937", // gray-800
      },
    },
    headCells: {
      style: {
        backgroundColor: "#f3f4f6", // gray-100
        fontWeight: "bold",
        fontSize: "16px",
        color: "#374151", // gray-700
      },
    },
    rows: {
      style: {
        minHeight: "60px",
        fontSize: "15px",
        color: "#4b5563", // gray-600
        "&:hover": {
          backgroundColor: "#e0f2fe", // light blue hover
        },
      },
    },
    cells: {
      style: {
        padding: "12px 16px",
      },
    },
  };

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-6 ">Users List</h2>
      <div className="overflow-x-auto rounded-lg shadow-lg border border-gray-200 bg-white">
        <DataTable
          columns={columns}
          data={data}
          pagination
          highlightOnHover
          striped
          progressPending={loading} // ✅ Loader
          progressComponent={
            <div className="flex justify-center items-center p-6">
              <div className="w-10 h-10 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
              <span className="ml-2 text-blue-600 font-semibold">Loading...</span>
            </div>
          }
          customStyles={customStyles}
        />
      </div>
    </div>
  );
}

export default Users;
