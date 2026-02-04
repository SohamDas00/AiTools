import { getAllTools, getToolBySlug } from "@/lib/tools";
import { MoveLeft } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

// Static generation
export function generateStaticParams() {
  const tools = getAllTools();
  return tools.map((tool) => ({
    slug: tool.slug,
  }));
}

export default async function ToolDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  // ✅ MUST await params in Next.js 14+
  const { slug } = await params;

  const tool = getToolBySlug(slug);

  if (!tool) {
    notFound();
  }
  return (
    <section className="mx-auto max-w-4xl px-4 py-16">
      {/* Back Button */}
      <Link 
        href="/tools"
        className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors mb-8 group"
      >
        <MoveLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
        <span className="font-medium">Back to Tools</span>
      </Link>

      {/* Header */}
      <div className="mb-12">
        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
          {tool.name}
        </h1>

        <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
          {tool.description}
        </p>
      </div>

      {/* Meta Info */}
      <div className="flex flex-wrap gap-3 mb-10">
        <span className="inline-flex items-center gap-2 rounded-full bg-violet-100 dark:bg-violet-900/30 px-5 py-2.5 text-sm font-medium text-violet-700 dark:text-violet-300 border border-violet-200 dark:border-violet-800">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
          </svg>
          {tool.category}
        </span>
        
        <span className="inline-flex items-center gap-2 rounded-full bg-emerald-100 dark:bg-emerald-900/30 px-5 py-2.5 text-sm font-medium text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          {tool.pricing}
        </span>
      </div>

      {/* CTA */}
      <a 
        href={tool.website}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-700 hover:to-fuchsia-700 text-white text-lg font-semibold rounded-xl shadow-lg shadow-violet-500/30 hover:shadow-xl hover:shadow-violet-500/40 transition-all duration-200 hover:scale-105 active:scale-95"
      >
        <span>Visit Website</span>
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg>
      </a>
    </section>
  );
}