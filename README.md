<h1>🚀 AI Tools Directory</h1>

<p>
A content-directory style web application that helps users discover, explore, and navigate AI tools based on category and pricing.
Built using <strong>Next.js App Router</strong>, <strong>TypeScript</strong>, <strong>Tailwind CSS</strong>, and static data with <strong>Static Site Generation (SSG)</strong>.
</p>

<hr/>

<h2>🌐 Live Demo</h2>
<p>
<a href="https://aitools-soham.vercel.app/" target="_blank">
https://aitools-soham.vercel.app/
</a>
</p>

<hr/>

<h2>🎥 Loom Walkthrough</h2>
<p>
A short video walkthrough explaining the project structure, features, and approach used while building the AI Tools Directory application.
</p>

<p>
<a href="https://www.loom.com/share/2128e00076414ec19eec4a91ee27be5d" target="_blank">
Watch the project walkthrough
</a>
</p>

<hr/>

<h2>📌 Overview</h2>
<p>
This project is a modern AI tools directory where users can browse AI tools, search and filter them, view detailed information, and explore tools based on pricing models such as <strong>Free</strong>, <strong>Freemium</strong>, and <strong>Paid</strong>.
</p>

<p>
The application uses static JSON data and programmatically generates pages using Next.js App Router with Static Site Generation for performance and SEO.
</p>

<hr/>

<h2>✨ Features</h2>
<ul>
<li>Home page describing the dataset and purpose of the project</li>
<li>Listing page with search, filters, and sorting functionality</li>
<li>Dynamic detail pages generated for each tool</li>
<li>Pricing-based pages for Free, Paid, and Freemium tools</li>
<li>Responsive design with dark mode support</li>
<li>Reusable component-based UI architecture</li>
<li>SEO-ready metadata and sitemap generation</li>
<li>Custom 404 page handling invalid routes</li>
</ul>

<hr/>

<h2>📊 Dataset Used and Source</h2>
<p>
The dataset is a curated collection of AI tools inspired by public references including:
</p>

<ul>
<li><a href="https://theresanaiforthat.com" target="_blank">There’s an AI for That</a></li>
<li><a href="https://www.producthunt.com" target="_blank">Product Hunt</a></li>
</ul>

<p>
The dataset includes tool name, description, category, pricing model, and official website URL.
</p>

<hr/>

<h2>🧠 How the Dataset Was Generated</h2>
<p>
The dataset was manually curated and normalized using public references.
AI tools were used to assist with formatting, categorization, and conversion into a structured JSON format.
The final dataset is stored as a static file (<strong>data/tools.json</strong>) and used for static generation.
</p>

<hr/>

<h2>🛠 Tech Stack</h2>
<ul>
<li><strong>Framework:</strong> Next.js 16 (App Router)</li>
<li><strong>Language:</strong> TypeScript</li>
<li><strong>Styling:</strong> Tailwind CSS</li>
<li><strong>Icons:</strong> lucide-react</li>
<li><strong>Data Handling:</strong> Static JSON</li>
<li><strong>Deployment:</strong> Vercel</li>
<li><strong>Linting:</strong> ESLint + Prettier</li>
</ul>

<hr/>

<h2>🏗 Architecture</h2>
<p>
The project follows a modular architecture:
</p>

<ul>
<li><strong>app/</strong> – Contains routes, layout, and page-level logic</li>
<li><strong>components/</strong> – Reusable UI components</li>
<li><strong>data/</strong> – Static dataset in JSON format</li>
<li><strong>lib/</strong> – Helper functions for data handling</li>
</ul>

<p>
Pages are generated using Static Site Generation to ensure performance and SEO optimization.
</p>

<hr/>

<h2>🤖 AI Prompt Examples Used</h2>
<ul>
<li>Generate a clean JSON dataset of AI tools with name, category, pricing, description, and website</li>
<li>Normalize pricing labels into Free, Freemium, and Paid</li>
<li>Suggest UI layout ideas for a modern AI tools directory using Tailwind CSS</li>
</ul>

<hr/>

<h2>🔮 What I Would Improve With More Time</h2>
<ul>
<li>Add category-based navigation and pages</li>
<li>Toggle dark and light theme</li>
<li>Add pagination for larger datasets</li>
<li>Add Open Graph metadata for social sharing</li>
<li>Enhance filtering UX with multi-select filters</li>
<li>Add unit tests for utility functions</li>
</ul>

<hr/>

<h2>🚀 Deployment</h2>
<p>
The application is deployed on Vercel using static site generation.
All pages are pre-rendered for fast performance and SEO readiness.
</p>

<p>
Production URL:
<a href="https://aitools-soham.vercel.app/" target="_blank">
https://aitools-soham.vercel.app/
</a>
</p>

<hr/>

<h2>👨‍💻 Author</h2>
<p>
<strong>Soham Das</strong><br/>
</p>
