import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../../redux/slice/auth-slice";

const Login = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const formik = useFormik({
    initialValues: {
      email: "admin@demo.com",
      password: "admin1234",
    },
    validationSchema: Yup.object({
      email: Yup.string().required().email(),
      password: Yup.string().required().min(4),
    }),
    onSubmit: (data) => {
      console.log("formik data", data);
      dispatch(login(data));
    },
  });

  // console.log("formik.values", formik.values);
  // console.log("formik.error", formik.errors);

  return (
    <>
      <section className="w-full h-screen p-10 place-content-center grid grid-cols-1 gap-8 md:grid-cols-3 md:items-center">
        <div className="md:col-span-2">
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
            alt="login-img"
            className="w-full"
          />
        </div>
        <div className="md:col-span-1">
          <h1 className="text-center mb-6 text-4xl text-gray-900 font-bold">
            Login
          </h1>
          <form onSubmit={formik.handleSubmit}>
            <div className="mb-4">
              <input
                type="text"
                name="email"
                placeholder="Email Address"
                className="border border-solid border-gray-700 w-full px-2 py-2 rounded-md focus:outline-none"
                value={formik.values.email}
                onChange={formik.handleChange}
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                name="password"
                placeholder="Password"
                className="border border-solid border-gray-700 w-full px-2 py-2 rounded-md focus:outline-none"
                value={formik.values.password}
                onChange={formik.handleChange}
              />
            </div>
            <button
              type="submit"
              className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full disabled:bg-gray-500 disabled:cursor-progress"
              disabled={auth.isLoading}
            >
              {auth.isLoading ? "Login......." : "Login"}
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Login;
