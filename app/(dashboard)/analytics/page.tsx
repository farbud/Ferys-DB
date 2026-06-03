export default function AnalyticsPage() {
  return (
    <div className="space-y-6">
      <h1
        className="text-2xl font-bold"
        style={{ color: "var(--text-primary)" }}
      >
        Analytics
      </h1>
      <div className="grid grid-cols-4 gap-4">
        {[
          {
            label: "Active Users",
            value: "12,840",
            color: "var(--accent-green)",
          },
          {
            label: "Avg Response",
            value: "4.2s",
            color: "var(--accent-purple)",
          },
          { label: "Uptime", value: "98.9%", color: "var(--text-primary)" },
          { label: "Alerts", value: "237", color: "var(--accent-red)" },
        ].map((m) => (
          <div
            key={m.label}
            className="rounded-xl border p-4 space-y-2"
            style={{
              background: "var(--bg-secondary)",
              borderColor: "var(--border)",
            }}
          >
            <p
              className="text-xs uppercase tracking-wider"
              style={{ color: "var(--text-secondary)" }}
            >
              {m.label}
            </p>
            <p
              className="text-2xl font-bold font-mono"
              style={{ color: m.color }}
            >
              {m.value}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
