const isValidEmail = (value) => /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value);
const isValidName = (value) => /^[A-Za-z\s]+$/.test(value);
const isValidPhoneNumber = (value) => /^\d+$/.test(value);
export const validateEmail = (value) => {
  return value && !isValidEmail(value) ? "Invalid email format" : undefined;
};
export const validateName = (value) => {
  return value && !isValidName(value) ? "Only alphabets are allowed" : undefined;
};

export const validatePhoneNumber = (value) => {
  return value && !isValidPhoneNumber(value) ? "Only numbers are allowed" : undefined;
};
export const validateFormData = (values) => {
  const requiredFields = ["name", "email", "telephone", "comment", "productSku", "request_type"];
  if (requiredFields.some((field) => !values[field])) return false;
  return (
    isValidName(values.name) &&
    isValidEmail(values.email) &&
    isValidPhoneNumber(values.telephone) &&
    isValidName(values.comment) &&
    isValidName(values.productSku) &&
    isValidName(values.request_type)
  );
};
