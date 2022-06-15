export const validateForm = (formData) => {
  for (const value in formData) {
    if (formData[value] === "") {
      return "Kindly fill all required fields before proceeding";
    }
  }
  return false;
};
