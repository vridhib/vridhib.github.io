"use client";
import { useEffect, useState } from "react";

export function LiveClock() {
  const [time, setTime] = useState("");
  const [timezone, setTimezone] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();

      // Format to HH:MM:SS
      const formattedTime = now.toLocaleTimeString("en-US", {
        hour12: false,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });

      // Get timezone offset
      const offset = now.getTimezoneOffset();
      const sign = offset <= 0 ? "+" : "-";
      const absOffset = Math.abs(offset);
      const hours = String(Math.floor(absOffset / 60)).padStart(2, "0");
      const mins = String(absOffset % 60).padStart(2, "0");
      const formattedTz = `UTC${sign}${hours}:${mins}`;

      setTime(formattedTime);
      setTimezone(formattedTz);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-sm mx-auto mt-4 pt-4 border-t border-dusty-violet/10 flex justify-between items-end">

      {/* Label & Timezone */}
      <div className="flex flex-col gap-1">
        <span className="font-mono text-xs uppercase tracking-[0.3em] text-parchment/60">System Time</span>
        <span className="font-mono text-xs text-parchment/60">{timezone}</span>
      </div>

      {/* Time */}
      <div className="font-mono text-2xl md:text-3xl text-gold-accent tabular-nums tracking-wider">
        {time || "--:--:--"}
      </div>
    </div>
  );
}