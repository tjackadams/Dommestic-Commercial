import React, { useState } from "react";
import { Formik } from "formik";
import { Button, Form } from "react-bootstrap";
import { ReCAPTCHA } from "react-google-recaptcha";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  fullName: Yup.string()
    .min(2, "Please enter your Full Name.")
    .max(50, "Full Name is too long!")
    .required("Full Name is required."),
  phoneNumber: Yup.string().required("Please enter a valid phone number."),
  emailAddress: Yup.string()
    .email()
    .required("Please enter a valid email address."),
  enquiry: Yup.string()
    .min(2, "Please add some more details to your enquiry.")
    .max(500, "Thats too much information, please shorten your enquiry.")
    .required("Please ensure enquiry is filled out."),
});

const encode = (data: any) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

const RECAPTCHA_KEY = process.env.NEXT_PUBLIC_GOOGLE_RECAPTCHA_KEY || "";

export default function ContactForm() {
  const recaptchaRef = React.createRef<ReCAPTCHA>();
  return (
    <Formik
      initialValues={{
        fullName: "",
        phoneNumber: "",
        emailAddress: "",
        enquiry: "",
      }}
      validationSchema={validationSchema}
      onSubmit={(values, actions) => {
        const recaptchaValue = recaptchaRef.current?.getValue();

        fetch("/?no-cache=1", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: encode({
            ...values,
            "g-recaptcha-response": recaptchaValue,
          }),
        })
          .then(() => {
            actions.resetForm();
            actions.setSubmitting(false);
            recaptchaRef.current?.reset();
          })
          .catch((err) => {
            console.error(
              "An error occurred while submitting the form. Error: ",
              err
            );

            actions.setSubmitting(false);
            recaptchaRef.current?.reset();
          });
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (
        <Form
          noValidate
          onSubmit={handleSubmit}
          data-netlify="true"
          netlify-honeypot="bot-field"
        >
          <input type="hidden" name="form-name" value="contact" />
          <label hidden>
            Don’t fill this out: <input name="bot-field" />
          </label>
          <Form.Group controlId="fullName">
            <Form.Label>Full Name</Form.Label>
            <Form.Control
              type="text"
              name="fullName"
              value={values.fullName}
              onChange={handleChange}
              onBlur={handleBlur}
              isInvalid={!!errors.fullName}
            ></Form.Control>
            <Form.Control.Feedback type="invalid">
              {errors.fullName}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="phoneNumber">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              type="text"
              name="phoneNumber"
              value={values.phoneNumber}
              onChange={handleChange}
              onBlur={handleBlur}
              isInvalid={!!errors.phoneNumber}
            ></Form.Control>
            <Form.Control.Feedback type="invalid">
              {errors.phoneNumber}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="emailAddress">
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type="text"
              name="emailAddress"
              value={values.emailAddress}
              onChange={handleChange}
              onBlur={handleBlur}
              isInvalid={!!errors.emailAddress}
            ></Form.Control>
            <Form.Control.Feedback type="invalid">
              {errors.emailAddress}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="enquiry">
            <Form.Label>Enquiry</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="enquiry"
              value={values.enquiry}
              onChange={handleChange}
              onBlur={handleBlur}
              isInvalid={!!errors.enquiry}
            ></Form.Control>
            <Form.Control.Feedback type="invalid">
              {errors.enquiry}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group>
            <ReCAPTCHA size="normal" sitekey={RECAPTCHA_KEY} />
          </Form.Group>
          <div className="d-flex justify-content-end mt-4">
            <Button variant="primary" type="submit" style={{ minWidth: 120 }}>
              Send
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
}
