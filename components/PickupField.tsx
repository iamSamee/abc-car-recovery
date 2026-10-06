"use client";

import { CURRENT_LOCATION_LABEL, useCurrentLocation } from "./useCurrentLocation";

type Props = {
  id: string;
  label: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  location: ReturnType<typeof useCurrentLocation>;
};

/** Pickup input with a "Use my location" button. Typing over the pin clears it. */
export default function PickupField({ id, label, placeholder, value, onChange, location }: Props) {
  return (
    <div className="field">
      <label htmlFor={id} className="field__label">{label}</label>
      <div className="field__row">
        <input
          id={id}
          value={value}
          placeholder={placeholder}
          onChange={(e) => {
            if (location.pin) location.clear();
            onChange(e.target.value);
          }}
        />
        <button
          type="button"
          className="loc-btn"
          disabled={location.status === "busy"}
          onClick={() => location.locate(() => onChange(CURRENT_LOCATION_LABEL))}
        >
          {location.label}
        </button>
      </div>
    </div>
  );
}
