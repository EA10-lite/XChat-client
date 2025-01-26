import * as Yup from "yup";

export const auth_schema = Yup.object().shape({
  username: Yup.string().required("Please enter a valid username"),
  password: Yup.string().required("Please enter your password")
});