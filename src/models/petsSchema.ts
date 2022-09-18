import * as yup from "yup";

export const yupPetsSchema = yup.object({
  name: yup.string().trim().required("Pet name is required !"),
  owner: yup.string().trim().required("Owner name required !"),
  age: yup.number().required("Pet Age is required !"),
  type: yup.string().trim().required("Pet type is required !"),
  gender: yup.string().trim().required("Pet gender is required !"),
});
