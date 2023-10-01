import "./contact.css";

import { useFormik } from "formik";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { TextField } from "@mui/material";

export default function Contact() {
  const form = useRef();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
    }),
    onSubmit: (values) => {
      console.log(values);

      emailjs
        .sendForm(
          "service_ii4lrol",
          "template_8cj5vjq",
          form.current,
          "sSUxd-15JpuCTbCrl"
        )
        .then(
          (result) => {
            console.log(result.text);
            toast.success("Thanks for choosing our services!", {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
          },
          (error) => {
            console.log(error.text);
          }
        );
      formik.resetForm();
    },
  });
  return (
    <section className="section contact" id="contact">
      <div className="container">
        <h1 className="section__title">
          <span>Contact</span> us
        </h1>
        <div className="contact__flex">
          <div>
            <p className="contact__text">
              I'm always open to discussing product design work or partnerships.
            </p>
            <div className="contact__contacts">
              <a href="tel:+14251234563">+1 (425) 123-45-63</a>
              <a href="mailto:example@mail.ua">example@mail.ua</a>
            </div>
          </div>
          <form
            ref={form}
            onSubmit={formik.handleSubmit}
            className="contact__form"
          >
            <TextField
              fullWidth
              size="small"
              label="Name"
              variant="outlined"
              required
              id="name"
              name="name"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
            />

            <TextField
              fullWidth
              size="small"
              label="Email"
              variant="outlined"
              required
              id="email"
              name="email"
              type="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />

            <TextField
              fullWidth
              multiline
              rows={4}
              label="Message"
              id="message"
              name="message"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.message}
            />

            <button className="contact__form-btn" type="submit">
              Submit
            </button>
          </form>
        </div>

        <ToastContainer style={{ zIndex: 1000000 }} />
      </div>
    </section>
  );
}
