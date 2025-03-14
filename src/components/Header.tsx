"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

const navLinks = [
  { text: "Accueil", href: "/" },
  { text: "Prendre rendez-vous", href: "/prendre-rendez-vous" },
  { text: "Nous contacter", href: "/nous-contacter" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm py-4">
      <div className="container-custom">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src="https://ext.same-assets.com/711422529/1788618429.png"
              alt="Atelier Auto"
              width={180}
              height={50}
              className="h-10 w-auto"
            />
          </Link>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:items-center md:space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-700 font-medium transition-colors hover:text-primary"
              >
                {link.text}
              </Link>
            ))}
          </nav>
        </div>

        {/* Mobile navigation */}
        <div
          className={cn(
            "md:hidden transition-all duration-300 ease-in-out overflow-hidden",
            isOpen ? "max-h-60" : "max-h-0"
          )}
        >
          <nav className="mt-4 space-y-4 pb-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-2 py-1 text-gray-700 font-medium transition-colors hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                {link.text}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
