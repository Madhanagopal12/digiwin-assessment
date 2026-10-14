const InputField = ({
  label,
  name,
  type = "text",
  value,
  onChange,
  placeholder,
  error,
  textarea = false,
  rows = 4,
}) => {
  const baseClasses = `w-full px-4 py-2.5 rounded-lg border text-sm transition-colors focus:outline-none focus:ring-2 ${
    error
      ? "border-red-500 focus:ring-red-200 bg-red-50/30"
      : "border-slate-300 focus:border-indigo-600 focus:ring-indigo-100 bg-white"
  }`;

  return (
    <div className="mb-4">
      <label
        htmlFor={name}
        className="block text-sm font-medium text-slate-700 mb-1.5"
      >
        {label} <span className="text-red-500">*</span>
      </label>

      {textarea ? (
        <textarea
          id={name}
          name={name}
          rows={rows}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={baseClasses}
        />
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={baseClasses}
        />
      )}

      {error && (
        <p className="mt-1 text-xs text-red-600 font-medium">{error}</p>
      )}
    </div>
  );
};

export default InputField;
