import "./contact.css";

import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import PropTypes from "prop-types";
import "react-toastify/dist/ReactToastify.css";

import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { TextField } from "@mui/material";
import { ThreeDots } from "react-loader-spinner";

import { motion } from "framer-motion";
import { BsFillTelephoneFill, BsMailbox2 } from "react-icons/bs";

export default function Contact({ selectedColor }) {
  const [isSending, setIsSending] = useState(false);
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
    onSubmit: () => {
      setIsSending(true);
      emailjs
        .sendForm(
          "service_ii4lrol",
          "template_8cj5vjq",
          form.current,
          "sSUxd-15JpuCTbCrl"
        )
        .then(
          () => {
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

            setIsSending(false);
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
        <motion.div
          initial={{ opacity: 0, y: 200 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ ease: [0.4, 0, 0.2, 1], duration: 1 }}
          viewport={{ once: true }}
        >
          <h1 className="section__title">
            <span>Contact</span> us
          </h1>
        </motion.div>
        <div className="contact__flex">
          <motion.div
            initial={{ opacity: 0, y: 200 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ease: [0.4, 0, 0.2, 1], duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <p className="contact__text">
              I'm always open to discussing product design work or partnerships.
            </p>
            <div className="contact__contacts" style={{ color: selectedColor }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <BsFillTelephoneFill size={25} />
                <a href="tel:+14251234563">+1 (425) 123-45-63</a>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <BsMailbox2 size={25} />
                <a href="mailto:example@mail.ua">example@mail.ua</a>
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 200 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ease: [0.4, 0, 0.2, 1], duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
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

            <button
              disabled={isSending ? true : false}
              className="contact__form-btn"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: selectedColor,
              }}
              type="submit"
            >
              {isSending ? (
                <ThreeDots
                  height="25"
                  width="25"
                  radius="9"
                  color="#FFF"
                  ariaLabel="three-dots-loading"
                  wrapperStyle={{ margin: 0 }}
                  wrapperClassName=""
                  visible={true}
                />
              ) : (
                "Submit"
              )}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

Contact.propTypes = {
  selectedColor: PropTypes.string,
};
