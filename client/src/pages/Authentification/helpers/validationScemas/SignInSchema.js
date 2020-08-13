import * as yup from "yup";

export const SignInSchema = yup.object({
  username: yup.string().max(16).min(6).required(),
  password: yup.string().max(16).min(6).required(),
});
