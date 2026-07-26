"use client";
import { useEffect, useState } from "react";

export function Typewriter({ text, speed = 50 }: { text: string; speed?: number }) {
  const [displayed, setDisplayed] = useState("");
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    let i = 0;
    // Small delay before starting so the page can settle
    const startDelay = setTimeout(() => {
      const interval = setInterval(() => {
        if (i < text.length) {
          setDisplayed(text.substring(0, i + 1));
          i++;
        } else {
          clearInterval(interval);
          setIsDone(true);
        }
      }, speed);
      return () => clearInterval(interval);
    }, 400);

    return () => clearTimeout(startDelay);
  }, [text, speed]);

  return (
    <span className={`${!isDone ? "after:content-['▊'] after:animate-pulse" : ""}`}>
      {displayed}
    </span>
  );
}