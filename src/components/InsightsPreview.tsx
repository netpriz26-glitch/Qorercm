import Link from "next/link";
import { ArrowRight, Newspaper, TrendingUp } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/motion/StaggerGroup";
import { TiltCard } from "@/components/ui/TiltCard";
import { blogPosts } from "@/lib/content/blog";
import { caseStudies } from "@/lib/content/case-studies";

export function InsightsPreview() {
  const latestPosts = blogPosts.slice(0, 2);
  const featuredCase = caseStudies[0];

  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
      <Reveal variant="fadeUp">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Insights &amp; Results
          </h2>
        </div>
      </Reveal>

      <StaggerGroup className="mt-12 grid gap-6 lg:grid-cols-3">
        <StaggerItem className="lg:col-span-1">
          <Link href={`/case-studies#${featuredCase.slug}`} className="block h-full">
            <TiltCard tone="plain" className="h-full border border-brand-200 bg-brand-50/60 p-6">
              <TrendingUp className="h-5 w-5 text-brand-600" aria-hidden="true" />
              <span className="mt-3 block text-xs font-semibold uppercase tracking-wide text-brand-600">
                Case Study
              </span>
              <h3 className="mt-1 text-base font-semibold text-slate-900">{featuredCase.client}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{featuredCase.summary}</p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700">
                View all case studies
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </span>
            </TiltCard>
          </Link>
        </StaggerItem>

        {latestPosts.map((post) => (
          <StaggerItem key={post.slug}>
            <Link href={`/blog/${post.slug}`} className="block h-full">
              <TiltCard tone="plain" className="h-full border border-slate-200 bg-white p-6">
                <Newspaper className="h-5 w-5 text-brand-600" aria-hidden="true" />
                <span className="mt-3 block text-xs font-semibold uppercase tracking-wide text-brand-600">
                  {post.category}
                </span>
                <h3 className="mt-1 text-base font-semibold text-slate-900">{post.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{post.excerpt}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700">
                  Read article
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </span>
              </TiltCard>
            </Link>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </section>
  );
}
