import { useFormik } from "formik";
import { z } from "zod";
import { useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const RECAPTCHA_KEY = process.env.NEXT_PUBLIC_GOOGLE_RECAPTCHA_KEY || "";

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

  const formik = useFormik<ContactFormValues>({
    initialValues: {
      fullName: "",
      phoneNumber: "",
      emailAddress: "",
      enquiry: "",
    },
    onSubmit: () => {
      // Submission is handled by handleFormSubmit so we can include FormData
      // (e.g. reCAPTCHA response) in the POST body.
    },
    validate,
  });

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      setSubmitState("idle");
      const myForm = event.currentTarget;
      const formData = new FormData(myForm);
      const res = await fetch("__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData as any).toString(),
      });

      if (res.status === 200) {
        setSubmitState("success");
        formik.resetForm();
      } else {
        setSubmitState("error");
        console.warn(`${res.status} ${res.statusText}`);
      }
    } catch (e) {
      setSubmitState("error");
      console.warn(`${e}`);
    }

    // setSubmitState("idle");

    // const maybeTarget = event.target;
    // const maybeCurrentTarget = event.currentTarget;
    // const formEl =
    //   maybeCurrentTarget instanceof HTMLFormElement
    //     ? maybeCurrentTarget
    //     : maybeTarget instanceof HTMLElement
    //     ? maybeTarget.closest("form")
    //     : null;

    // if (!formEl) {
    //   console.error("Form submit error: could not find <form> element", {
    //     target: maybeTarget,
    //     currentTarget: maybeCurrentTarget,
    //   });
    //   setSubmitState("error");
    //   return;
    // }

    // formik.setTouched(
    //   {
    //     fullName: true,
    //     phoneNumber: true,
    //     emailAddress: true,
    //     enquiry: true,
    //   },
    //   true
    // );

    // const validationErrors = await formik.validateForm();
    // if (Object.keys(validationErrors).length > 0) {
    //   return;
    // }

    // formik.setSubmitting(true);

    // try {
    //   const formData = new FormData(formEl);
    //   const body = new URLSearchParams();
    //   const submittedKeys: string[] = [];
    //   formData.forEach((value, key) => {
    //     if (typeof value === "string") {
    //       body.append(key, value);
    //       submittedKeys.push(key);
    //     }
    //   });

    //   // Debug info (no field values logged)
    //   console.info("Submitting Netlify form", {
    //     target: "/__forms.html",
    //     keys: submittedKeys,
    //     hasRecaptchaResponse: true,
    //   });

    //   const response = await fetch("/__forms.html", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/x-www-form-urlencoded",
    //     },
    //     body: body.toString(),
    //   });

    //   console.info("Netlify form response", {
    //     status: response.status,
    //     statusText: response.statusText,
    //     redirected: response.redirected,
    //     url: response.url,
    //   });

    //   // Netlify can respond with redirects (3xx) for successful submissions.
    //   if (response.status < 200 || response.status >= 400) {
    //     let responseText = "";
    //     try {
    //       responseText = await response.text();
    //     } catch {
    //       // ignore
    //     }

    //     const detail = `${response.status} ${response.statusText}`;
    //     console.error("Netlify form submission failed", {
    //       detail,
    //       responseText,
    //     });
    //     throw new Error(detail);
    //   }

    //   setSubmitState("success");
    //   formik.resetForm();
    // } catch (_error) {
    //   console.error("Form submit error", _error);
    //   setSubmitState("error");
    // } finally {
    //   formik.setSubmitting(false);
    // }
  };

  return (
    <form name="contact" onSubmit={handleFormSubmit}>
      <input type="hidden" name="form-name" value="contact" />
      <input type="hidden" name="bot-field" />

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

      <div className="mt-4">
        <label htmlFor="fullName" className="block text-sm font-normal">
          Full Name
        </label>
        <input
          id="fullName"
          type="text"
          name="fullName"
          value={formik.values.fullName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className={`mt-1 w-full rounded border p-2 text-sm ${
            formik.errors.fullName && formik.touched.fullName
              ? "border-red-500"
              : "border-neutral-300"
          }`}
        />
        {formik.errors.fullName && formik.touched.fullName && (
          <p className="mt-1 text-sm text-red-600">{formik.errors.fullName}</p>
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
          value={formik.values.phoneNumber}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className={`mt-1 w-full rounded border p-2 text-sm ${
            formik.errors.phoneNumber && formik.touched.phoneNumber
              ? "border-red-500"
              : "border-neutral-300"
          }`}
        />
        {formik.errors.phoneNumber && formik.touched.phoneNumber && (
          <p className="mt-1 text-sm text-red-600">
            {formik.errors.phoneNumber}
          </p>
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
          value={formik.values.emailAddress}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className={`mt-1 w-full rounded border p-2 text-sm ${
            formik.errors.emailAddress && formik.touched.emailAddress
              ? "border-red-500"
              : "border-neutral-300"
          }`}
        />
        {formik.errors.emailAddress && formik.touched.emailAddress && (
          <p className="mt-1 text-sm text-red-600">
            {formik.errors.emailAddress}
          </p>
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
          value={formik.values.enquiry}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className={`mt-1 w-full rounded border p-2 text-sm ${
            formik.errors.enquiry && formik.touched.enquiry
              ? "border-red-500"
              : "border-neutral-300"
          }`}
        />
        {formik.errors.enquiry && formik.touched.enquiry && (
          <p className="mt-1 text-sm text-red-600">{formik.errors.enquiry}</p>
        )}
      </div>

      <div data-netlify-recaptcha="true"></div>

      <div className="mt-4 flex justify-end">
        <button
          type="submit"
          disabled={formik.isSubmitting}
          className="min-w-30 rounded bg-(--primary) px-4 py-2 text-white hover:bg-(--primary-lighter)"
        >
          Send
        </button>
      </div>
    </form>
  );
}
