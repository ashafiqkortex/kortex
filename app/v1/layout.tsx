// Loads the v10 stylesheet for this route only. Next code-splits CSS per
// segment, so nothing here reaches the rest of the site.
import "./v1.css";

export default function V1Layout({ children }: { children: React.ReactNode }) {
  return children;
}
