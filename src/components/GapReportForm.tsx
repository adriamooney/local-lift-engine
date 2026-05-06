"use client";

import { useState } from "react";

type Status = "idle" | "submitting" | "success" | "error";

export function GapReportForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const payload = {
      businessName: String(fd.get("businessName") ?? "").trim(),
      city: String(fd.get("city") ?? "").trim(),
      website: String(fd.get("website") ?? "").trim(),
      email: String(fd.get("email") ?? "").trim(),
    };

    setStatus("submitting");
    setMessage("");

    try {
      const res = await fetch("/api/gap-report", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = (await res.json().catch(() => ({}))) as { error?: string };

      if (!res.ok) {
        setStatus("error");
        setMessage(data.error ?? "Something went wrong. Please try again.");
        return;
      }

      setStatus("success");
      setMessage("Thanks — we got it. Check your inbox within one business day.");
      form.reset();
    } catch {
      setStatus("error");
      setMessage("Network error. Please try again.");
    }
  }

  return (
    <form className="gap-form" onSubmit={handleSubmit}>
      <div className="row">
        <div className="field">
          <label className="field-label" htmlFor="gap-businessName">
            Business name
          </label>
          <input
            id="gap-businessName"
            name="businessName"
            className="field-input"
            placeholder="Rip City Junk Removal"
            required
            autoComplete="organization"
            disabled={status === "submitting"}
          />
        </div>
        <div className="field">
          <label className="field-label" htmlFor="gap-city">
            City + state
          </label>
          <input
            id="gap-city"
            name="city"
            className="field-input"
            placeholder="Portland, OR"
            autoComplete="address-level2"
            disabled={status === "submitting"}
          />
        </div>
      </div>
      <div className="row">
        <div className="field">
          <label className="field-label" htmlFor="gap-website">
            Website URL
          </label>
          <input
            id="gap-website"
            name="website"
            className="field-input"
            placeholder="ripcityjunk.com — or 'none yet'"
            inputMode="url"
            autoComplete="url"
            disabled={status === "submitting"}
          />
        </div>
        <div className="field">
          <label className="field-label" htmlFor="gap-email">
            Best email
          </label>
          <input
            id="gap-email"
            name="email"
            className="field-input"
            placeholder="you@ripcityjunk.com"
            type="email"
            required
            autoComplete="email"
            disabled={status === "submitting"}
          />
        </div>
      </div>
      <div className="submit-row">
        <button type="submit" className="btn btn-primary btn-lg" disabled={status === "submitting"}>
          {status === "submitting" ? "Sending…" : "Send my Gap Report"}{" "}
          {status !== "submitting" ? <span className="arr">→</span> : null}
        </button>
        {status === "success" ? (
          <p className="micro" style={{ color: "var(--signal-700)" }}>
            {message}
          </p>
        ) : status === "error" ? (
          <p className="micro" style={{ color: "var(--clay-700)" }}>
            {message}
          </p>
        ) : (
          <p className="micro">
            In your inbox within 1 business day. We don&apos;t sell or share your info — ever.
          </p>
        )}
      </div>
    </form>
  );
}
