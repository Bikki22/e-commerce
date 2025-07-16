"use client";
import Link from "next/link";
import React, { useState } from "react";

const Navbar = ({ menu }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <li className="w-full px-5 py-3 list-none font-medium hover:bg-amber-50">
      <Link
        href={menu.route}
        className="block relative py-2 px-5 md:p-0 text-gray-900 rounded-sm border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 "
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
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 list-none"
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
