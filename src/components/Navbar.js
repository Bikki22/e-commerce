"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

const Navbar = ({ menu }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const pathname = usePathname();

  const isActive =
    pathname === menu.route ||
    (menu.route !== "/" && pathname.startsWith(menu.route));

  return (
    <li className="w-full px-5 py-2 list-none font-medium">
      <Link
        href={menu.route}
        className={` ${
          isActive ? "text-red-500 underline " : ""
        } block relative py-2 px-3 text-gray-900 rounded-sm border-b border-gray-100 hover:bg-black hover:text-white lg:border-0 `}
        onMouseEnter={() => {
          if (menu.submenu?.length > 0) setShowDropdown(true);
        }}
        onMouseLeave={() => setShowDropdown(false)}
      >
        {menu.label}
        {menu.submenu?.length > 0 ? (
          <div
            className={`${
              showDropdown ? "block" : "hidden"
            } absolute top-6 bg-white divide-gray-100 rounded-lg shadow`}
          >
            <ul>
              {menu.submenu.map((navSubmenu, submenuIndex) => (
                <li
                  key={submenuIndex}
                  href={`${menu.route}/${navSubmenu.route}`}
                  className="block px-4 py-2 text-black dark:hover:bg-gray-600 list-none"
                >
                  {navSubmenu.label}
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </Link>
    </li>
  );
};

export default Navbar;
