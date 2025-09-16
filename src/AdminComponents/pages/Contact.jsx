import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { FaTrash, FaEye } from "react-icons/fa";
import {
  getEnquiryFormDataAPIService,
  deleteEnquiryFormDataAPIService,
} from "../../service/apiService";
import Modal from "../Modal";
import { toast } from "react-toastify";

function Contact() {
  const [contacts, setContacts] = useState([]);
  const [filterText, setFilterText] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedContact, setSelectedContact] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch all contacts
  const getEnquiryFormData = async () => {
    try {
      const res = await getEnquiryFormDataAPIService();
      const enquiries = res?.data || [];
      setContacts(enquiries.reverse());
    } catch (error) {
      console.error("Error fetching contacts:", error);
    } finally {
      setLoading(false);
    }
  };

  const deleteContact = async (id) => {
    if (window.confirm("Are you sure you want to delete this contact?")) {
      try {
        const res = await deleteEnquiryFormDataAPIService(id);
        setContacts((prev) => prev.filter((c) => c._id !== id));
        toast.success(res?.message);
      } catch (error) {
        console.error("Error deleting contact:", error);
        toast.error("Failed to delete contact. Please try again!");
      }
    }
  };

  // Open modal
  const openModal = (contact) => {
    setSelectedContact(contact);
    setIsModalOpen(true);
  };

  // Close modal
  const closeModal = () => {
    setSelectedContact(null);
    setIsModalOpen(false);
  };

  useEffect(() => {
    getEnquiryFormData();
  }, []);

  // Filter contacts by name
  const filteredContacts = contacts.filter((item) =>
    item.name?.toLowerCase().includes(filterText.toLowerCase())
  );

  // Columns
  const columns = [
    {
      name: "No.",
      selector: (row, index) => index + 1,
      sortable: true,
      width: "70px",
    },
    {
      name: "Name",
      selector: (row) => row.name,
      sortable: true,
      width: "140px",
    },
    { name: "Phone", selector: (row) => row.number, width: "160px" },
    { name: "Email", selector: (row) => row.email, width: "200px" },
    { name: "Service", selector: (row) => row.service, width: "160px" },
    { name: "Company", selector: (row) => row.companyName, width: "150px" },
    {
      name: "Action",
      cell: (row) => (
        <div className="flex gap-2">
          <button
            onClick={() => openModal(row)}
            className="flex cursor-pointer items-center gap-1 px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700"
          >
            <FaEye /> View
          </button>
          <button
            onClick={() => deleteContact(row._id)}
            className="flex cursor-pointer items-center gap-1 px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700"
          >
            <FaTrash /> Delete
          </button>
        </div>
      ),
    },
  ];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
        Contact Submissions
      </h2>

      {/* Search Bar */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by name..."
          value={filterText}
          onChange={(e) => setFilterText(e.target.value)}
          className="w-full md:w-1/3 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* DataTable */}
      <div className="overflow-x-auto rounded-lg border border-gray-200 dark:border-gray-700 shadow-md">
        <DataTable
          columns={columns}
          data={filteredContacts}
          pagination
          highlightOnHover
          striped
          progressPending={loading}
          progressComponent={
            <div className="flex justify-center items-center p-6">
              <div className="w-8 h-8 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
              <span className="ml-2 text-blue-600">Loading...</span>
            </div>
          }
          customStyles={{
            rows: {
              style: {
                backgroundColor: "white",
                borderRadius: "10px",
                margin: "5px",
                padding: "5px",
                boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
              },
            },
            headCells: {
              style: { fontWeight: "bold", backgroundColor: "#f9fafb" },
            },
            cells: { style: { padding: "10px" } },
          }}
        />
      </div>

      {/* Modal */}
      {selectedContact && (
        <Modal
          isOpen={isModalOpen}
          onClose={closeModal}
          id={selectedContact._id}
        />
      )}
    </div>
  );
}

export default Contact;
