"use client";
import { useEffect, useRef, useState } from "react";
import { business, navigation } from "@/config/business";
import { Icon } from "./icon";
export function Header() {
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const query = window.matchMedia("(min-width: 768px)");
    const close = () => setOpen(false);
    query.addEventListener("change", close);
    return () => query.removeEventListener("change", close);
  }, []);
  return <header className="header" onKeyDown={(event) => { if (event.key === "Escape" && open) { setOpen(false); toggle.current?.focus(); } }}>
    <div className="container header-inner">
      <a className="brand" href="#uvod" aria-label="DUNASTAV – úvod" onClick={() => setOpen(false)}><span className="brand-mark" aria-hidden="true">D<span>•</span></span><span>DUNASTAV<small>ZASTAVÁRNA & BAZAR</small></span></a>
      <nav className="desktop-nav" aria-label="Hlavní navigace">{navigation.map(item => <a key={item.href} href={item.href}>{item.label}</a>)}</nav>
      <a className="header-call" href={business.phoneHref}><Icon name="phone" /><span>{business.phone}</span></a>
      <button ref={toggle} type="button" className="menu-toggle" aria-expanded={open} aria-controls="mobile-navigation" aria-label={open ? "Zavřít menu" : "Otevřít menu"} onClick={() => setOpen(!open)}><span aria-hidden="true">{open ? "✕" : "☰"}</span></button>
    </div>
    <nav id="mobile-navigation" className="mobile-nav" aria-label="Mobilní navigace" hidden={!open}>{navigation.map(item => <a key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}<Icon name="arrow" /></a>)}</nav>
  </header>;
}
