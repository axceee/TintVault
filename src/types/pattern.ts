import type { CSSProperties } from "react";

export interface Pattern {
  id: string;
  name: string;
  category: "gradients" | "geometric" | "decorative" | "effects";
  description?: string;
  style: CSSProperties;
  code: string;
}
