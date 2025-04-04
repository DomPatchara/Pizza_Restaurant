"use client";

import React from "react";
import { useState } from "react";
import Link from "next/link";
import CartIcon from "./CartIcon";

const links = [
  { id: 1, title: "Homepage", url: "/" },
  { id: 2, title: "Menu", url: "/menu" },
  { id: 3, title: "Working Hours", url: "/" },
  { id: 4, title: "Contact", url: "/" },
];

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const user = false;
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="md:hidden cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <line
          x1="3"
          y1="6"
          x2="21"
          y2="6"
          className={`
                     origin-left transition-all
                    ${isOpen && "rotate-45 -translate-y-1"}
                  `}
        ></line>
        <line
          x1="3"
          y1="12"
          x2="21"
          y2="12"
          className={`transition-all ${isOpen && "opacity-0"}`}
        ></line>
        <line
          x1="3"
          y1="18"
          x2="21"
          y2="18"
          className={`
                    origin-left transition-all
                    ${isOpen && "-rotate-45  translate-y-1"}
                  `}
        ></line>
      </svg>

      {isOpen && (
        <ul className="bg-red-500 text-white absolute left-0 top-24 h-[calc(100vh-6rem)] flex flex-col justify-center items-center gap-8 text-3xl z-10 w-full">
          {links.map((link) => (
            <Link
              href={link.url}
              key={link.id}
              onClick={() => setIsOpen(false)}
            >
              {link.title}
            </Link>
          ))}
          {!user ? (
            <Link href="/login" onClick={() => setIsOpen(false)}>
              Login
            </Link>
          ) : (
            <Link href="/orders" onClick={() => setIsOpen(false)}>
              Orders
            </Link>
          )}
          <Link href="/cart" onClick={() => setIsOpen(false)}>
            <CartIcon />
          </Link>
        </ul>
      )}
    </div>
  );
};

export default Menu;
