import { Link, useLocation, Outlet } from "react-router-dom";
import { Building2, LayoutDashboard, CalendarDays, DoorOpen, Users, Settings, LogOut } from "lucide-react";
import { cn } from "@/lib/utils";

const menuItems = [
  {
    label: "Visão Geral",
    icon: LayoutDashboard,
    href: "/admin/dashboard",
  },
  {
    label: "Agenda / Calendário",
    icon: CalendarDays,
    href: "/admin/dashboard/agenda",
  },
  {
    label: "Salas",
    icon: DoorOpen,
    href: "/admin/dashboard/salas",
  },
  {
    label: "Clientes",
    icon: Users,
    href: "/admin/dashboard/clientes",
  },
  {
    label: "Configurações",
    icon: Settings,
    href: "/admin/dashboard/configuracoes",
  },
];

export default function DashboardLayout() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 h-full w-64 bg-white border-r border-slate-200 flex flex-col shadow-sm">
        {/* Logo/Header */}
        <div className="p-6 border-b border-slate-200">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <Building2 className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-slate-900">Damha Admin</h1>
              <p className="text-xs text-slate-500">Painel de Controle</p>
            </div>
          </div>
        </div>

        {/* Navigation Menu */}
        <nav className="flex-1 p-4 space-y-1">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.href;
            
            return (
              <Link
                key={item.href}
                to={item.href}
                className={cn(
                  "flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors",
                  isActive
                    ? "bg-blue-50 text-blue-700 border border-blue-200"
                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                )}
              >
                <Icon className="w-5 h-5" />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Logout Button */}
        <div className="p-4 border-t border-slate-200">
          <Link
            to="/admin"
            className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-slate-600 hover:bg-red-50 hover:text-red-600 transition-colors"
          >
            <LogOut className="w-5 h-5" />
            <span>Sair</span>
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="ml-64 p-8">
        <Outlet />
      </main>
    </div>
  );
}
