"use client";
import { Menu, X } from "lucide-react";
import React from "react";

const Navbar = () => {
  const [open, setOpen] = React.useState(false);

  // Toggle menu open/closed
  const toggleMenu = () => {
    setOpen(!open);
  };

  // Close menu when a link is clicked
  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <nav className="flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 border-b border-gray-300 bg-black relative transition-all">
      <a href="/">
        <img src="/ai.svg" alt="logo" className="h-14" />
        <h1 className="font-mono font-bold">AiTool</h1>
      </a>

      {/* Desktop Menu */}
      <ul className="md:flex hidden items-center gap-10 text-white">
        <li>
          <a className="hover:text-gray-500/80 transition" href="/">
            Home
          </a>
        </li>
        <li>
          <a className="hover:text-gray-500/80 transition" href="/tools">
            Tools
          </a>
        </li>
        <li>
          <a className="hover:text-gray-500/80 transition" href="/pricing">
            Pricing
          </a>
        </li>
      </ul>

      {/* Desktop CTA Button */}
      <a
        href="/tools"
        className="bg-white text-black border border-gray-300 md:inline-flex hidden text-sm hover:bg-gray-50 active:scale-95 transition-all w-40 h-11 rounded-full items-center justify-center"
      >
        Get started
      </a>

      {/* Mobile Menu Toggle Button */}
      <button
        aria-label="menu-btn"
        type="button"
        onClick={toggleMenu}
        className="menu-btn inline-block md:hidden active:scale-90 transition z-50"
      >
        {open ? <X className="text-black" /> : <Menu className="text-black" />}
      </button>

      {/* Mobile Menu - Now controlled by 'open' state */}
      <div
        className={`mobile-menu absolute top-30 left-0 w-full bg-white border-b border-gray-300 shadow-lg md:hidden transition-all duration-300 ease-in-out ${
          open
            ? "block opacity-100 translate-y-0"
            : "hidden opacity-0 -translate-y-4"
        }`}
      >
        <ul className="flex flex-col space-y-4 text-lg p-6 text-black">
          <li>
            <a
              href="/"
              className="text-sm hover:text-gray-500/80 transition block py-2"
              onClick={closeMenu}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="/services"
              className="text-sm hover:text-gray-500/80 transition block py-2"
              onClick={closeMenu}
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="/portfolio"
              className="text-sm hover:text-gray-500/80 transition block py-2"
              onClick={closeMenu}
            >
              Portfolio
            </a>
          </li>
          <li>
            <a
              href="/pricing"
              className="text-sm hover:text-gray-500/80 transition block py-2"
              onClick={closeMenu}
            >
              Pricing
            </a>
          </li>
        </ul>

        <div className="px-6 pb-6">
          <button
            type="button"
            className="bg-white text-gray-600 border border-gray-300 text-sm hover:bg-gray-50 active:scale-95 transition-all w-full h-11 rounded-full"
            onClick={closeMenu}
          >
            Get started
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
