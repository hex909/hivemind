import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

function Navbar() {
  return (
    <nav className="max-w-1440 mx-auto">
      <div className="flex justify-between items-center max-xl:px-7 h-[120px]">
        <div>
          <h3 className="uppercase text-2xl font-clash-semibold whitespace-nowrap w-full">
            <a href="/">Hivemind Studio</a>
          </h3>
        </div>

        <ul className="flex items-center gap-11">
          <li>
            <a href="#" className="text-lg font-clash-medium px-2 py-1">
              Home
            </a>
          </li>
          <li>
            <a href="#projects" className="text-lg font-clash-medium px-2 py-1">
              Projects
            </a>
          </li>
          <li>
            <a href="#awards" className="text-lg font-clash-medium px-2 py-1">
              Awards
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-lg font-clash-medium px-8 py-3 text-dark bg-dark-green rounded-[20px]"
            >
              Let's Talk
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
