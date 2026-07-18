import { siteConfig } from "@/lib/site-config";
import { services } from "@/lib/content/services";

export const dynamic = "force-static";

export async function GET() {
  const url = (path: string) => `${siteConfig.url}${path}`;

  const serviceLinks = services
    .map((service) => `- [${service.name}](${url(`/services/${service.slug}`)}): ${service.shortDescription}`)
    .join("\n");

  const body = `# ${siteConfig.name}

> ${siteConfig.description}

${siteConfig.offer.subheadline}

## Services

${serviceLinks}

## Company

- [About](${url("/about")}): Background on ${siteConfig.name} and its approach to revenue cycle management.
- [Leadership](${url("/leadership")}): The team behind ${siteConfig.name}.
- [Case Studies](${url("/case-studies")}): Outcomes practices have seen after moving their revenue cycle to ${siteConfig.name}.
- [Contact](${url("/contact")}): Request a free Revenue Cycle Audit or get in touch.

## Resources

- [Blog](${url("/blog")}): Articles on medical billing, claim denials, and revenue cycle management.
- [Resources](${url("/resources")}): Additional guides and materials.

## Optional

- [Privacy Policy](${url("/privacy-policy")})
- [Terms & Conditions](${url("/terms-conditions")})
- [Cookie Policy](${url("/cookie-policy")})
`;

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
