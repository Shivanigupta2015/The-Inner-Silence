"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/lib/cn";
import Link from "next/link";

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <Link href={"#"}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Home"
          ></MenuItem>
        </Link>
        <MenuItem setActive={setActive} active={active} item="Services">
          <div className="flex flex-col text-sm space-y-4 font-serif ">
            <HoveredLink href="/Meditation">Meditation</HoveredLink>
            <HoveredLink href="/Yoga">Yoga</HoveredLink>
            <HoveredLink href="/spiritualpractice">
              Spiritual Practice
            </HoveredLink>
            <HoveredLink href="/Focus">Focus</HoveredLink>
          </div>
        </MenuItem>
        <Link href={"/Contact"}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Connect"
          ></MenuItem>
        </Link>
      </Menu>
    </div>
  );
}

export default Navbar;
