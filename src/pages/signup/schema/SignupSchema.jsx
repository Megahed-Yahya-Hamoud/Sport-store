import * as yup from "yup";

const SignupSchema = yup.object().shape({
  fullName: yup
    .string()
    .required("Full name is required")
    .min(6, "Full name must be at least 6 characters")
    .max(50, "Full name must be at most 50 characters"),
  email: yup
    .string()
    .email("Enter a valid email address")
    .required("Email is required"),
  phone: yup
    .number()
    .required("Phone is required")
    .min(5, "Phone must be at least 5 numbers"),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters"),
  confirmPassword: yup
    .string()
    .required("Confirm Password is required")
    .oneOf([yup.ref("password")], "Passwords does not match"),
});

export default SignupSchema;
