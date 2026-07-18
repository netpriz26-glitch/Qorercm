import type { ReactNode } from "react";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export function LegalPage({
  title,
  path,
  lastUpdated,
  children,
}: {
  title: string;
  path: string;
  lastUpdated: string;
  children: ReactNode;
}) {
  return (
    <>
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: title, path }]} />
      <article className="mx-auto max-w-3xl px-4 py-14 sm:px-6 sm:py-20">
        <div className="mb-10 rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">
          <strong>Template notice:</strong> this page is placeholder content generated to satisfy
          Google Ads landing page policy requirements. Have it reviewed by qualified legal counsel
          — especially for HIPAA business associate obligations — before publishing.
        </div>

        <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">{title}</h1>
        <p className="mt-2 text-sm text-slate-500">Last updated: {lastUpdated}</p>

        <div className="mt-8 space-y-6 text-slate-700 [&_a]:text-trust-700 [&_a]:underline [&_h2]:mt-8 [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-slate-900 [&_li]:leading-relaxed [&_p]:leading-relaxed [&_ul]:list-disc [&_ul]:space-y-1.5 [&_ul]:pl-5">
          {children}
        </div>
      </article>
    </>
  );
}
