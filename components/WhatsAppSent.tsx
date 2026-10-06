import { PHONE_DISPLAY, PHONE_TEL } from "@/lib/content";

/** Shown after submit, while the customer finishes sending in WhatsApp. */
export default function WhatsAppSent({ url, onReset }: { url: string; onReset: () => void }) {
  return (
    <div className="success" role="status">
      <span className="display success__title">Almost done — tap Send</span>
      <span className="success__body">
        We&apos;ve opened WhatsApp with your details filled in. Press <strong>Send</strong> and we&apos;ll reply with
        a fixed price. WhatsApp didn&apos;t open? Use the button below or call {PHONE_DISPLAY}.
      </span>
      <a href={url} target="_blank" rel="noopener" className="btn btn--whatsapp success__call">
        Open WhatsApp
      </a>
      <a href={PHONE_TEL} className="btn btn--yellow success__call">Call now instead</a>
      <button type="button" onClick={onReset}>Start again</button>
    </div>
  );
}
