import { useState } from "react";
import { createEnquiry } from "../api/enquiryApi";
import EnquiryForm from "../components/ui/EnquiryForm";
import { useDocumentTitle } from "../hook/useDocumentTitle";

const ContactPage = () => {
  const [successMsg, setSuccessMsg] = useState("");

  const handleFormSubmit = async (formData, resetForm) => {
    const response = await createEnquiry(formData);
    setSuccessMsg(
      response.message || "Thank you! Your enquiry has been submitted.",
    );
    resetForm();
    setTimeout(() => setSuccessMsg(""), 5000);
  };

  useDocumentTitle("Contact Form");

  return (
    <div className="max-w-xl mx-auto py-10 px-4">
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 sm:p-8">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-slate-900 text-center">
            Contact Form
          </h1>
        </div>

        {successMsg && (
          <div className="mb-6 p-4 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm font-medium">
            {successMsg}
          </div>
        )}

        <EnquiryForm onSubmit={handleFormSubmit} submitLabel="Send Message" />
      </div>
    </div>
  );
};

export default ContactPage;
