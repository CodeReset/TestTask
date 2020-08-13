import * as yup from "yup";

export const FormSchema = yup.object({
  date: yup.string().required(),
  trainType: yup.string().required(),
  km: yup.number().required(),
});
