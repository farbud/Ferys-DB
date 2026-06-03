export default function DashboardPage() {
  return (
    <div className="space-y-6">
      {/* هدر */}
      <div>
        <h1
          className="text-2xl font-bold"
          style={{ color: "var(--text-primary)" }}
        >
          Overview
        </h1>
        <p className="text-sm mt-1" style={{ color: "var(--text-secondary)" }}>
          خوش اومدی
        </p>
      </div>

      {/* متریک‌ها */}
      <div className="grid grid-cols-4 gap-4">
        {[
          {
            label: "Active Users",
            value: "12,840",
            delta: "+8.4%",
            color: "var(--accent-green)",
          },
          {
            label: "Avg Response",
            value: "4.2s",
            delta: "-0.3s",
            color: "var(--accent-purple)",
          },
          {
            label: "Uptime",
            value: "98.9%",
            delta: "stable",
            color: "var(--text-primary)",
          },
          {
            label: "Alerts Today",
            value: "237",
            delta: "+12",
            color: "var(--accent-red)",
          },
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
            <p className="text-xs" style={{ color: "var(--text-muted)" }}>
              {m.delta}
            </p>
          </div>
        ))}
      </div>

      {/* دو ستون پایین */}
      <div className="grid grid-cols-2 gap-4">
        {/* آخرین فعالیت تیم */}
        <div
          className="rounded-xl border p-5"
          style={{
            background: "var(--bg-secondary)",
            borderColor: "var(--border)",
          }}
        >
          <p
            className="text-xs uppercase tracking-wider mb-4"
            style={{ color: "var(--text-muted)" }}
          >
            Team Activity
          </p>
          <div className="space-y-3">
            {[
              {
                name: "Arya R.",
                action: "deployed v2.4.1",
                time: "2m ago",
                color: "#7c6cf8",
              },
              {
                name: "Kian M.",
                action: "fixed memory leak",
                time: "14m ago",
                color: "#ff6b6b",
              },
              {
                name: "Sara L.",
                action: "merged PR #42",
                time: "1h ago",
                color: "#00e5a0",
              },
              {
                name: "Dara J.",
                action: "updated dashboard",
                time: "3h ago",
                color: "#4b6cb7",
              },
            ].map((a) => (
              <div key={a.name} className="flex items-center gap-3">
                <div
                  className="w-7 h-7 rounded-full flex items-center justify-center
                                text-[10px] font-bold text-white shrink-0"
                  style={{ background: a.color }}
                >
                  {a.name
                    .split(" ")
                    .map((w) => w[0])
                    .join("")}
                </div>
                <div className="flex-1 min-w-0">
                  <p
                    className="text-xs"
                    style={{ color: "var(--text-primary)" }}
                  >
                    <span className="font-medium">{a.name}</span> {a.action}
                  </p>
                </div>
                <span
                  className="text-[10px] font-mono shrink-0"
                  style={{ color: "var(--text-muted)" }}
                >
                  {a.time}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* نوتیفیکیشن‌های اخیر */}
        <div
          className="rounded-xl border p-5"
          style={{
            background: "var(--bg-secondary)",
            borderColor: "var(--border)",
          }}
        >
          <p
            className="text-xs uppercase tracking-wider mb-4"
            style={{ color: "var(--text-muted)" }}
          >
            Recent Alerts
          </p>
          <div className="space-y-3">
            {[
              {
                type: "success",
                text: "Deploy v2.4.1 completed",
                time: "2m ago",
              },
              { type: "error", text: "Node-3 memory at 87%", time: "4m ago" },
              {
                type: "info",
                text: "12,000 active users milestone",
                time: "11m ago",
              },
              {
                type: "success",
                text: "Auto-scaling triggered",
                time: "18m ago",
              },
            ].map((n, i) => (
              <div key={i} className="flex items-start gap-3">
                <span
                  className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0"
                  style={{
                    background:
                      n.type === "success"
                        ? "var(--accent-green)"
                        : n.type === "error"
                          ? "var(--accent-red)"
                          : "var(--accent-purple)",
                  }}
                />
                <p
                  className="flex-1 text-xs"
                  style={{ color: "var(--text-primary)" }}
                >
                  {n.text}
                </p>
                <span
                  className="text-[10px] font-mono shrink-0"
                  style={{ color: "var(--text-muted)" }}
                >
                  {n.time}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
