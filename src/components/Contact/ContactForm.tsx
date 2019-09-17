import React, { useState } from "react"
import { Formik, FormikActions, FormikProps, Form, Field } from "formik"
import * as Yup from "yup"
import {
  DefaultPalette,
  MessageBar,
  MessageBarType,
  PrimaryButton,
  ProgressIndicator,
} from "office-ui-fabric-react"
import { FormikTextField } from "formik-office-ui-fabric-react"

const schema = Yup.object().shape({
  fullName: Yup.string()
    .min(2, "Please enter your Full Name.")
    .max(50, "Full Name is too long!")
    .required("Full Name is required."),
  phoneNumber: Yup.string().required("Please enter a valid phone number."),
  enquiry: Yup.string()
    .min(2, "Please add some more details to your enquiry.")
    .max(500, "Thats too much information, please shorten your enquiry.")
    .required("Please ensure enquiry is filled out."),
})

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

interface ContactFormValues {
  fullName: string
  phoneNumber: string
  enquiry: string
}

export const ContactForm: React.SFC<{}> = () => {
  const [state, setState] = useState({ isSuccess: false, isFailed: false })

  return (
    <>
      {state.isSuccess && !state.isFailed && (
        <MessageBar
          messageBarType={MessageBarType.success}
          isMultiline={false}
          dismissButtonAriaLabel="Close"
          onDismiss={() => setState({ isFailed: false, isSuccess: false })}
        >
          We'll be in touch shortly.
        </MessageBar>
      )}
      {!state.isSuccess && state.isFailed && (
        <MessageBar
          messageBarType={MessageBarType.error}
          isMultiline={false}
          dismissButtonAriaLabel="Close"
          onDismiss={() => setState({ isFailed: false, isSuccess: false })}
        >
          Looks like an error occurred whilst submitting the form. Please
          refresh the page and try it again.
        </MessageBar>
      )}
      <Formik
        initialValues={{
          fullName: "",
          phoneNumber: "",
          enquiry: "",
          "bot-field": "",
        }}
        validationSchema={schema}
        onSubmit={(
          values: ContactFormValues,
          actions: FormikActions<ContactFormValues>
        ) => {
          setTimeout(() => {
            fetch("/?no-cache=1", {
              method: "POST",
              headers: { "Content-Type": "application/x-www-form-urlencoded" },
              body: encode({
                "form-name": "contact",
                ...values,
              }),
            })
              .then(() => {
                actions.resetForm()
                setState({ isFailed: false, isSuccess: true })
                actions.setSubmitting(false)
              })
              .catch(err => {
                console.error(
                  "An error occurred while submitting the form. Error: ",
                  err
                )

                setState({ isFailed: true, isSuccess: false })
                actions.setSubmitting(false)
              })
          }, 1100)
        }}
        render={(props: FormikProps<ContactFormValues>) => (
          <Form
            name="contact"
            style={{ width: "320px" }}
            data-netlify="true"
            data-netlify-honeypot="bot-field"
          >
            <Field type="hidden" name="form-name" value="contact" />
            <p hidden>
              <label>
                Don’t fill this out: <Field name="bot-field" />
              </label>
            </p>
            <Field
              label="Full Name"
              name="fullName"
              required
              component={FormikTextField}
            />
            <Field
              label="Phone Number"
              name="phoneNumber"
              required
              component={FormikTextField}
            />
            <Field
              label="Enquiry"
              name="enquiry"
              required
              multiline={true}
              rows={5}
              resizable={false}
              component={FormikTextField}
            />
            <footer style={{ marginTop: "2em" }}>
              <div style={{ float: "right" }}>
                <PrimaryButton
                  type="submit"
                  disabled={props.isSubmitting}
                  styles={{
                    rootHovered: {
                      backgroundColor: DefaultPalette.teal,
                    },
                    rootPressed: {
                      backgroundColor: DefaultPalette.teal,
                    },
                  }}
                >
                  Send
                </PrimaryButton>
              </div>
              <div style={{ width: "100%", float: "right", marginTop: 10 }}>
                {props.isSubmitting ? (
                  <ProgressIndicator />
                ) : (
                  <hr style={{ marginTop: "9px", marginBottom: "7px " }} />
                )}
              </div>
            </footer>
          </Form>
        )}
      />
    </>
  )
}
