import React from "react";
import { NavLinksMenu } from "../data/links";
import { WiSmoke } from "react-icons/wi";

import Link from "next/link";

const NavLinks = () => {
  return (
    <nav
      className="flex  h-32 items-center text-2xl justify-between bg-[#CFCFBD] px-10 border-b-4 border-[#242324]

"
    >
      <Link href="/" className=" font-extrabold text-4xl">
        VP
      </Link>

      {/* <div className="absolute left-2/4 ring-2/4">Logo</div> */}

      <div className="flex  gap-20  ">
        {" "}
        {NavLinksMenu.map((item) => {
          return (
            <ul>
              <li>
                <Link href={item.router}>
                  <p>{item.icon}</p>
                </Link>
              </li>
            </ul>
          );
        })}
      </div>
    </nav>
  );
};

export default NavLinks;
