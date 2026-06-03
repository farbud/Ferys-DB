export default function MessagesPage() {
  return (
    <div className="space-y-6">
      <h1
        className="text-2xl font-bold"
        style={{ color: "var(--text-primary)" }}
      >
        Messages
      </h1>
      <div
        className="rounded-xl border p-8 text-center"
        style={{
          background: "var(--bg-secondary)",
          borderColor: "var(--border)",
        }}
      >
        <p className="text-4xl mb-3">💬</p>
        <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
          Real-time chat در مرحله بعد اضافه می‌شه
        </p>
      </div>
    </div>
  );
}
