import Link from "next/link";
import { ArrowRight, Newspaper, TrendingUp } from "lucide-react";
import { StaggerGroup, StaggerItem } from "@/components/motion/StaggerGroup";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { blogPosts } from "@/lib/content/blog";
import { caseStudies } from "@/lib/content/case-studies";

export function InsightsPreview() {
  const latestPosts = blogPosts.slice(0, 2);
  const featuredCase = caseStudies[0];

  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
      <SectionHeader title="Insights & Results" />

      <StaggerGroup className="mt-12 grid gap-6 lg:grid-cols-3">
        <StaggerItem className="lg:col-span-1">
          <Link href={`/case-studies#${featuredCase.slug}`} className="block h-full">
            <div className="h-full rounded-2xl border border-trust-200 bg-trust-50/60 p-6 shadow-sm transition-shadow hover:shadow-md">
              <TrendingUp className="h-5 w-5 text-trust-600" aria-hidden="true" />
              <span className="mt-3 block text-xs font-semibold uppercase tracking-wide text-trust-600">
                Case Study
              </span>
              <h3 className="mt-1 text-base font-semibold text-slate-900">{featuredCase.client}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{featuredCase.summary}</p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-trust-700">
                View all case studies
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </span>
            </div>
          </Link>
        </StaggerItem>

        {latestPosts.map((post) => (
          <StaggerItem key={post.slug}>
            <Link href={`/blog/${post.slug}`} className="block h-full">
              <div className="h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                <Newspaper className="h-5 w-5 text-trust-600" aria-hidden="true" />
                <span className="mt-3 block text-xs font-semibold uppercase tracking-wide text-trust-600">
                  {post.category}
                </span>
                <h3 className="mt-1 text-base font-semibold text-slate-900">{post.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{post.excerpt}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-trust-700">
                  Read article
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </span>
              </div>
            </Link>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </section>
  );
}
