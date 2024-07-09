import * as Yup from "yup";

export const FormSchemas = Yup.object({
    fullName: Yup.string().required("Full Name is required"),
    lastName: Yup.string().required("Last Name is required"),
    email: Yup.string().email("Invalid email address").required("Email is required"),
    PhoneNo: Yup.string()
      .matches(/^[0-9]{10}$/, "Phone number must be 10 digits")
      .required("Phone number is required"),
    message: Yup.string().required("Message is required"),
});
export const form2Schemas = Yup.object({
    fName: Yup.string().required("First Name is required"),
    lName: Yup.string().required("Last Name is required"),
    email: Yup.string().email("Invalid email address").required("Email is required"),
    phone: Yup.string()
      .matches(/^[0-9]{10}$/, "Phone number must be 10 digits")
      .required("Phone number is required"),
    message: Yup.string().required("Message is required"),
});
export const form3Schemas = Yup.object({
  email: Yup.string().email("Invalid email address").required("Email is required"),
})