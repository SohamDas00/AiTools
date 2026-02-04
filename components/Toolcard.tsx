import Link from "next/link";

const ToolCard=({ tool }: { tool: any })=>{
  return (
    <Link
      href={`/tools/${tool.slug}`}
      className="block border rounded-lg p-4 hover:shadow-md transition"
    >
      <h2 className="text-lg font-semibold">{tool.name}</h2>

      <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
        {tool.description}
      </p>

      <div className="mt-4 flex gap-2 text-xs">
        <span className="rounded bg-gray-100 px-2 py-1 dark:bg-gray-800">
          {tool.category}
        </span>
        <span className="rounded bg-gray-100 px-2 py-1 dark:bg-gray-800">
          {tool.pricing}
        </span>
      </div>
    </Link>
  );
}

export default ToolCard;