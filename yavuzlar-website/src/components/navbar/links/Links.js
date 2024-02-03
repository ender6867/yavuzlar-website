"use client";
import { useState } from "react";
import Link from "next/link";
import "../../../app/globals.css";

const links = [
  {
    title: "Anasayfa",
    path: "/",
  },
  {
    title: "Book",
    path: "/",
  },
  // {
  //   title: "Hakkımızda",
  //   path: "/about",
  // },
  // {
  //   title: "Projelerimiz",
  //   path: "/projects",
  // },
  // {
  //   title: "Yazılarımız",
  //   path: "/articles",
  // },
  // {
  //   title: "İletişim",
  //   path: "/contact",
  // },
  {
    title: "Language",
    path: "",
  },
];
export default function Links() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div id="links">
        {links.map((link, index) => (
          <Link key={index} href={link.path}>
            {link.title}
          </Link>
        ))}
      </div>
      <button id="mobileButton" onClick={() => setOpen((prev) => !prev)}>
        Menu
      </button>
      {open && (
        <div id="mobileLinks">
          {links.map((link) => (
            <Link href={link.path}>{link.title}</Link>
          ))}
        </div>
      )}
    </div>
  );
}
