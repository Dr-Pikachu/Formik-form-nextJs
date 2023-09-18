import styles from "../../styles/Home.module.css";
import React from "react";
import { useFormik } from "formik";
import FormikSchem from "../FormikSchema";
const initialValues = {
  name: "",
  email: "",
  password: "",
  confirm_password: "",
};

const FormikForm = () => {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: FormikSchem,
      onSubmit: (values, action) => {
        console.log("values", values);
        action.resetForm();
      },
    });
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>
          <a href="">FORMIK FORM</a>
        </h1>
      <form className={styles.card} onSubmit={handleSubmit}>
        <label>Name</label>
        <br />
        <input
          type="name"
          name="name"
          autoComplete="off"
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.name && touched.name ? <div>{errors.name}</div> : <div></div>}
        <br />
        <label>Email</label>
        <br />
        <input
          type="email"
          name="email"
          autoComplete="off"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.email && touched.email ? (
          <div>{errors.email}</div>
        ) : (
          <div></div>
        )}
        <br />
        <label>Password</label>
        <br />
        <input
          type="password"
          name="password"
          autoComplete="off"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.password && touched.password ? (
          <div>{errors.password}</div>
        ) : (
          <div></div>
        )}
        <br />
        <label>Confirm Password</label>
        <br />
        <input
          type="password"
          name="confirm_password"
          autoComplete="off"
          value={values.confirm_password}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.confirm_password && touched.confirm_password ? (
          <div>{errors.confirm_password}</div>
        ) : (
          <div></div>
        )}
        <br />
        <input type="submit" style={{ cursor: "pointer" }} />
      </form>
    </main>
  );
};

export default FormikForm;
