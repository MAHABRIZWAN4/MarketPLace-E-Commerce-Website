"use client";

import CountUp from "react-countup";

export default function ClientCountUp({ start, end, suffix }: { start: number; end: number; suffix?: string }) {
  return <CountUp start={start} end={end} duration={2} suffix={suffix} />;
}
