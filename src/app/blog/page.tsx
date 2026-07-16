import type { Metadata } from "next";
import Link from "next/link";
import { Newspaper, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { TiltCard } from "@/components/ui/TiltCard";
import { StaggerGroup, StaggerItem } from "@/components/motion/StaggerGroup";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { blogPosts } from "@/lib/content/blog";

export const metadata: Metadata = {
  title: "Blog",
  description: "Practical guidance on medical billing, denial management, and revenue cycle operations.",
  alternates: { canonical: "/blog" },
};

export default function BlogIndexPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
        ])}
      />
      <PageHero
        eyebrow="Blog"
        title="Revenue Cycle Insights"
        description="Practical, no-fluff guidance on denials, coding, and getting paid faster — written by our RCM team."
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <StaggerGroup className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <StaggerItem key={post.slug}>
              <Link href={`/blog/${post.slug}`} className="block h-full">
                <TiltCard tone="plain" className="h-full overflow-hidden border border-slate-200 bg-white">
                  <div className="relative flex h-32 items-center justify-center bg-gradient-to-br from-brand-500 via-accent-500 to-brand-700">
                    <Newspaper className="h-9 w-9 text-white/90" aria-hidden="true" />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-brand-600">
                      <span>{post.category}</span>
                      <span aria-hidden="true">·</span>
                      <span>{post.readingMinutes} min read</span>
                    </div>
                    <h2 className="mt-2 text-base font-semibold text-slate-900">{post.title}</h2>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">{post.excerpt}</p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700">
                      Read article
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </span>
                  </div>
                </TiltCard>
              </Link>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </section>
    </>
  );
}
