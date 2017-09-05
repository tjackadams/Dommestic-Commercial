import React from "react";

import Button from "grommet/components/Button";
import Footer from "grommet/components/Footer";
import Form from "grommet/components/Form";
import FormField from "grommet/components/FormField";
import FormFields from "grommet/components/FormFields";
import Header from "grommet/components/Header";
import Heading from "grommet/components/Heading";
import TextInput from "grommet/components/TextInput";

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullname: "",
      email: "",
      message: "",
      formErrors: { fullname: "", email: "", message: "" },
      emailValid: false,
      fullnameValid: false,
      messageValid: false,
      formValid: false,
    };
  }

  handleUserInput = this.handleUserInput.bind(this);
  handleSubmit = this.handleSubmit.bind(this);

  handleUserInput(e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value }, () => {
      this.validateField(name, value);
    });
  }

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let emailValid = this.state.emailValid;
    let fullnameValid = this.state.fullnameValid;
    let messageValid = this.state.messageValid;

    switch (fieldName) {
      case "email":
        emailValid = value.length > 0;
        fieldValidationErrors.email = emailValid ? "" : " is required";
        if (!emailValid) {
          break;
        }
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? "" : " is invalid";
        break;

      case "fullname":
        fullnameValid = value.length > 0;
        fieldValidationErrors.fullname = fullnameValid ? "" : " is required";
        if (!fullnameValid) {
          break;
        }
        fullnameValid = value.match(/\b[^\d\W]+\b/g);
        fieldValidationErrors.fullname = fullnameValid ? "" : "letters only";

        break;

      case "message":
        messageValid = value.length > 0 && value.length <= 8000;
        fieldValidationErrors.message = messageValid ? "" : "is required";
        break;

      default:
        break;
    }
    this.setState(
      {
        formErrors: fieldValidationErrors,
        emailValid: emailValid,
        fullnameValid: fullnameValid,
        messageValid: messageValid
      },
      this.validateForm
    );
  }

  validateForm() {
    this.setState({formValid: this.state.emailValid && this.state.fullnameValid && this.state.messageValid});
  }

  formErrors = ({ formErrors }) => {
    Object.keys(formErrors).map((fieldName, i) => {
      if (formErrors[fieldName].length > 0) {
        return formErrors[fieldName];
      } else {
        return "";
      }
    });
  };

  handleSubmit(e) {
    e.preventDefault();

    var data = JSON.stringify({
      name: this.state.fullname,
      email: this.state.email,
      enquiry: this.state.message
    });

    fetch("https://formspree.io/stevetomkins53@gmail.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: data
    })
      .catch(function(ex) {
        console.log("parsing failed", ex);
      });

      window.location.reload();
  }

  render() {
    return (
      <Form
      action='https://formspree.io/stevetomkins53@gmail.com'
      method='POST'
        compact={false}
        noValidate
        id="ContactForm"
      >
        <Header>
          <Heading>
            Get in touch
          </Heading>
        </Header>
        <FormFields>
          <FormField
            error={this.state.formErrors.fullname}
            label="Full name"
            htmlFor="fullname"
          >
            <TextInput
              onDOMChange={this.handleUserInput}
              name="fullname"
              id="fullname"
              value={this.state.fullname}
            />
          </FormField>
          <FormField
            error={this.state.formErrors.email}
            label="Email"
            htmlFor="email"
          >
            <TextInput
              onDOMChange={this.handleUserInput}
              name="email"
              id="email"
              value={this.state.email}
            />
          </FormField>
          <FormField
            error={this.state.formErrors.message}
            label="Enquiry"
            htmlFor="message"
          >
            <textarea
              rows="6"
              type="text"
              id="message"
              name="message"
              onChange={this.handleUserInput}
            />
          </FormField>
        </FormFields>
        <Footer pad={{ vertical: "medium" }}>
        <input type="hidden" name="_next" value="https://dudleydrains.co.uk/ThankYou" />
        <input type="hidden" name="_subject" value="New Website Enquiry" />
        <input type="text" name="_gotcha" style={{display: 'none'}} />
          <Button
            label="Send"
            type={this.state.formValid ? 'submit' : 'button'}
            primary={true}
          />
        </Footer>

      </Form>
    );
  }
}

export default ContactForm;
