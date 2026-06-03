import { cn } from "@/lib/utils";
import { TrendingUp, TrendingDown, Minus } from "lucide-react";

interface MetricCardProps {
  label: string;
  value: string | number;
  delta?: number;
  deltaLabel?: string;
  color?: "green" | "purple" | "red" | "white";
}

export default function MetricCard({
  label,
  value,
  delta,
  deltaLabel,
  color = "white",
}: MetricCardProps) {
  const colorMap = {
    green: "var(--accent-green)",
    purple: "var(--accent-purple)",
    red: "var(--accent-red)",
    white: "var(--text-primary)",
  };

  const isUp = delta && delta > 0;
  const isDown = delta && delta < 0;

  return (
    <div
      className="bg-(--bg-secondary) border border-(--border) 
                    rounded-xl p-4 space-y-2"
    >
      <p className="text-xs text-(--text-secondary) uppercase tracking-wider">
        {label}
      </p>
      <p
        className="text-2xl font-bold font-mono"
        style={{ color: colorMap[color] }}
      >
        {value}
      </p>
      {delta !== undefined && (
        <div
          className={cn(
            "flex items-center gap-1 text-xs",
            isUp && "text-(--accent-green)",
            isDown && "text-(--accent-red)",
            !isUp && !isDown && "text-(--text-muted)",
          )}
        >
          {isUp ? (
            <TrendingUp size={12} />
          ) : isDown ? (
            <TrendingDown size={12} />
          ) : (
            <Minus size={12} />
          )}
          {deltaLabel || `${delta > 0 ? "+" : ""}${delta}%`}
        </div>
      )}
    </div>
  );
}
