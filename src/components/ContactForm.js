"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
    // Clear error when user starts typing
    if (errors[id]) {
      setErrors((prev) => ({
        ...prev,
        [id]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          website: formData.message, // Mapping message to website as per API
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitMessage("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        setSubmitMessage(
          result.error || "Failed to send message. Please try again.",
        );
      }
    } catch (error) {
      setSubmitMessage("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <p className="mb-4">
        The contact form is currently inactive. Get a functional and working
        contact form with Ajax & PHP in a few minutes. Just copy and paste the
        files, add a little code and you're done.{" "}
      </p>
      <form onSubmit={handleSubmit}>
        <div className="row g-3">
          <div className="col-md-6">
            <div className="form-floating">
              <input
                type="text"
                className={`form-control ${errors.name ? "is-invalid" : ""}`}
                id="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
              />
              <label htmlFor="name">Your Name</label>
              {errors.name && (
                <div className="invalid-feedback">{errors.name}</div>
              )}
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-floating">
              <input
                type="email"
                className={`form-control ${errors.email ? "is-invalid" : ""}`}
                id="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
              />
              <label htmlFor="email">Your Email</label>
              {errors.email && (
                <div className="invalid-feedback">{errors.email}</div>
              )}
            </div>
          </div>
          <div className="col-12">
            <div className="form-floating">
              <input
                type="text"
                className={`form-control ${errors.subject ? "is-invalid" : ""}`}
                id="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
              />
              <label htmlFor="subject">Subject</label>
              {errors.subject && (
                <div className="invalid-feedback">{errors.subject}</div>
              )}
            </div>
          </div>
          <div className="col-12">
            <div className="form-floating">
              <textarea
                className={`form-control ${errors.message ? "is-invalid" : ""}`}
                placeholder="Leave a message here"
                id="message"
                style={{ height: "100px" }}
                value={formData.message}
                onChange={handleChange}
              ></textarea>
              <label htmlFor="message">Message</label>
              {errors.message && (
                <div className="invalid-feedback">{errors.message}</div>
              )}
            </div>
          </div>
          <div className="col-12">
            <button
              className="btn btn-primary w-100 py-3"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </div>
        </div>
      </form>
      {submitMessage && (
        <div
          className={`mt-3 alert ${submitMessage.includes("successfully") ? "alert-success" : "alert-danger"}`}
        >
          {submitMessage}
        </div>
      )}
    </>
  );
}
