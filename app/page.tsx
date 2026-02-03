import React from 'react'
import Link from "next/link";
import { Search, Sparkles, TrendingUp, Filter } from 'lucide-react';

const Home = () => {
  const featuredCategories = [
    { name: "Productivity", count: 127, icon: "📊", href: "/category/productivity" },
    { name: "Writing", count: 89, icon: "✍️", href: "/category/writing" },
    { name: "Design", count: 156, icon: "🎨", href: "/category/design" },
    { name: "Development", count: 203, icon: "💻", href: "/category/development" },
    { name: "Marketing", count: 94, icon: "📈", href: "/category/marketing" },
    { name: "Video", count: 78, icon: "🎬", href: "/category/video" },
  ];

  const stats = [
    { label: "AI Tools", value: "1000+" },
    { label: "Categories", value: "50+" },
    { label: "Weekly Updates", value: "New" },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4">
      {/* Hero Section */}
      <section className="py-20 md:py-28">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30 px-4 py-2 text-sm font-medium mb-8">
            <Sparkles className="w-4 h-4" />
            <span>Discover 1000+ AI Tools</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-white dark:via-gray-200 dark:to-white bg-clip-text text-transparent">
            Find the Perfect AI Tool for Every Task
          </h1>

          <p className="mt-6 text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Explore our curated directory of cutting-edge AI tools. From productivity boosters to creative assistants, find exactly what you need.
          </p>

          {/* Search Bar */}
          <div className="mt-10 max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search for AI tools, categories, or use cases..."
                className="w-full rounded-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 pl-12 pr-4 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
              />
            </div>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/tools"
              className="rounded-full bg-black text-white px-8 py-3.5 text-sm font-semibold hover:bg-gray-800 transition-colors dark:bg-white dark:text-black dark:hover:bg-gray-200"
            >
              Browse All Tools
            </Link>

            <Link
              href="/submit"
              className="rounded-full border-2 border-gray-300 dark:border-gray-700 px-8 py-3.5 text-sm font-semibold hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors"
            >
              Submit a Tool
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-16 flex flex-wrap justify-center gap-8 md:gap-12">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold">{stat.value}</div>
                <div className="mt-1 text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-16 border-t border-gray-200 dark:border-gray-800">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Explore by Category</h2>
          <p className="mt-3 text-gray-600 dark:text-gray-400">
            Browse AI tools organized by your needs
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {featuredCategories.map((category) => (
            <Link
              key={category.name}
              href={category.href}
              className="group relative rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 hover:shadow-lg hover:border-gray-300 dark:hover:border-gray-700 transition-all"
            >
              <div className="text-4xl mb-3">{category.icon}</div>
              <h3 className="font-semibold text-sm group-hover:text-black dark:group-hover:text-white transition-colors">
                {category.name}
              </h3>
              <p className="mt-1 text-xs text-gray-500 dark:text-gray-500">
                {category.count} tools
              </p>
            </Link>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link
            href="/categories"
            className="inline-flex items-center gap-2 text-sm font-medium hover:underline"
          >
            View all 50+ categories
            <span>→</span>
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 border-t border-gray-200 dark:border-gray-800">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900/30 mb-4">
              <Filter className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Smart Filtering</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Filter by pricing, features, integrations, and more to find exactly what you need
            </p>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 mb-4">
              <TrendingUp className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Trending Tools</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Stay updated with the latest AI innovations added and reviewed weekly
            </p>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/30 mb-4">
              <Sparkles className="w-6 h-6 text-green-600 dark:text-green-400" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Curated Quality</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Every tool is manually reviewed and verified for quality and accuracy
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 border-t border-gray-200 dark:border-gray-800">
        <div className="text-center max-w-2xl mx-auto rounded-3xl bg-gradient-to-br from-gray-900 to-gray-800 dark:from-gray-800 dark:to-gray-900 p-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Supercharge Your Workflow?
          </h2>
          <p className="text-gray-300 mb-8">
            Join thousands discovering AI tools that transform how they work
          </p>
          <Link
            href="/tools"
            className="inline-flex rounded-full bg-white text-black px-8 py-3.5 text-sm font-semibold hover:bg-gray-100 transition-colors"
          >
            Start Exploring
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;