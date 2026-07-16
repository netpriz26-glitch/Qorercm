// lucide-react no longer ships brand icons (trademark reasons), so these are
// small hand-written outline icons matching the rest of the icon set's style.
type IconProps = { className?: string };

export function LinkedInIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.14 1.45-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.11 20.45H3.56V9h3.55v11.45z" />
    </svg>
  );
}

export function FacebookIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M13.5 21v-7.5h2.5l.5-3h-3V8.5c0-.87.24-1.46 1.5-1.46H16.6V4.35C16.34 4.31 15.44 4.24 14.4 4.24c-2.18 0-3.67 1.33-3.67 3.77v2.49H8.2v3h2.53V21h2.77z" />
    </svg>
  );
}

export function XIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M18.24 3H21l-6.27 7.16L22 21h-6.19l-4.85-6.34L5.4 21H2.62l6.7-7.66L2 3h6.34l4.4 5.8L18.24 3zm-1.08 16.17h1.53L7.94 4.72H6.3l10.86 14.45z" />
    </svg>
  );
}
