import { useFormik } from "formik";
import { z } from "zod";
import { useState } from "react";

type ContactFormValues = {
  fullName: string;
  phoneNumber: string;
  emailAddress: string;
  enquiry: string;
};

const contactFormSchema = z.object({
  fullName: z
    .string()
    .min(2, "Please enter your Full Name.")
    .max(50, "Full Name is too long!")
    .trim(),
  phoneNumber: z.string().min(1, "Please enter a valid phone number."),
  emailAddress: z
    .string()
    .email("Please enter a valid email address.")
    .min(1, "Please enter a valid email address."),
  enquiry: z
    .string()
    .min(2, "Please add some more details to your enquiry.")
    .max(500, "Thats too much information, please shorten your enquiry.")
    .min(1, "Please ensure enquiry is filled out."),
});

function validate(values: ContactFormValues) {
  const result = contactFormSchema.safeParse(values);
  if (result.success) {
    return {};
  }

  const errors: Partial<Record<keyof ContactFormValues, string>> = {};
  for (const issue of result.error.issues) {
    const field = issue.path[0];
    if (!field || typeof field !== "string") {
      continue;
    }

    const key = field as keyof ContactFormValues;
    if (!errors[key]) {
      errors[key] = issue.message;
    }
  }

  return errors;
}

export default function ContactForm() {
  const [submitState, setSubmitState] = useState<"idle" | "success" | "error">(
    "idle"
  );

  const {
    handleSubmit,
    handleChange,
    handleBlur,
    touched,
    errors,
    values,
    resetForm,
    isSubmitting,
  } = useFormik<ContactFormValues>({
    initialValues: {
      fullName: "",
      phoneNumber: "",
      emailAddress: "",
      enquiry: "",
    },
    onSubmit: async (formValues, helpers) => {
      setSubmitState("idle");

      try {
        const body = new URLSearchParams({
          "form-name": "contact",
          fullName: formValues.fullName,
          phoneNumber: formValues.phoneNumber,
          emailAddress: formValues.emailAddress,
          enquiry: formValues.enquiry,
          "bot-field": "",
        });

        const response = await fetch("/__forms.html", {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: body.toString(),
        });

        if (!response.ok) {
          throw new Error(`Form submission failed: ${response.status}`);
        }

        setSubmitState("success");
        resetForm();
      } catch (_error) {
        setSubmitState("error");
      } finally {
        helpers.setSubmitting(false);
      }
    },
    validate,
  });

  return (
    <form
      name="contact"
      method="POST"
      action="/__forms.html"
      data-netlify="true"
      netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
    >
      <input type="hidden" name="form-name" value="contact" />

      {submitState === "success" && (
        <div
          className="rounded border border-green-200 bg-green-50 p-3 text-green-800"
          role="alert"
        >
          Thanks for contacting us!
        </div>
      )}
      {submitState === "error" && (
        <div
          className="rounded border border-red-200 bg-red-50 p-3 text-red-800"
          role="alert"
        >
          Sorry, we could not submit your enquiry right now. Please try again in
          a moment.
        </div>
      )}

      <div className="hidden">
        <label htmlFor="bot-field">Dont fill this out if youre human:</label>
        <input
          id="bot-field"
          name="bot-field"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div data-netlify-recaptcha="true" />

      <div className="mt-4">
        <label htmlFor="fullName" className="block text-sm font-normal">
          Full Name
        </label>
        <input
          id="fullName"
          type="text"
          name="fullName"
          value={values.fullName}
          onChange={handleChange}
          onBlur={handleBlur}
          className={`mt-1 w-full rounded border p-2 text-sm ${
            errors.fullName && touched.fullName
              ? "border-red-500"
              : "border-neutral-300"
          }`}
        />
        {errors.fullName && touched.fullName && (
          <p className="mt-1 text-sm text-red-600">{errors.fullName}</p>
        )}
      </div>

      <div className="mt-4">
        <label htmlFor="phoneNumber" className="block text-sm font-normal">
          Phone Number
        </label>
        <input
          id="phoneNumber"
          type="text"
          name="phoneNumber"
          value={values.phoneNumber}
          onChange={handleChange}
          onBlur={handleBlur}
          className={`mt-1 w-full rounded border p-2 text-sm ${
            errors.phoneNumber && touched.phoneNumber
              ? "border-red-500"
              : "border-neutral-300"
          }`}
        />
        {errors.phoneNumber && touched.phoneNumber && (
          <p className="mt-1 text-sm text-red-600">{errors.phoneNumber}</p>
        )}
      </div>

      <div className="mt-4">
        <label htmlFor="emailAddress" className="block text-sm font-normal">
          Email Address
        </label>
        <input
          id="emailAddress"
          type="email"
          name="emailAddress"
          value={values.emailAddress}
          onChange={handleChange}
          onBlur={handleBlur}
          className={`mt-1 w-full rounded border p-2 text-sm ${
            errors.emailAddress && touched.emailAddress
              ? "border-red-500"
              : "border-neutral-300"
          }`}
        />
        {errors.emailAddress && touched.emailAddress && (
          <p className="mt-1 text-sm text-red-600">{errors.emailAddress}</p>
        )}
      </div>

      <div className="mt-4">
        <label htmlFor="enquiry" className="block text-sm font-normal">
          Enquiry
        </label>
        <textarea
          id="enquiry"
          rows={3}
          name="enquiry"
          value={values.enquiry}
          onChange={handleChange}
          onBlur={handleBlur}
          className={`mt-1 w-full rounded border p-2 text-sm ${
            errors.enquiry && touched.enquiry
              ? "border-red-500"
              : "border-neutral-300"
          }`}
        />
        {errors.enquiry && touched.enquiry && (
          <p className="mt-1 text-sm text-red-600">{errors.enquiry}</p>
        )}
      </div>

      <div className="mt-4 flex justify-end">
        <button
          type="submit"
          disabled={isSubmitting}
          className="min-w-30 rounded bg-(--primary) px-4 py-2 text-white hover:bg-(--primary-lighter)"
        >
          Send
        </button>
      </div>
    </form>
  );
}
