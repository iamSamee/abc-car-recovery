"use client";

import { useState, type FormEvent } from "react";
import { needOptions } from "@/lib/content";
import { openWhatsApp, quoteMessage, whatsappLink } from "@/lib/whatsapp";
import { useCurrentLocation } from "./useCurrentLocation";
import PickupField from "./PickupField";
import WhatsAppSent from "./WhatsAppSent";

type Need = (typeof needOptions)[number];
const emptyForm = { need: "Breakdown" as Need, from: "", to: "", phone: "" };

export default function QuoteForm() {
  const [form, setForm] = useState(emptyForm);
  const [error, setError] = useState("");
  const [sentUrl, setSentUrl] = useState<string>();
  const location = useCurrentLocation(setError);

  const set = (key: "from" | "to" | "phone") => (value: string) => {
    setForm((f) => ({ ...f, [key]: value }));
    setError("");
  };

  const submit = (e: FormEvent) => {
    e.preventDefault();
    if (!form.from.trim()) return setError("Please add a collection location.");
    if (form.phone.replace(/\D/g, "").length < 10) return setError("Please enter a valid mobile number.");

    const url = whatsappLink(
      quoteMessage({
        heading: "Hi ABC, I'd like a recovery quote.",
        details: [["Service", form.need]],
        pickup: form.from,
        pickupPin: location.pin,
        destination: form.to,
        phone: form.phone,
      })
    );
    openWhatsApp(url);
    setSentUrl(url);
  };

  if (sentUrl) {
    return (
      <WhatsAppSent
        url={sentUrl}
        onReset={() => {
          setForm(emptyForm);
          location.clear();
          setSentUrl(undefined);
        }}
      />
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
      <PickupField
        id="home-from"
        label="Collection postcode or location"
        placeholder="e.g. B6 7DG or M6 J7"
        value={form.from}
        onChange={set("from")}
        location={location}
      />
      <label className="field">
        <span className="field__label">Drop-off (optional)</span>
        <input value={form.to} onChange={(e) => set("to")(e.target.value)} placeholder="Garage, home or postcode" />
      </label>
      <label className="field">
        <span className="field__label">Mobile number</span>
        <input type="tel" value={form.phone} onChange={(e) => set("phone")(e.target.value)} placeholder="07…" autoComplete="tel" />
      </label>
      {error && <span className="form__error" role="alert">{error}</span>}
      <button type="submit" className="btn btn--dark form__submit">Get my free quote on WhatsApp</button>
      <span className="form__note">Opens WhatsApp with your details filled in — just press Send.</span>
    </form>
  );
}
