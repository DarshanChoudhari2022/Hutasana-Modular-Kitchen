"use client";

import { FormEvent, useState } from "react";

import { whatsappHref, whatsappMessages } from "./contact";

export function QuoteForm() {
  const [status, setStatus] = useState("");

  function submitQuote(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const message = [
      whatsappMessages.general,
      "",
      `Name: ${form.get("name") || ""}`,
      `Enquiry type: ${form.get("type") || ""}`,
      `Phone / email: ${form.get("contact") || ""}`,
      `City: ${form.get("city") || ""}`,
      `Kitchen size / project size: ${form.get("size") || ""}`,
      `Requirement: ${form.get("message") || ""}`,
    ].join("\n");

    setStatus("Opening WhatsApp with your quotation request...");
    window.open(whatsappHref(message), "_blank", "noopener,noreferrer");
  }

  return (
    <form className="contact__form" onSubmit={submitQuote}>
      <label>
        Name
        <input type="text" name="name" placeholder="Your name" required />
      </label>
      <label>
        Enquiry type
        <select name="type" defaultValue="B2B quotation">
          <option>B2B quotation</option>
          <option>Individual kitchen</option>
          <option>Commercial kitchen</option>
          <option>Home visit</option>
          <option>Showroom visit</option>
        </select>
      </label>
      <label>
        Phone or email
        <input
          type="text"
          name="contact"
          placeholder="How should we contact you?"
          required
        />
      </label>
      <label>
        City
        <input type="text" name="city" placeholder="Your city / project location" />
      </label>
      <label>
        Kitchen or project size
        <input
          type="text"
          name="size"
          placeholder="Example: 10x8 ft, 25 flats, 2 counters"
        />
      </label>
      <label>
        Requirement
        <textarea
          name="message"
          placeholder="Tell us layout, materials, appliance list, budget, and timeline."
          required
        />
      </label>
      <button type="submit">Send quotation request on WhatsApp</button>
      <p className="contact__note" role="status">
        {status || "Your details stay on your device until you choose to send them on WhatsApp."}
      </p>
    </form>
  );
}
