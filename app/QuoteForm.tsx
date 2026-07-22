"use client";

import { FormEvent, useState } from "react";

import { officeAddress, whatsappHref, whatsappMessages } from "./contact";

export function QuoteForm() {
  const [status, setStatus] = useState("");

  function submitQuote(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const message = [
      whatsappMessages.general,
      "",
      `Name: ${form.get("name") || ""}`,
      `Email: ${form.get("email") || ""}`,
      `Service: ${form.get("service") || ""}`,
      `Message: ${form.get("message") || ""}`,
      `Office address: ${officeAddress}`,
    ].join("\n");

    setStatus("Opening WhatsApp with your prepared enquiry...");
    window.open(whatsappHref(message), "_blank", "noopener,noreferrer");
  }

  return (
    <form className="contact__form" onSubmit={submitQuote}>
      <p className="contact__required">All fields are required.</p>
      <label>
        Name
        <input type="text" name="name" placeholder="Your name" required />
      </label>
      <label>
        Email
        <input type="email" name="email" placeholder="name@example.com" required />
      </label>
      <label>
        Service
        <select name="service" defaultValue="" required>
          <option value="" disabled>
            Select a service
          </option>
          <option>B2B quotation</option>
          <option>Individual kitchen</option>
          <option>Commercial kitchen</option>
          <option>Home visit</option>
          <option>Showroom visit</option>
        </select>
      </label>
      <label>
        Message
        <textarea
          name="message"
          placeholder="Tell us about the project, layout, material preference, timeline, or site visit requirement."
          required
        />
      </label>
      <button type="submit">Prepare enquiry</button>
      <p className="contact__note" role="status">
        {status || "Your details stay on your device until you choose to send them on WhatsApp."}
      </p>
    </form>
  );
}
