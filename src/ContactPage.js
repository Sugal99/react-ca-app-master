import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    subject: "",
    email: "",
    body: "",
  });
  const [errors, setErrors] = useState({
    fullName: "",
    subject: "",
    email: "",
    body: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // Clear error message when user types
    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let formIsValid = true;
    const newErrors = { ...errors };

    // Full Name validation
    if (formData.fullName.length < 3) {
      newErrors.fullName = "Full name must be at least 3 characters long.";
      formIsValid = false;
    }

    // Subject validation
    if (formData.subject.length < 3) {
      newErrors.subject = "Subject must be at least 3 characters long.";
      formIsValid = false;
    }

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
      formIsValid = false;
    }

    // Body validation
    if (formData.body.length < 3) {
      newErrors.body = "Body must be at least 3 characters long.";
      formIsValid = false;
    }

    // Update errors state
    setErrors(newErrors);

    // If form is valid, submit
    if (formIsValid) {
      // Here you can add your logic to handle form submission
      console.log(formData);
    }
  };

  return (
    <div className="container mt-5">
      <h1>Contact Us</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formFullName">
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your full name"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            isInvalid={!!errors.fullName}
          />
          <Form.Control.Feedback type="invalid">
            {errors.fullName}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formSubject">
          <Form.Label>Subject</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            isInvalid={!!errors.subject}
          />
          <Form.Control.Feedback type="invalid">
            {errors.subject}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            isInvalid={!!errors.email}
          />
          <Form.Control.Feedback type="invalid">
            {errors.email}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBody">
          <Form.Label>Body</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Enter your message"
            name="body"
            value={formData.body}
            onChange={handleChange}
            isInvalid={!!errors.body}
          />
          <Form.Control.Feedback type="invalid">
            {errors.body}
          </Form.Control.Feedback>
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default ContactPage;
