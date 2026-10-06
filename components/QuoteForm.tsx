"use client";

import { useState, type FormEvent } from "react";
import { needOptions, PHONE_DISPLAY } from "@/lib/content";

type Need = (typeof needOptions)[number];
const emptyForm = { need: "Breakdown" as Need, from: "", to: "", phone: "" };

export default function QuoteForm() {
  const [form, setForm] = useState(emptyForm);
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const set = (key: "from" | "to" | "phone") => (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((f) => ({ ...f, [key]: e.target.value }));
    setError("");
  };

  const submit = (e: FormEvent) => {
    e.preventDefault();
    if (!form.from.trim()) return setError("Please add a collection location.");
    if (form.phone.replace(/\D/g, "").length < 10) return setError("Please enter a valid mobile number.");
    // TODO: send `form` to an API route / email service.
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="success" role="status">
        <span className="display success__title">Request received</span>
        <span className="success__body">
          We&apos;ll text {form.phone} with a fixed price shortly. Need us sooner? Call {PHONE_DISPLAY}.
        </span>
        <button
          type="button"
          onClick={() => {
            setForm(emptyForm);
            setSubmitted(false);
          }}
        >
          Send another
        </button>
      </div>
    );
  }

  return (
    <form className="form" onSubmit={submit} noValidate>
      <div className="field">
        <span className="field__label">What do you need?</span>
        <div className="chips">
          {needOptions.map((label) => (
            <button
              key={label}
              type="button"
              className="chip"
              aria-pressed={form.need === label}
              onClick={() => setForm((f) => ({ ...f, need: label }))}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
      <label className="field">
        <span className="field__label">Collection postcode or location</span>
        <input value={form.from} onChange={set("from")} placeholder="e.g. B6 7DG or M6 J7" autoComplete="postal-code" />
      </label>
      <label className="field">
        <span className="field__label">Drop-off (optional)</span>
        <input value={form.to} onChange={set("to")} placeholder="Garage, home or postcode" />
      </label>
      <label className="field">
        <span className="field__label">Mobile number</span>
        <input type="tel" value={form.phone} onChange={set("phone")} placeholder="07…" autoComplete="tel" />
      </label>
      {error && <span className="form__error" role="alert">{error}</span>}
      <button type="submit" className="btn btn--dark form__submit">Get my free quote</button>
      <span className="form__note">No obligation. We&apos;ll only use your number to send your quote.</span>
    </form>
  );
}
