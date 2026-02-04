"use client";

import { useState } from "react";
import { getAllTools } from "@/lib/tools";
import ToolCard from "@/components/Toolcard";
import { Search, SlidersHorizontal, Sparkles } from "lucide-react";

export default function ToolsPage() {
  const allTools = getAllTools();

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [pricing, setPricing] = useState("all");
  const [sort, setSort] = useState("az");
  const [showFilters, setShowFilters] = useState(false);

  const filteredTools = allTools
    .filter((tool) =>
      tool.name.toLowerCase().includes(search.toLowerCase())
    )
    .filter((tool) =>
      category === "all" ? true : tool.category === category
    )
    .filter((tool) =>
      pricing === "all" ? true : tool.pricing === pricing
    )
    .sort((a, b) =>
      sort === "az"
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name)
    );

  const categories = Array.from(
    new Set(allTools.map((tool) => tool.category))
  );

  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:py-16">
      {/* Hero Header */}
      <div className="mb-12 text-center">
        <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-gradient-to-r from-violet-500/10 via-fuchsia-500/10 to-cyan-500/10 rounded-full border border-violet-500/20">
          <Sparkles className="w-4 h-4 text-violet-600 dark:text-violet-400" />
          <span className="text-sm font-medium text-violet-600 dark:text-violet-400">
            Discover {allTools.length}+ AI Tools
          </span>
        </div>
        
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-white dark:via-gray-100 dark:to-white bg-clip-text text-transparent">
          The Ultimate AI Toolkit
        </h1>
        
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Curated collection of the best AI tools to supercharge your workflow
        </p>
      </div>

      {/* Search & Filter Bar */}
      <div className="mb-8 space-y-4">
        {/* Search Bar - Always Visible */}
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search for AI tools..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-12 pr-4 py-4 text-lg border-2 border-gray-200 dark:border-gray-700 rounded-2xl bg-white dark:bg-gray-800 focus:border-violet-500 dark:focus:border-violet-500 focus:outline-none focus:ring-4 focus:ring-violet-500/10 transition-all placeholder:text-gray-400"
          />
          
          {/* Filter Toggle Button */}
          <button
            onClick={() => setShowFilters(!showFilters)}
            className={`absolute right-3 top-1/2 -translate-y-1/2 px-4 py-2 rounded-xl flex items-center gap-2 transition-all ${
              showFilters 
                ? 'bg-violet-600 text-white' 
                : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
            }`}
          >
            <SlidersHorizontal className="w-4 h-4" />
            <span className="hidden sm:inline text-sm font-medium">Filters</span>
          </button>
        </div>

        {/* Collapsible Filters */}
        {showFilters && (
          <div className="grid gap-4 sm:grid-cols-3 animate-in fade-in slide-in-from-top-2 duration-200">
            {/* Category Filter */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Category
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800 focus:border-violet-500 dark:focus:border-violet-500 focus:outline-none focus:ring-4 focus:ring-violet-500/10 transition-all cursor-pointer"
              >
                <option value="all">All Categories</option>
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>

            {/* Pricing Filter */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Pricing
              </label>
              <select
                value={pricing}
                onChange={(e) => setPricing(e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800 focus:border-violet-500 dark:focus:border-violet-500 focus:outline-none focus:ring-4 focus:ring-violet-500/10 transition-all cursor-pointer"
              >
                <option value="all">All Pricing</option>
                <option value="Free">Free</option>
                <option value="Freemium">Freemium</option>
                <option value="Paid">Paid</option>
              </select>
            </div>

            {/* Sort */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Sort By
              </label>
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800 focus:border-violet-500 dark:focus:border-violet-500 focus:outline-none focus:ring-4 focus:ring-violet-500/10 transition-all cursor-pointer"
              >
                <option value="az">Name: A → Z</option>
                <option value="za">Name: Z → A</option>
              </select>
            </div>
          </div>
        )}

        {/* Active Filters Display */}
        {(category !== "all" || pricing !== "all" || search) && (
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-sm text-gray-600 dark:text-gray-400">
              Active filters:
            </span>
            {search && (
              <span className="px-3 py-1 text-sm bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300 rounded-full">
                "{search}"
              </span>
            )}
            {category !== "all" && (
              <span className="px-3 py-1 text-sm bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300 rounded-full">
                {category}
              </span>
            )}
            {pricing !== "all" && (
              <span className="px-3 py-1 text-sm bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300 rounded-full">
                {pricing}
              </span>
            )}
            <button
              onClick={() => {
                setSearch("");
                setCategory("all");
                setPricing("all");
              }}
              className="px-3 py-1 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 underline"
            >
              Clear all
            </button>
          </div>
        )}
      </div>

      {/* Results Count */}
      <div className="mb-6">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Showing <span className="font-semibold text-gray-900 dark:text-white">{filteredTools.length}</span> {filteredTools.length === 1 ? 'tool' : 'tools'}
        </p>
      </div>

      {/* Tool Grid */}
      {filteredTools.length === 0 ? (
        <div className="text-center py-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 dark:bg-gray-800 mb-4">
            <Search className="w-8 h-8 text-gray-400" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
            No tools found
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Try adjusting your search or filters
          </p>
          <button
            onClick={() => {
              setSearch("");
              setCategory("all");
              setPricing("all");
            }}
            className="px-6 py-3 bg-violet-600 hover:bg-violet-700 text-white rounded-xl font-medium transition-colors"
          >
            Clear filters
          </button>
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredTools.map((tool, index) => (
            <div
              key={tool.slug}
              style={{
                animationDelay: `${index * 50}ms`,
              }}
              className="animate-in fade-in slide-in-from-bottom-4 duration-500"
            >
              <ToolCard tool={tool} />
            </div>
          ))}
        </div>
      )}
    </section>
  );
}