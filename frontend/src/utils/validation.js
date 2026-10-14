export const validateEnquiryForm = (values) => {
  const errors = {};

  if (!values.name || !values.name.trim()) {
    errors.name = "Name is required";
  } else if (values.name.trim().length < 2) {
    errors.name = "Name must be at least 2 characters";
  } else if (values.name.trim().length > 100) {
    errors.name = "Name cannot exceed 100 characters";
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!values.email || !values.email.trim()) {
    errors.email = "Email is required";
  } else if (!emailRegex.test(values.email.trim())) {
    errors.email = "Please enter a valid email address";
  }

  const phoneRegex = /^\+?[0-9\s\-()]{10,15}$/;
  if (!values.phone || !values.phone.trim()) {
    errors.phone = "Phone number is required";
  } else if (!phoneRegex.test(values.phone.trim())) {
    errors.phone = "Please enter a valid 10 to 15 digit phone number";
  }

  if (!values.message || !values.message.trim()) {
    errors.message = "Message is required";
  } else if (values.message.trim().length < 10) {
    errors.message = "Message must be at least 10 characters long";
  } else if (values.message.trim().length > 1000) {
    errors.message = "Message cannot exceed 1000 characters";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
};
