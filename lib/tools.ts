import tools from "@/data/tools.json";

// Get all tools
export function getAllTools() {
  return tools;
}

// Get a single tool by slug
export function getToolBySlug(slug: string) {
  return tools.find((tool) => tool.slug === slug);
}

// Get tools by category
export function getToolsByCategory(category: string) {
  return tools.filter(
    (tool) => tool.category.toLowerCase() === category.toLowerCase()
  );
}

// Get tools by pricing type
export function getToolsByPricing(type: string) {
  return tools.filter(
    (tool) => tool.pricing.toLowerCase() === type.toLowerCase()
  );
}
