
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function Header() {
  const pathname = usePathname();

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/work", label: "Work" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-10">
      <nav className="flex items-center space-x-2 bg-background/30 backdrop-blur-2xl rounded-full p-2 border border-white/10 shadow-lg">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`text-muted-foreground hover:text-foreground transition-colors px-4 py-2 ${
              pathname === item.href
                ? "bg-muted text-primary rounded-full font-medium"
                : ""
            }`}
          >
            <span>{item.label}</span>
          </Link>
        ))}
      </nav>
    </header>
  );
}
