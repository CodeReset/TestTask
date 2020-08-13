import * as yup from "yup";

export const SignUpScema = yup.object({
  username: yup.string().max(15).min(6),

  email: yup.string().email(),
  password: yup.string().max(16).min(6),

  passwordConfirm: yup.string().max(16).min(6),
});
