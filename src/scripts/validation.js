import * as yup from "yup";

export const loginSchema = yup.object({
    email: yup
        .string()
        .required("Email is required")
        .email("Invalid email format"),

    password: yup
        .string()
        .required("Password is required")
        .min(8, "Password must contain at least 8 characters")
        .matches(/\d/, "Password must contain at least one number")

});