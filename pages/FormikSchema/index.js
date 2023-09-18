import * as Yup from "yup";

const FormikSchema = Yup.object({
  name: Yup.string().min(2).max(10).required("please enter your name"),
  email: Yup.string().email().required("please enter your Email"),
  password: Yup.string().min(6).required("please enter your password"),
  confirm_password: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "password must Match"
  ),
});

export default FormikSchema;
