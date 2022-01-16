import React, { createRef, useState } from "react";
import { Formik } from "formik";
import { Button, Form } from "react-bootstrap";
import ReCAPTCHA from "react-google-recaptcha";
import * as Yup from "yup";
import { useRouter } from "next/router";

const validationSchema = Yup.object().shape({
  fullName: Yup.string()
    .label("Full Name")
    .min(2, "Please enter your Full Name.")
    .max(50, "Full Name is too long!")
    .required("Full Name is required."),
  phoneNumber: Yup.string().required("Please enter a valid phone number."),
  emailAddress: Yup.string()
    .label("Email Address")
    .email()
    .required("Please enter a valid email address."),
  enquiry: Yup.string()
    .label("Enquiry")
    .min(2, "Please add some more details to your enquiry.")
    .max(500, "Thats too much information, please shorten your enquiry.")
    .required("Please ensure enquiry is filled out."),
  "g-recaptcha-response": Yup.string().required(),
});

const encode = (data: any) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

const RECAPTCHA_KEY = process.env.NEXT_PUBLIC_GOOGLE_RECAPTCHA_KEY || "";

export default function ContactForm() {
  const [state, setState] = useState<{ recaptcha: string | null }>({
    recaptcha: "",
  });
  const router = useRouter();
  const isConfirmationScreenVisible =
    router.query?.success && router.query.success === "true";
  const isFormVisible = !isConfirmationScreenVisible;
  const recaptchaRef = createRef<ReCAPTCHA>();

  const recaptchaOnChange = (token: string | null) => {
    console.info("g-recaptcha-response", token);
    setState({ ...state, recaptcha: token });
  };

  const ConfirmationMessage = (
    <>
      <p>
        Thank you for submitting this form. Someone should get back to you as
        soon as possible.
      </p>
      <Button
        variant="primary"
        onClick={() => router.replace("/", "/", { shallow: true })}
      >
        Submit Another Enquiry
      </Button>
    </>
  );

  const ContactFormContent = (
    <Formik
      initialValues={{
        fullName: "",
        phoneNumber: "",
        emailAddress: "",
        enquiry: "",
      }}
      validationSchema={validationSchema}
      onSubmit={(values, actions) => {
        console.info("Submitting form data: ", values);

        fetch("/?success=true", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: encode({
            "form-name": "contact",
            ...values,
          }),
        })
          .catch((err) => {
            console.error(
              "An error occurred while submitting the form. Error: ",
              err
            );
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
          name="contact"
          data-netlify="true"
          data-netlify-recaptcha="true"
          onSubmit={handleSubmit}
        >
          <label hidden>
            Don&#39;t fill this out: <input name="bot-field" />
          </label>
          <input
            type="hidden"
            name="g-recaptcha-response"
            id="g-recaptcha-response"
            value={state.recaptcha ?? ""}
          />
          <Form.Group controlId="fullName">
            <Form.Label>Full Name</Form.Label>
            <Form.Control
              type="text"
              name="fullName"
              value={values.fullName}
              onChange={handleChange}
              onBlur={handleBlur}
              isInvalid={!!errors.fullName && touched.fullName}
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
              isInvalid={!!errors.phoneNumber && touched.phoneNumber}
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
              isInvalid={!!errors.emailAddress && touched.emailAddress}
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
              isInvalid={!!errors.enquiry && touched.enquiry}
            ></Form.Control>
            <Form.Control.Feedback type="invalid">
              {errors.enquiry}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mt-4">
            <ReCAPTCHA
              sitekey={RECAPTCHA_KEY}
              size="normal"
              onChange={recaptchaOnChange}
            />
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

  return <>{isFormVisible ? ContactFormContent : ConfirmationMessage}</>;
}
