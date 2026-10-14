import { useCallback, useEffect, useState } from "react";
import {
  createEnquiry,
  deleteEnquiry,
  fetchEnquiries,
  updateEnquiry,
} from "../api/enquiryApi";
import EnquiryForm from "../components/ui/EnquiryForm";
import Modal from "../components/ui/Modal";
import { useDocumentTitle } from "../hook/useDocumentTitle";

const AdminDashboard = () => {
  useDocumentTitle("Admin Dashboard");
  const [enquiries, setEnquiries] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [notification, setNotification] = useState(null);

  const [modalMode, setModalMode] = useState(null);
  const [selectedEnquiry, setSelectedEnquiry] = useState(null);

  const showToast = (message, type = "success") => {
    setNotification({ message, type });
    setTimeout(() => setNotification(null), 4000);
  };

  const loadEnquiries = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetchEnquiries();
      setEnquiries(res.data || []);
    } catch (error) {
      showToast("Failed to load enquiries", error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    loadEnquiries();
  }, [loadEnquiries]);

  const openAddModal = () => {
    setSelectedEnquiry(null);
    setModalMode("add");
  };

  const openViewModal = (enquiry) => {
    setSelectedEnquiry(enquiry);
    setModalMode("view");
  };

  const openEditModal = (enquiry) => {
    setSelectedEnquiry(enquiry);
    setModalMode("edit");
  };

  const closeModal = () => {
    setModalMode(null);
    setSelectedEnquiry(null);
  };

  const handleAddSubmit = async (formData, resetForm) => {
    await createEnquiry(formData);
    resetForm();
    closeModal();

    await loadEnquiries(search);

    showToast("New enquiry added successfully");
  };

  const handleEditSubmit = async (formData) => {
    await updateEnquiry(selectedEnquiry.id, formData);
    closeModal();

    showToast("Enquiry updated successfully");
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this enquiry?"))
      return;
    try {
      await deleteEnquiry(id);

      await loadEnquiries(search);

      showToast("Enquiry deleted successfully");
    } catch (error) {
      showToast("Failed to delete enquiry", error);
    }
  };

  return (
    <div className="max-w-6xl mx-auto py-8 px-4">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">
            Enquiry Management Dashboard
          </h1>
        </div>
        <button
          onClick={openAddModal}
          className="inline-flex items-center justify-center px-4 py-2.5 bg-indigo-600 text-white text-sm font-medium rounded-lg hover:bg-indigo-700 transition cursor-pointer"
        >
          + Add New Entry
        </button>
      </div>

      {notification && (
        <div
          className={`mb-4 p-4 rounded-lg text-sm font-medium border ${
            notification.type === "error"
              ? "bg-red-50 text-red-700 border-red-200"
              : "bg-emerald-50 text-emerald-700 border-emerald-200"
          }`}
        >
          {notification.message}
        </div>
      )}

      <div className="bg-white rounded-xl shadow-xs border border-slate-200 overflow-hidden">
        {loading ? (
          <div className="p-12 text-center text-slate-500 text-sm">
            Loading submissions...
          </div>
        ) : enquiries.length === 0 ? (
          <div className="p-12 text-center text-slate-500 text-sm">
            No enquiry submissions found.
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200 text-slate-600 text-xs uppercase tracking-wider">
                  <th className="py-3.5 px-4 font-semibold">ID</th>
                  <th className="py-3.5 px-4 font-semibold">Name</th>
                  <th className="py-3.5 px-4 font-semibold">Email & Phone</th>
                  <th className="py-3.5 px-4 font-semibold">Message</th>
                  <th className="py-3.5 px-4 font-semibold">Submitted On</th>
                  <th className="py-3.5 px-4 font-semibold text-right">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-sm">
                {enquiries.map((item) => (
                  <tr key={item.id} className="hover:bg-slate-50/80 transition">
                    <td className="py-3.5 px-4 font-medium text-slate-500">
                      #{item.id}
                    </td>
                    <td className="py-3.5 px-4 font-semibold text-slate-800">
                      {item.name}
                    </td>
                    <td className="py-3.5 px-4">
                      <div className="text-slate-700">{item.email}</div>
                      <div className="text-slate-400 text-xs">{item.phone}</div>
                    </td>
                    <td className="py-3.5 px-4 max-w-xs">
                      <p
                        className="truncate text-slate-600"
                        title={item.message}
                      >
                        {item.message}
                      </p>
                    </td>
                    <td className="py-3.5 px-4 text-slate-500 text-xs whitespace-nowrap">
                      {new Date(item.created_at).toLocaleDateString("en-IN", {
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                      })}
                    </td>
                    <td className="py-3.5 px-4 text-right whitespace-nowrap space-x-2">
                      <button
                        onClick={() => openViewModal(item)}
                        className="px-2.5 py-1 text-xs font-medium text-slate-700 bg-slate-100 rounded-md hover:bg-slate-200 transition cursor-pointer"
                      >
                        View
                      </button>
                      <button
                        onClick={() => openEditModal(item)}
                        className="px-2.5 py-1 text-xs font-medium text-indigo-700 bg-indigo-50 rounded-md hover:bg-indigo-100 transition cursor-pointer"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(item.id)}
                        className="px-2.5 py-1 text-xs font-medium text-red-700 bg-red-50 rounded-md hover:bg-red-100 transition cursor-pointer"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      <Modal
        isOpen={modalMode === "view"}
        onClose={closeModal}
        title={`Enquiry Details #${selectedEnquiry?.id}`}
      >
        {selectedEnquiry && (
          <div className="space-y-4 text-sm">
            <div>
              <span className="text-xs font-semibold uppercase text-slate-400 block">
                Full Name
              </span>
              <p className="text-slate-800 font-medium text-base mt-0.5">
                {selectedEnquiry.name}
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <span className="text-xs font-semibold uppercase text-slate-400 block">
                  Email
                </span>
                <p className="text-slate-700 mt-0.5">{selectedEnquiry.email}</p>
              </div>
              <div>
                <span className="text-xs font-semibold uppercase text-slate-400 block">
                  Phone
                </span>
                <p className="text-slate-700 mt-0.5">{selectedEnquiry.phone}</p>
              </div>
            </div>
            <div>
              <span className="text-xs font-semibold uppercase text-slate-400 block">
                Message
              </span>
              <div className="mt-1 p-3.5 bg-slate-50 rounded-lg border border-slate-200 text-slate-700 whitespace-pre-wrap">
                {selectedEnquiry.message}
              </div>
            </div>
            <div className="text-xs text-slate-400 pt-2 border-t border-slate-100 flex justify-between">
              <span>
                Created: {new Date(selectedEnquiry.created_at).toLocaleString()}
              </span>
              <span>
                Updated: {new Date(selectedEnquiry.updated_at).toLocaleString()}
              </span>
            </div>
          </div>
        )}
      </Modal>

      <Modal
        isOpen={modalMode === "add"}
        onClose={closeModal}
        title="Add New Enquiry"
      >
        <EnquiryForm
          onSubmit={handleAddSubmit}
          submitLabel="Create Entry"
          onCancel={closeModal}
        />
      </Modal>

      <Modal
        isOpen={modalMode === "edit"}
        onClose={closeModal}
        title={`Edit Enquiry #${selectedEnquiry?.id}`}
      >
        <EnquiryForm
          initialValues={selectedEnquiry}
          onSubmit={handleEditSubmit}
          submitLabel="Save Changes"
          onCancel={closeModal}
        />
      </Modal>
    </div>
  );
};

export default AdminDashboard;
