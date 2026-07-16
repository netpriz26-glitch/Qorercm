export type Testimonial = {
  quote: string;
  name: string;
  org: string;
};

// Representative example testimonials — replace with quotes from your own
// clients (with permission) before publishing.
export const testimonials: Testimonial[] = [
  {
    quote:
      "Switching our billing to QoreRCM was the single best operational decision we made last year. Denials dropped and our A/R over 90 days is a fraction of what it was.",
    name: "Practice Manager",
    org: "Multi-Specialty Clinic",
  },
  {
    quote:
      "We finally have visibility into our own revenue cycle. The monthly reporting alone has been worth the switch — no more guessing where claims stand.",
    name: "Physician Owner",
    org: "Independent Family Practice",
  },
  {
    quote:
      "Their appeals team recovered claims we'd already written off. Responsive, credentialed, and easy to work with.",
    name: "Office Administrator",
    org: "Outpatient Surgical Center",
  },
];
