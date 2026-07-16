export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      // Safe: `data` is always one of our own schema builder outputs, never
      // raw user input.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
