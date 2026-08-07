import { ReactNode } from "react";

export type FieldState = "default" | "error" | "success" | "loading" | "disabled";

export function FieldStateMessage({ state, children }: { state: FieldState; children?: ReactNode }) {
  if (state === "default") return null;
  return <span className={`field-state field-state-${state}`} role={state === "error" ? "alert" : "status"}>{state === "loading" ? "Checking…" : children}</span>;
}
