import ToolCard from "@/components/Toolcard";
import { getAllTools } from "@/lib/tools";
import { MoveLeft } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return [{ type: "free" }, { type: "paid" }, { type: "freemium" }];
}

export default async function PricingPage({
  params,
}: {
  params: Promise<{ type: string }>;
}) {
  const { type } = await params;

  const tools = getAllTools().filter(
    (tool) => tool.pricing.toLowerCase() === type.toLowerCase(),
  );

  if (tools.length === 0) {
    notFound();
  }

  return (
    <section className="mx-auto max-w-7xl px-4 py-10">
      <Link
        href="/pricing"
        className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors mb-8 group"
      >
        <MoveLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
        <span className="font-medium">Back to pricing</span>
      </Link>
      <h1 className="text-3xl font-bold capitalize mb-2">{type} AI Tools</h1>

      <p className="text-gray-600 dark:text-gray-400 mb-8">
        Curated list of {type} AI tools from our dataset.
      </p>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {tools.map((tool) => (
          <ToolCard key={tool.slug} tool={tool} />
        ))}
      </div>
    </section>
  );
}
