"use client";

import { useState, type FormEvent } from "react";
import type { Landing } from "@/lib/landings";
import { openWhatsApp, quoteMessage, whatsappLink } from "@/lib/whatsapp";
import { useCurrentLocation } from "@/components/useCurrentLocation";
import PickupField from "@/components/PickupField";
import WhatsAppSent from "@/components/WhatsAppSent";

const vehicles = ["Car", "Van", "4x4"];

type Props = { config: Landing["quote"] };

export default function LandingQuoteForm({ config }: Props) {
  const empty = { vehicle: vehicles[0], issue: config.issues[0], from: "", to: "", phone: "" };
  const [form, setForm] = useState(empty);
  const [error, setError] = useState("");
  const [sentUrl, setSentUrl] = useState<string>();
  const location = useCurrentLocation(setError);

  const set = (key: "from" | "to" | "phone") => (value: string) => {
    setForm((f) => ({ ...f, [key]: value }));
    setError("");
  };

  const submit = (e: FormEvent) => {
    e.preventDefault();
    if (!form.from.trim()) return setError(config.fromError);
    if (form.phone.replace(/\D/g, "").length < 10) return setError("Please enter a valid mobile number.");

    const url = whatsappLink(
      quoteMessage({
        heading: `Hi ABC, I'd like ${/^[aeiou]/i.test(config.successNoun) ? "an" : "a"} ${config.successNoun}.`,
        details: [
          ["Vehicle", form.vehicle],
          [config.issueLabel.replace(/\?$/, ""), form.issue],
        ],
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
          setForm(empty);
          location.clear();
          setSentUrl(undefined);
        }}
      />
    );
  }

  const chips = (options: string[], key: "vehicle" | "issue") => (
    <div className="chips">
      {options.map((label) => (
        <button
          key={label}
          type="button"
          className="chip"
          aria-pressed={form[key] === label}
          onClick={() => setForm((f) => ({ ...f, [key]: label }))}
        >
          {label}
        </button>
      ))}
    </div>
  );

  return (
    <form className="form form--roomy" onSubmit={submit} noValidate>
      <div className="field">
        <span className="field__label">Vehicle</span>
        {chips(vehicles, "vehicle")}
      </div>
      <div className="field">
        <span className="field__label">{config.issueLabel}</span>
        {chips(config.issues, "issue")}
      </div>
      <PickupField
        id="lp-from"
        label={config.fromLabel}
        placeholder="Postcode, road or junction"
        value={form.from}
        onChange={set("from")}
        location={location}
      />
      <label className="field">
        <span className="field__label">Destination</span>
        <input value={form.to} onChange={(e) => set("to")(e.target.value)} placeholder={config.toPlaceholder} />
      </label>
      <label className="field">
        <span className="field__label">Mobile number</span>
        <input type="tel" value={form.phone} onChange={(e) => set("phone")(e.target.value)} placeholder="07…" autoComplete="tel" />
      </label>
      {error && <span className="form__error" role="alert">{error}</span>}
      <button type="submit" className="btn btn--dark form__submit">{config.submitLabel} on WhatsApp</button>
      <span className="form__note">Opens WhatsApp with your details filled in — just press Send.</span>
    </form>
  );
}
