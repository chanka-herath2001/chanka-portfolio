"use client";

import { useCallback, useEffect, useState } from "react";
import About from "./sections/About";
import Capabilities from "./sections/Capabilities";
import Contact from "./sections/Contact";
import Experience from "./sections/Experience";
import Hero from "./sections/Hero";
import Research from "./sections/Research";
import Work from "./sections/Work";
import Cursor from "./system/Cursor";
import Nav from "./system/Nav";
import Preloader from "./system/Preloader";
import SmoothScroll from "./system/SmoothScroll";

export default function App() {
  const [ready, setReady] = useState(false);
  const done = useCallback(() => setReady(true), []);

  useEffect(() => {
    if ("scrollRestoration" in history) history.scrollRestoration = "manual";
    window.scrollTo(0, 0);
  }, []);

  return (
    <SmoothScroll>
      <Preloader onDone={done} />
      <Cursor />
      <Nav />
      <main>
        <Hero ready={ready} />
        <About />
        <Capabilities />
        <Experience />
        <Work />
        <Research />
        <Contact />
      </main>
    </SmoothScroll>
  );
}
