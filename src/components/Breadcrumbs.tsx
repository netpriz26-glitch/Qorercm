import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

export function Breadcrumbs({ items }: { items: { name: string; path: string }[] }) {
  return (
    <>
      <JsonLd data={breadcrumbSchema(items)} />
      <nav aria-label="breadcrumb" className="border-b border-slate-100 bg-white">
        <ol className="mx-auto flex max-w-6xl flex-wrap items-center gap-1.5 px-4 py-3 text-xs text-slate-500 sm:px-6">
          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            return (
              <li key={item.path} className="flex items-center gap-1.5">
                {index > 0 && (
                  <ChevronRight className="h-3 w-3 shrink-0 text-slate-300" aria-hidden="true" />
                )}
                {isLast ? (
                  <span aria-current="page" className="font-medium text-slate-700">
                    {item.name}
                  </span>
                ) : (
                  <Link href={item.path} className="hover:text-slate-900">
                    {item.name}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
