import React from "react"
import { Formik, Field } from "formik"
import * as Yup from "yup"
import {
  PrimaryButton,
  DefaultButton,
  Label,
  initializeIcons,
} from "office-ui-fabric-react"
import {
  FormikTextField,
  FormikToggle,
  FormikCheckbox,
  FormikChoiceGroup,
  FormikDatePicker,
  FormikDropdown,
  FormikSwatchColorPicker,
} from "formik-office-ui-fabric-react"

const schema = Yup.object().shape({
  fullname: Yup.string()
    .min(2, "Please enter your Full Name.")
    .max(50, "Full Name is too long!")
    .required("Full Name is required."),
  phoneNumber: Yup.string().required("Please enter a valid phone number."),
  enquiry: Yup.string()
    .min(10, "Please add some more details to your enquiry.")
    .max(500, "Thats too much information, please shorten your enquiry.")
    .required("Please ensure enquiry is filled out."),
})

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

const ContactForm = () => {
  return (
    <Formik
      initialValues={{
        fullName: "",
        phoneNumber: "",
        enquiry: "",
      }}
      validationSchema={schema}
      onSubmit={values => {
        console.log("values: ", values)
        fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: encode({ values }),
        })
          .then(() => alert("success"))
          .catch(err => alert(err))
      }}
      render={({ values, touched, errors, ...props }) => (
        <form onSubmit={props.handleSubmit} style={{ width: "320px" }}>
          <input type="hidden" name="form-name" value="contact" />
          <p>
            <Field
              name="fullName"
              label="Full Name"
              required
              component={FormikTextField}
            />
          </p>
          <p>
            <Field
              label="Phone Number"
              name="phoneNumber"
              required
              component={FormikTextField}
            />
          </p>
          <p>
            <Field
              label="Enquiry"
              name="enquiry"
              required
              multiline={true}
              rows={5}
              resizable={false}
              component={FormikTextField}
            />
          </p>
          <div style={{ float: "right" }}>
            <PrimaryButton
              type="submit"
              disabled={props.isSubmitting || !props.dirty || !props.isValid}
            >
              Send
            </PrimaryButton>
          </div>
        </form>
      )}
    />
  )
}

export default ContactForm
