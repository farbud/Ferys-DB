const users = [
  {
    name: "Ali Rezaei",
    email: "ali@example.com",
    plan: "Pro",
    joined: "2024-01-12",
    active: true,
  },
  {
    name: "Mina Hosseini",
    email: "mina@example.com",
    plan: "Free",
    joined: "2024-02-20",
    active: true,
  },
  {
    name: "Reza Karimi",
    email: "reza@example.com",
    plan: "Pro",
    joined: "2024-03-05",
    active: false,
  },
  {
    name: "Sara Ahmadi",
    email: "sara@example.com",
    plan: "Enterprise",
    joined: "2024-01-30",
    active: true,
  },
  {
    name: "Dani Mohammadi",
    email: "dani@example.com",
    plan: "Free",
    joined: "2024-04-14",
    active: false,
  },
];

export default function UsersPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1
          className="text-2xl font-bold"
          style={{ color: "var(--text-primary)" }}
        >
          Users
        </h1>
        <span
          className="text-xs px-3 py-1 rounded-full font-mono"
          style={{
            background: "rgba(0,229,160,0.1)",
            color: "var(--accent-green)",
          }}
        >
          {users.length} total
        </span>
      </div>

      <div
        className="rounded-xl border overflow-hidden"
        style={{
          background: "var(--bg-secondary)",
          borderColor: "var(--border)",
        }}
      >
        <table className="w-full text-sm">
          <thead>
            <tr style={{ borderBottom: "1px solid var(--border)" }}>
              {["Name", "Email", "Plan", "Joined", "Status"].map((h) => (
                <th
                  key={h}
                  className="text-left px-4 py-3 text-xs uppercase tracking-wider"
                  style={{ color: "var(--text-muted)" }}
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {users.map((u, i) => (
              <tr
                key={i}
                className="transition-colors"
                style={{
                  borderBottom:
                    i < users.length - 1 ? "1px solid var(--border)" : "none",
                }}
              >
                <td
                  className="px-4 py-3 font-medium"
                  style={{ color: "var(--text-primary)" }}
                >
                  {u.name}
                </td>
                <td
                  className="px-4 py-3"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {u.email}
                </td>
                <td className="px-4 py-3">
                  <span
                    className="text-xs px-2 py-0.5 rounded-full"
                    style={{
                      background:
                        u.plan === "Enterprise"
                          ? "rgba(124,108,248,0.15)"
                          : u.plan === "Pro"
                            ? "rgba(0,229,160,0.1)"
                            : "rgba(255,255,255,0.05)",
                      color:
                        u.plan === "Enterprise"
                          ? "var(--accent-purple)"
                          : u.plan === "Pro"
                            ? "var(--accent-green)"
                            : "var(--text-muted)",
                    }}
                  >
                    {u.plan}
                  </span>
                </td>
                <td
                  className="px-4 py-3 font-mono text-xs"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {u.joined}
                </td>
                <td className="px-4 py-3">
                  <span
                    className="text-xs px-2 py-0.5 rounded-full"
                    style={{
                      background: u.active
                        ? "rgba(0,229,160,0.1)"
                        : "rgba(255,107,107,0.1)",
                      color: u.active
                        ? "var(--accent-green)"
                        : "var(--accent-red)",
                    }}
                  >
                    {u.active ? "Active" : "Inactive"}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
