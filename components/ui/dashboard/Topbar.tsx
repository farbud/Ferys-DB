"use client";
import { signOut } from "next-auth/react";
import { Bell, LogOut, ChevronDown } from "lucide-react";
import { useState } from "react";

interface TopbarProps {
  user: {
    name?: string | null;
    email?: string | null;
    image?: string | null;
  };
}

export default function Topbar({ user }: TopbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const initials =
    user.name
      ?.split(" ")
      .map((w) => w[0])
      .join("")
      .toUpperCase()
      .slice(0, 2) ?? "U";

  return (
    <header
      className="h-14 bg-(--bg-secondary) border-b border-(--border)
                       flex items-center justify-between px-6 shrink-0"
    >
      {/* چپ — وضعیت live */}
      <div className="flex items-center gap-2 text-xs text-(--text-secondary)">
        <span
          className="w-1.5 h-1.5 rounded-full bg-(--accent-green) 
                         animate-pulse"
        />
        Live · همه سیستم‌ها عادی
      </div>

      {/* راست */}
      <div className="flex items-center gap-4">
        {/* نوتیفیکیشن */}
        <button
          className="relative text-(--text-secondary) 
                           hover:text-(--text-primary) transition-colors"
        >
          <Bell size={18} />
          <span
            className="absolute -top-1 -right-1 w-4 h-4 rounded-full 
                           bg-(--accent-red) text-[9px] font-bold
                           flex items-center justify-center text-white"
          >
            4
          </span>
        </button>

        {/* پروفایل */}
        <div className="relative">
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            {user.image ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={user.image}
                alt={user.name ?? ""}
                className="w-8 h-8 rounded-full object-cover"
              />
            ) : (
              <div
                className="w-8 h-8 rounded-full bg-linear-to-br 
                              from-(--accent-purple) to-(--accent-green)
                              flex items-center justify-center text-xs font-bold text-white"
              >
                {initials}
              </div>
            )}
            <span className="text-sm text-(--text-primary) hidden sm:block">
              {user.name ?? user.email}
            </span>
            <ChevronDown size={14} className="text-(--text-muted)" />
          </button>

          {/* dropdown */}
          {menuOpen && (
            <div
              className="absolute right-0 top-11 w-44 bg-(--bg-card) 
                            border border-(--border) rounded-xl shadow-xl
                            overflow-hidden z-50"
            >
              <div className="px-4 py-3 border-b border-(--border)">
                <p className="text-xs font-medium text-(--text-primary) truncate">
                  {user.name}
                </p>
                <p className="text-[10px] text-(--text-muted) truncate">
                  {user.email}
                </p>
              </div>
              <button
                onClick={() => signOut({ callbackUrl: "/login" })}
                className="w-full flex items-center gap-2 px-4 py-2.5 text-xs
                           text-(--accent-red) hover:bg-(--bg-tertiary) 
                           transition-colors"
              >
                <LogOut size={13} />
                خروج
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
