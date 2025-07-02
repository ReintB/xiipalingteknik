"use client";
import Giscus from "@giscus/react";
import { useEffect, useState } from "react";

export default function GiscusComments({ className = "" }) {
  // Deteksi dark mode dari class html
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const checkTheme = () => {
      if (document.documentElement.classList.contains("dark")) {
        setTheme("dark");
      } else {
        setTheme("light");
      }
    };
    checkTheme();
    // Pantau perubahan class pada html
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  return (
    <section
      className={`my-12 px-4 py-8 bg-background border rounded-lg shadow transition-colors duration-300 ${className}`}
    >
      <Giscus
        id="comments"
        repo="ReintB/xiipalingteknik"
        repoId="R_kgDOOJ0cxw"
        category="General"
        categoryId="DIC_kwDOOJ0cx84CsXbh"
        mapping="pathname"
        strict="0"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="bottom"
        theme={theme === "dark" ? "dark" : "light"}
        lang="id"
        loading="lazy"
      />
    </section>
  );
} 