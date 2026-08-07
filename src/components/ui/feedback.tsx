"use client";

import { ReactNode } from "react";

export type NoticeTone = "success" | "error" | "warning" | "info";

export function FeedbackNotice({ tone, title, message, onClose }: { tone: NoticeTone; title: string; message: string; onClose?: () => void }) {
  return <div className={`feedback-notice feedback-${tone}`} role={tone === "error" ? "alert" : "status"} aria-live="polite"><div><strong>{title}</strong><p>{message}</p></div>{onClose && <button type="button" className="feedback-close focus-ring" aria-label="Dismiss notification" onClick={onClose}>×</button>}</div>;
}

export function ConfirmationDialog({ open, title, message, confirmLabel = "Confirm", onCancel, onConfirm, children }: { open: boolean; title: string; message: string; confirmLabel?: string; onCancel: () => void; onConfirm: () => void; children?: ReactNode }) {
  if (!open) return null;
  return <div className="dialog-backdrop" role="presentation"><div className="confirmation-dialog" role="dialog" aria-modal="true" aria-labelledby="confirmation-title"><strong id="confirmation-title">{title}</strong><p>{message}</p>{children}<div className="dialog-actions"><button type="button" className="button button-ghost" onClick={onCancel}>Keep editing</button><button type="button" className="button button-dark" onClick={onConfirm}>{confirmLabel}</button></div></div></div>;
}
