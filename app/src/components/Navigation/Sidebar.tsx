"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Downloads", href: "/downloads" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <nav className="flex flex-col gap-2 bg-white rounded-md shadow-md p-4 w-48">
      {/* Icon */}
      <div className="flex items-center justify-center mb-8">
        <Image
            src="/logo.png"
            alt="Logo"
            width={160}
            height={160}
            className="rounded-full"
            loading="eager"
          />
      </div>

      {links.map((link) => {
        const active =
          link.href === "/"
            ? pathname === "/"
            : pathname === link.href ||
              pathname.startsWith(`${link.href}/`);

        return (
          <Link
            key={link.href}
            href={link.href}
            className={
              active
                ? "bg-emerald-400 font-monocraft-bold rounded-md p-2"
                : "hover:bg-gray-200 text-gray-700 hover:text-gray-900 rounded-md p-2"
            }
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
}