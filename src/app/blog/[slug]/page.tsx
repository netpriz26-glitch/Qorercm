import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";
import { blogPostingSchema } from "@/lib/schema";
import { blogPosts, getPostBySlug } from "@/lib/content/blog";
import { renderInlineMarkdown } from "@/lib/inline-markdown";
import { siteConfig } from "@/lib/site-config";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      publishedTime: post.publishedAt,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const formattedDate = new Date(post.publishedAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <article className="bg-white">
      <JsonLd data={blogPostingSchema(post)} />
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
          { name: post.title, path: `/blog/${post.slug}` },
        ]}
      />

      <div className="relative overflow-hidden bg-ink-950 py-14 text-white sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-400 hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Back to Blog
          </Link>
          <Reveal variant="fadeUp">
            <div className="mt-5 flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-brand-300">
              <span>{post.category}</span>
              <span aria-hidden="true">·</span>
              <span>{formattedDate}</span>
              <span aria-hidden="true">·</span>
              <span>{post.readingMinutes} min read</span>
            </div>
            <h1 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
              {post.title}
            </h1>
          </Reveal>
        </div>
      </div>

      <Reveal variant="fadeUp">
        <div className="mx-auto max-w-3xl space-y-5 px-4 py-14 text-slate-700 sm:px-6 sm:py-16">
          {post.body.map((paragraph, i) => (
            <p key={i} className="leading-relaxed">
              {renderInlineMarkdown(paragraph)}
            </p>
          ))}

          <div className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-6 text-center">
            <h2 className="text-lg font-semibold text-slate-900">
              See where your practice stands
            </h2>
            <p className="mt-1 text-sm text-slate-600">
              Get a free, no-obligation revenue cycle audit from {siteConfig.name}.
            </p>
            <div className="mt-4">
              <ButtonLink href="/#audit-form" size="md">
                {siteConfig.offer.ctaLabel}
              </ButtonLink>
            </div>
          </div>
        </div>
      </Reveal>
    </article>
  );
}
