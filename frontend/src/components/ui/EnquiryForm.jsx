import { useState } from "react";
import InputField from "../../components/ui/InputField";
import { validateEnquiryForm } from "../../utils/validation";

const initialFormState = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

const EnquiryForm = ({
  onSubmit,
  submitLabel = "Submit Enquiry",
  onCancel = null,
}) => {
  const [formData, setFormData] = useState(initialFormState);
  const [errors, setErrors] = useState({});
  const [serverError, setServerError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setServerError("");

    const { isValid, errors: validationErrors } = validateEnquiryForm(formData);
    if (!isValid) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    try {
      await onSubmit(formData, () => setFormData(initialFormState));
    } catch (err) {
      if (err.response?.data?.errors) {
        setErrors(err.response.data.errors);
      } else {
        setServerError(
          err.response?.data?.message ||
            "Something went wrong. Please try again.",
        );
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} noValidate>
      {serverError && (
        <div className="mb-4 p-3 rounded-lg bg-red-50 border border-red-200 text-red-700 text-sm">
          {serverError}
        </div>
      )}

      <InputField
        label="Full Name"
        name="name"
        placeholder="e.g. John Cena"
        value={formData.name}
        onChange={handleChange}
        error={errors.name}
      />

      <InputField
        label="Email Address"
        name="email"
        type="email"
        placeholder="e.g. john@example.com"
        value={formData.email}
        onChange={handleChange}
        error={errors.email}
      />

      <InputField
        label="Phone Number"
        name="phone"
        type="tel"
        placeholder="e.g. +91 9876543210"
        value={formData.phone}
        onChange={handleChange}
        error={errors.phone}
      />

      <InputField
        label="Your Message"
        name="message"
        placeholder="How can we help you?"
        textarea
        rows={4}
        value={formData.message}
        onChange={handleChange}
        error={errors.message}
      />

      <div className="flex items-center justify-end gap-3 mt-6">
        {onCancel && (
          <button
            type="button"
            onClick={onCancel}
            className="px-4 py-2.5 rounded-lg border border-slate-300 text-slate-700 text-sm font-medium hover:bg-slate-50 transition"
          >
            Cancel
          </button>
        )}
        <button
          type="submit"
          disabled={isSubmitting}
          className="px-6 py-2.5 rounded-lg bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-700 disabled:opacity-50 transition cursor-pointer"
        >
          {isSubmitting ? "Processing..." : submitLabel}
        </button>
      </div>
    </form>
  );
};

export default EnquiryForm;
