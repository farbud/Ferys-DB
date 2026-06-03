import Sidebar from "@/components/ui/dashboard/Sidebar";
import Topbar from "@/components/ui/dashboard/Topbar";
import { auth } from "@/lib/auth";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  return (
    <div
      className="flex h-screen overflow-hidden"
      style={{ background: "var(--bg-primary)" }}
    >
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <Topbar user={session?.user ?? {}} />
        <main
          className="flex-1 overflow-auto p-6"
          style={{ background: "var(--bg-primary)" }}
        >
          {children}
        </main>
      </div>
    </div>
  );
}
