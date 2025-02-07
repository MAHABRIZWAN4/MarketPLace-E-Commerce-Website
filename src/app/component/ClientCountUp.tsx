"use client";
import CountUp from "react-countup";

interface ClientCountUpProps {
    start: number;
    end: number;
    suffix: string;
}

export default function ClientCountUp({ start, end, suffix }: ClientCountUpProps) {
    return <CountUp start={start} end={end} duration={2} suffix={suffix} />;
}
