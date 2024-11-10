"use client";
import Link from "next/link";
import { useState } from "react";
import { Dialog, DialogPanel, Popover, PopoverGroup } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { HeaderLinksType } from "../../../types/Types";
export default function Header() {
  const headerLinks: HeaderLinksType[] = [
    {
      href: "/",
      name: "Home",
    },
    {
      href: "/about",
      name: "About",
    },
    {
      href: "/services",
      name: "Services",
    },
    {
      href: "/skills",
      name: "Skills",
    },
    {
      href: "/projects",
      name: "Projects",
    },
    {
      href: "/blog",
      name: "Blogs",
    },
    {
      href: "/contact",
      name: "Contact",
    },
  ];

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <header className="header">
      <nav aria-label="Global" className="nav">
        <div className="header-logo-wrapper">
          <span className="header-logo">
            Vision
            <span>Areesha</span>
          </span>
        </div>
        <div className="header-menu-wrapper">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="header-menu-button"
          >
            <span className="sr-only"></span>
            <Bars3Icon aria-hidden="true" className="header-bar-icon" />
          </button>
        </div>
        <PopoverGroup className="header-popoverGroup">
          <Popover className="header-popover"></Popover>
          {headerLinks.map((link, i) => (
            <Link className="header-link" key={i} href={link.href}>
              {link.name}
            </Link>
          ))}
        </PopoverGroup>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="header-dialog"
      >
        <div className="header-DialogPanel-wrapper" />
        <DialogPanel className="header-DialogPanel">
          <div className="header-mob-wrapper">
            <Link href="#" className="-m-1.5 p-1.5">
              <div className="header-mob-logo">
                <span className="header-mob-logo-text">
                  Vision
                  <span>Areesha</span>
                </span>
              </div>
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="header-mob-button"
            >
              <span className="sr-only"></span>
              <XMarkIcon aria-hidden="true" className="header-mob-bar-icon" />
            </button>
          </div>
          <div className=" flow-root">
            <div className="">
              <div className="header-mob-links">
                {headerLinks.map((link, i) => (
                  <Link className="header-mob-link" key={i} href={link.href}>
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
