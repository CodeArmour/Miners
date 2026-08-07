"use client";
import { FormEvent, useState } from "react";
import { useTheme } from "@/components/theme-context";
import { ConfirmationDialog } from "@/components/ui/feedback";
import { FieldState } from "@/components/ui/field";

type FieldStates = Record<string, FieldState>;

function FieldFeedback({ state, message, id }: { state: FieldState; message?: string; id: string }) {
  if (state === "default") return null;
  if (state === "success") return <span id={id} className="field-feedback field-feedback-success" aria-hidden="true" />;
  return (
    <span id={id} className={`field-feedback field-feedback-${state}`} role={state === "error" ? "alert" : "status"}>
      {state === "loading" && <span className="field-feedback-icon" aria-hidden="true" />}
      <span className={`field-state field-state-${state}`}>{state === "loading" ? "Checking…" : message}</span>
    </span>
  );
}
function Arrow() {
  return (
    <svg
      className="icon"
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path d="M5 12h13M13 6l6 6-6 6" />
    </svg>
  );
}
function Spark() {
  return (
    <svg
      className="icon"
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path d="m12 3 1.8 6.2L20 11l-6.2 1.8L12 19l-1.8-6.2L4 11l6.2-1.8Z" />
    </svg>
  );
}
export default function ContactPage() {
  const { dark } = useTheme();
  const [chatOpen, setChatOpen] = useState(false);
  const [fieldStates, setFieldStates] = useState<FieldStates>({});
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [pendingMailto, setPendingMailto] = useState("");
  function validateField(field: HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement) {
    const name = field.name;
    if (!name || name === "company" || name === "type" || name === "budget") return;
    setFieldStates((current) => ({ ...current, [name]: "loading" }));
    window.setTimeout(() => {
      setFieldStates((current) => ({ ...current, [name]: field.checkValidity() ? "success" : "error" }));
    }, 280);
  }
  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = e.currentTarget;
    const controls = Array.from(f.elements).filter(
      (element): element is HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement =>
        element instanceof HTMLInputElement || element instanceof HTMLSelectElement || element instanceof HTMLTextAreaElement,
    );
    const nextStates: FieldStates = {};
    controls.forEach((field) => {
      if (field.name && field.required) nextStates[field.name] = field.checkValidity() ? "success" : "error";
    });
    setFieldStates(nextStates);
    if (!f.checkValidity()) {
      f.reportValidity();
      return;
    }
    const d = new FormData(f);
    const subject = encodeURIComponent(`Project inquiry from ${d.get("name")}`);
    const body = encodeURIComponent(
      `Name: ${d.get("name")}\nEmail: ${d.get("email")}\nCompany: ${d.get("company")}\nProject type: ${d.get("type")}\nBudget: ${d.get("budget")}\n\n${d.get("brief")}`,
    );
    setPendingMailto(`mailto:hello@miners.group?subject=${subject}&body=${body}`);
    setConfirmOpen(true);
  }
  return (
    <main
      className={dark ? "home home-dark contact-page" : "home contact-page"}
    >
      <section
        className="contact-hero section-shell"
        aria-labelledby="contact-title"
      >
        <div>
          <p className="eyebrow">Contact Miners</p>
          <h1 id="contact-title">Tell us what you want to build.</h1>
          <p>
            Share the goal, the context, and where you need help. We&apos;ll
            respond with a clear next step—without turning the first
            conversation into a sales performance.
          </p>
        </div>
        <div className="contact-hero-note">
          <p className="eyebrow">What happens next</p>
          <ol>
            <li>
              <span>01</span>
              <div>
                <strong>We read your note</strong>
                <p>We take the time to understand the goal and context.</p>
              </div>
            </li>
            <li>
              <span>02</span>
              <div>
                <strong>We ask useful questions</strong>
                <p>A short follow-up helps us see the shape of the work.</p>
              </div>
            </li>
            <li>
              <span>03</span>
              <div>
                <strong>We suggest a next step</strong>
                <p>You leave with clarity, whether we work together or not.</p>
              </div>
            </li>
          </ol>
        </div>
      </section>
      <section
        className="contact-inquiry section-shell"
        aria-labelledby="inquiry-title"
      >
        <div className="contact-heading">
          <p className="eyebrow">Start a project</p>
          <h2 id="inquiry-title">Give us the useful details.</h2>
          <p>
            Share a little context and we&apos;ll take it from there. Required
            fields are marked in the form.
          </p>
        </div>
        <div className="contact-form-column">
          <form className="contact-form" onSubmit={submit} noValidate>
            <div className="form-grid">
              <label className={`field-group field-group-${fieldStates.name ?? "default"}`}>
                Name *<input name="name" required autoComplete="name" onBlur={(event) => validateField(event.currentTarget)} aria-invalid={fieldStates.name === "error"} aria-describedby={fieldStates.name ? "name-feedback" : undefined} />
                <FieldFeedback id="name-feedback" state={fieldStates.name ?? "default"} message="Please enter your name." />
              </label>
              <label className={`field-group field-group-${fieldStates.email ?? "default"}`}>
                Email *
                <input
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  onBlur={(event) => validateField(event.currentTarget)}
                  aria-invalid={fieldStates.email === "error"}
                  aria-describedby={fieldStates.email ? "email-feedback" : undefined}
                />
                <FieldFeedback id="email-feedback" state={fieldStates.email ?? "default"} message="Enter a valid email address." />
              </label>
              <label>
                Company / organisation
                <input name="company" autoComplete="organization" />
              </label>
              <label>
                Project type
                <select name="type" defaultValue="">
                  <option value="" disabled>
                    Select one
                  </option>
                  <option>Website</option>
                  <option>Mobile app</option>
                  <option>Custom software</option>
                  <option>Product design</option>
                </select>
              </label>
              <label>
                Budget range
                <select name="budget" defaultValue="">
                  <option value="" disabled>
                    Select one
                  </option>
                  <option>Under €10k</option>
                  <option>€10k–€30k</option>
                  <option>€30k–€75k</option>
                  <option>Let&apos;s discuss</option>
                </select>
              </label>
              <label className={`form-wide field-group field-group-${fieldStates.brief ?? "default"}`}>
                Project brief *
                <textarea
                  name="brief"
                  required
                  rows={6}
                  placeholder="What are you building, who is it for, and what outcome matters?"
                  onBlur={(event) => validateField(event.currentTarget)}
                  aria-invalid={fieldStates.brief === "error"}
                  aria-describedby={fieldStates.brief ? "brief-feedback" : undefined}
                />
                <FieldFeedback id="brief-feedback" state={fieldStates.brief ?? "default"} message="Tell us a little about the project." />
              </label>
              <label className="consent form-wide">
                <input name="consent" type="checkbox" required onChange={(event) => validateField(event.currentTarget)} aria-invalid={fieldStates.consent === "error"} aria-describedby={fieldStates.consent ? "consent-feedback" : undefined} />
                <span>
                  I agree that Miners may use these details to respond to my
                  inquiry.
                </span>
                <FieldFeedback id="consent-feedback" state={fieldStates.consent ?? "default"} message="Consent is required to continue." />
              </label>
            </div>
            <button className="button button-dark" type="submit">
              Send inquiry <Arrow />
            </button>
          </form>
        </div>
        <aside className="contact-side" aria-label="Alternative contact paths">
          <article className="contact-coffee">
            <p className="eyebrow">Free 30-minute coffee chat</p>
            <h3>Prefer to talk it through?</h3>
            <p>
              Choose a relaxed conversation if your scope is still forming or
              you want to test whether Miners is the right partner.
            </p>
            <ul>
              <li>✓ No pitch deck required</li>
              <li>✓ Bring questions or rough ideas</li>
              <li>✓ Leave with a practical next step</li>
            </ul>
            <a
              className="button button-mint"
              href="mailto:hello@miners.group?subject=Coffee%20chat"
            >
              Book the free chat <Arrow />
            </a>
          </article>
          <article className="contact-direct">
            <h3>Direct contact</h3>
            <strong>hello@miners.group</strong>
            <p>Brussels, Belgium · Working across Europe</p>
            <p>
              <a href="mailto:hello@miners.group?subject=LinkedIn">
                LinkedIn ↗
              </a>{" "}
              &nbsp;{" "}
              <a href="mailto:hello@miners.group?subject=GitHub">GitHub ↗</a>
            </p>
          </article>
        </aside>
      </section>
      <section
        className="contact-agreement section-shell"
        aria-labelledby="agreement-title"
      >
        <p className="eyebrow">Working agreement</p>
        <h2 id="agreement-title">Clear communication from the first note.</h2>
        <p>
          We keep conversations practical, transparent, and respectful of your
          time. No hard sell, no hidden process, and no promise of a fit before
          we understand the work.
        </p>
      </section>
      <button
        type="button"
        className="ask-miners focus-ring"
        aria-expanded={chatOpen}
        onClick={() => setChatOpen((v) => !v)}
      >
        <Spark /> Ask Miners
      </button>
      {chatOpen && (
        <div
          className="chat-popover glass-panel"
          role="dialog"
          aria-label="Ask Miners chat"
        >
          <strong>What are you building?</strong>
          <p>Tell us a little about your idea.</p>
          <a href="mailto:hello@miners.group">
            Send a note <Arrow />
          </a>
        </div>
      )}
      <ConfirmationDialog
        open={confirmOpen}
        title="Ready to send your inquiry?"
        message="Your email app will open with the details you provided. You can review everything before sending."
        confirmLabel="Send inquiry"
        onCancel={() => setConfirmOpen(false)}
        onConfirm={() => {
          window.location.href = pendingMailto;
          setConfirmOpen(false);
        }}
      />
    </main>
  );
}
