const members = [
  {
    name: "Arya R.",
    role: "ML Engineer",
    activity: 92,
    status: "online",
    color: "#7c6cf8",
  },
  {
    name: "Kian M.",
    role: "DevOps",
    activity: 78,
    status: "online",
    color: "#ff6b6b",
  },
  {
    name: "Sara L.",
    role: "Frontend",
    activity: 65,
    status: "online",
    color: "#00e5a0",
  },
  {
    name: "Dara J.",
    role: "Data Scientist",
    activity: 30,
    status: "offline",
    color: "#4b6cb7",
  },
  {
    name: "Nia P.",
    role: "Backend",
    activity: 12,
    status: "offline",
    color: "#f7971e",
  },
];

export default function TeamPage() {
  return (
    <div className="space-y-6">
      <h1
        className="text-2xl font-bold"
        style={{ color: "var(--text-primary)" }}
      >
        Team
      </h1>
      <div className="grid grid-cols-1 gap-3 max-w-2xl">
        {members.map((m) => (
          <div
            key={m.name}
            className="flex items-center gap-4 p-4 rounded-xl border"
            style={{
              background: "var(--bg-secondary)",
              borderColor: "var(--border)",
            }}
          >
            {/* آواتار */}
            <div
              className="relative w-10 h-10 rounded-full flex items-center justify-center
                            text-sm font-bold text-white shrink-0"
              style={{ background: m.color }}
            >
              {m.name
                .split(" ")
                .map((w) => w[0])
                .join("")}
              <span
                className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full border-2"
                style={{
                  background:
                    m.status === "online"
                      ? "var(--accent-green)"
                      : "var(--text-muted)",
                  borderColor: "var(--bg-secondary)",
                }}
              />
            </div>
            {/* اطلاعات */}
            <div className="flex-1 min-w-0">
              <p
                className="text-sm font-medium"
                style={{ color: "var(--text-primary)" }}
              >
                {m.name}
              </p>
              <p className="text-xs" style={{ color: "var(--text-secondary)" }}>
                {m.role}
              </p>
              {/* activity bar */}
              <div className="mt-2 flex items-center gap-2">
                <div
                  className="flex-1 h-1 rounded-full"
                  style={{ background: "var(--bg-card)" }}
                >
                  <div
                    className="h-full rounded-full transition-all"
                    style={{ width: `${m.activity}%`, background: m.color }}
                  />
                </div>
                <span
                  className="text-[10px] font-mono w-8 text-right"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {m.activity}%
                </span>
              </div>
            </div>
            {/* status badge */}
            <span
              className="text-[10px] px-2 py-1 rounded-full"
              style={{
                background:
                  m.status === "online"
                    ? "rgba(0,229,160,0.1)"
                    : "rgba(255,255,255,0.05)",
                color:
                  m.status === "online"
                    ? "var(--accent-green)"
                    : "var(--text-muted)",
              }}
            >
              {m.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
