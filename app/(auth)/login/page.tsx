"use client";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (result?.error) {
      setError("ایمیل یا رمز اشتباهه");
    } else {
      router.replace("/");
      router.refresh();
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-(--bg-primary)">
      <div className="w-full max-w-sm space-y-8">
        {/* لوگو */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 mb-8">
            <span
              className="w-2 h-2 rounded-full bg-(--accent-green) 
                           shadow-[0_0_0_4px_rgba(0,229,160,0.1)]"
            />
            <span className="text-lg font-bold tracking-widest text-(--accent-green)">
              Ferys DB
            </span>
          </div>
          <p className="text-sm text-(--text-secondary)">
            demo@nexus.dev / demo123
          </p>
        </div>

        {/* فرم */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 rounded-xl bg-(--bg-card) 
                       border border-(--border) text-sm outline-none
                       focus:border-(--accent-green) transition-colors"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 rounded-xl bg-(--bg-card)
                       border border-(--border) text-sm outline-none
                       focus:border-(--accent-green) transition-colors"
            required
          />
          {error && <p className="text-xs text-(--accent-red)">{error}</p>}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-xl bg-(--accent-green) 
                       text-[#0a0c10] font-semibold text-sm
                       hover:opacity-90 transition-opacity disabled:opacity-50"
          >
            {loading ? "در حال ورود..." : "ورود"}
          </button>
        </form>

        {/* OAuth */}
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="flex-1 h-px bg-(--border)" />
            <span className="text-xs text-(--text-muted)">یا</span>
            <div className="flex-1 h-px bg-(--border)" />
          </div>
          <button
            onClick={() => signIn("github", { callbackUrl: "/" })}
            className="w-full py-3 rounded-xl border border-(--border)
                       text-sm text-(--text-secondary) hover:bg-(--bg-card)
                       transition-colors flex items-center justify-center gap-2"
          >
            ورود با GitHub
          </button>
        </div>
      </div>
    </div>
  );
}
