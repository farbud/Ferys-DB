"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Users,
  User,
  BarChart2,
  MessageSquare,
  Settings,
} from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/", icon: LayoutDashboard, label: "Dashboard", section: "Overview" },
  { href: "/team", icon: Users, label: "Team", section: null },
  { href: "/users", icon: User, label: "Users", section: null },
  {
    href: "/analytics",
    icon: BarChart2,
    label: "Analytics",
    section: "Activity",
  },
  { href: "/messages", icon: MessageSquare, label: "Messages", section: null },
  { href: "/settings", icon: Settings, label: "Settings", section: "System" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside
      className="w-52 bg-(--bg-secondary) border-r border-(--border) 
                      flex flex-col py-4 shrink-0"
    >
      {/* لوگو */}
      <div className="px-4 mb-6 flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-(--accent-green)" />
        <span className="text-sm font-bold tracking-widest text-(--accent-green)">
          Ferys DB
        </span>
      </div>

      {/* ناوبری */}
      <nav className="flex-1 space-y-0.5">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;

          return (
            <div key={item.href}>
              {item.section && (
                <p
                  className="px-4 pt-4 pb-1 text-[10px] tracking-widest 
                              uppercase text-(--text-muted) font-medium"
                >
                  {item.section}
                </p>
              )}
              <Link
                href={item.href}
                className={cn(
                  "flex items-center gap-2.5 px-4 py-2.5 text-sm transition-all",
                  "border-l-2",
                  isActive
                    ? "text-(--accent-green) bg-(--bg-card) border-(--accent-green)"
                    : "text-(--text-secondary) border-transparent hover:bg-(--bg-tertiary) hover:text-(--text-primary)",
                )}
              >
                <Icon size={16} />
                {item.label}
              </Link>
            </div>
          );
        })}
      </nav>
    </aside>
  );
}
