import React, { useState } from "react";
import DataTable from "react-data-table-component";
import { FaTrash, FaCheck, FaEye } from "react-icons/fa";

function Contact() {
  const [contacts, setContacts] = useState([
    {
      id: 1,
      name: "Amit Maurya",
      phone: "+91 9876543210",
      email: "amit@example.com",
      service: "Web Development",
      company: "PTL Marketing",
      status: "Pending",
    },
    {
      id: 2,
      name: "Sara Khan",
      phone: "+91 9123456780",
      email: "sara@example.com",
      service: "SEO",
      company: "ABC Ltd",
      status: "Pending",
    },
  ]);

  // ✅ Delete contact
  const deleteContact = (id) => {
    setContacts((prev) => prev.filter((c) => c.id !== id));
    alert(`Contact with ID ${id} deleted`);
  };

  // ✅ Mark contact as done
  const markDone = (id) => {
    setContacts((prev) =>
      prev.map((c) => (c.id === id ? { ...c, status: "Done" } : c))
    );
    alert(`Contact with ID ${id} marked as Done`);
  };

  // ✅ Table Columns (Removed budget, subject, message)
  const columns = [
    { name: "ID", selector: (row) => row.id, sortable: true, width: "70px" },
    {
      name: "Name",
      selector: (row) => row.name,
      sortable: true,
      width: "120px",
    },
    { name: "Phone", selector: (row) => row.phone, width: "150px" },
    { name: "Email", selector: (row) => row.email, width: "150px" },
    { name: "Service", selector: (row) => row.service, width: "150px" },
    { name: "Company", selector: (row) => row.company, width: "120px" },
    { name: "Status", selector: (row) => row.status, width: "100px" },
    {
      name: "Action",
      cell: (row) => (
        <div className="flex gap-2">
          <button
            onClick={() => markDone(row.id)}
            className="flex items-center gap-1 px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700"
          >
            <FaCheck /> Done
          </button>
          <button
            onClick={() => alert(`Viewing details for ${row.name}`)}
            className="flex items-center gap-1 px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700"
          >
            <FaEye /> View Details
          </button>
          <button
            onClick={() => deleteContact(row.id)}
            className="flex items-center gap-1 px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700"
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
        Contact Submissions
      </h2>
      <div className="overflow-x-auto rounded-lg border border-gray-200 dark:border-gray-700">
        <DataTable
          columns={columns}
          data={contacts}
          pagination
          highlightOnHover
          striped
          customStyles={{
            rows: { style: { backgroundColor: "transparent" } },
            headCells: {
              style: { backgroundColor: "transparent", fontWeight: "bold" },
            },
            cells: { style: { backgroundColor: "transparent" } },
          }}
        />
      </div>
    </div>
  );
}

export default Contact;
