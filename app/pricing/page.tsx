import Link from "next/link";

const PricingIndexPage=()=>{
  return (
    <section className="mx-auto max-w-5xl px-4 py-12">
      <h1 className="text-4xl font-bold mb-4">
        Browse AI Tools by Pricing
      </h1>

      <p className="text-gray-600 dark:text-gray-400 mb-10">
        Explore AI tools based on their pricing model — free, freemium, or paid.
      </p>

      <div className="grid gap-6 sm:grid-cols-3">
        <Link
          href="/pricing/free"
          className="rounded-xl border p-6 hover:shadow-md transition"
        >
          <h2 className="text-xl font-semibold mb-2">Free Tools</h2>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            AI tools that are completely free to use.
          </p>
        </Link>

        <Link
          href="/pricing/freemium"
          className="rounded-xl border p-6 hover:shadow-md transition"
        >
          <h2 className="text-xl font-semibold mb-2">Freemium Tools</h2>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Tools offering free tiers with paid upgrades.
          </p>
        </Link>

        <Link
          href="/pricing/paid"
          className="rounded-xl border p-6 hover:shadow-md transition"
        >
          <h2 className="text-xl font-semibold mb-2">Paid Tools</h2>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Premium AI tools with paid plans.
          </p>
        </Link>
      </div>
    </section>
  );
}
export default PricingIndexPage