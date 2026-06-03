export default function SettingsPage() {
  return (
    <div className="space-y-6 max-w-lg">
      <h1
        className="text-2xl font-bold"
        style={{ color: "var(--text-primary)" }}
      >
        Settings
      </h1>

      <div
        className="rounded-xl border divide-y"
        style={
          {
            background: "var(--bg-secondary)",
            borderColor: "var(--border)",
            "--tw-divide-opacity": 1,
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
          } as any
        }
      >
        {[
          { label: "Notifications", desc: "Email and push notifications" },
          { label: "Appearance", desc: "Dark mode is always on 🌙" },
          { label: "Security", desc: "Password and 2FA" },
          { label: "API Keys", desc: "Manage your API access" },
        ].map((s) => (
          <div
            key={s.label}
            className="flex items-center justify-between px-5 py-4"
          >
            <div>
              <p
                className="text-sm font-medium"
                style={{ color: "var(--text-primary)" }}
              >
                {s.label}
              </p>
              <p
                className="text-xs mt-0.5"
                style={{ color: "var(--text-secondary)" }}
              >
                {s.desc}
              </p>
            </div>
            <button
              className="text-xs px-3 py-1.5 rounded-lg border transition-colors"
              style={{
                borderColor: "var(--border)",
                color: "var(--text-secondary)",
              }}
            >
              Manage
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
