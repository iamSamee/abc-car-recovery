import CookieSettingsButton from "./CookieSettingsButton";
import { COMPANY_NAME, COMPANY_NUMBER, REGISTERED_OFFICE } from "@/lib/content";

/** Company details UK law requires on the website, plus cookie settings. */
export default function CompanyLegal() {
  return (
    <span className="company-legal">
      © 2026 {COMPANY_NAME}. Registered in England and Wales, company no. {COMPANY_NUMBER}. Registered office:{" "}
      {REGISTERED_OFFICE}. · <CookieSettingsButton />
    </span>
  );
}
