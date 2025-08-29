import { 
  LayoutDashboard, 
  TrendingUp, 
  Briefcase, 
  Newspaper, 
  Bell, 
  Users, 
  Settings, 
  HelpCircle, 
  MessageSquare, 
  LogOut 
} from "lucide-react";
import { Button } from "@/components/ui/button";

const Sidebar = () => {
  const menuItems = [
    { icon: LayoutDashboard, label: "Dashboard", active: true },
    { icon: TrendingUp, label: "Market" },
    { icon: Briefcase, label: "Portfolio" },
    { icon: Newspaper, label: "News" },
  ];

  const accountItems = [
    { icon: Bell, label: "Notification", badge: "1" },
    { icon: Users, label: "Community", badge: "3" },
    { icon: Settings, label: "Setting" },
    { icon: HelpCircle, label: "Support" },
    { icon: MessageSquare, label: "Messages" },
    { icon: LogOut, label: "Logout" },
  ];

  return (
    <aside className="w-64 bg-sidebar-bg border-r border-primary/20 h-screen flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-primary/20">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">Ơ</span>
          </div>
          <span className="text-xl font-semibold text-foreground">Oniex</span>
        </div>
        <p className="text-sm text-muted-foreground mt-1">Overview</p>
      </div>

      {/* Main Navigation */}
      <nav className="flex-1 p-4">
        <div className="space-y-1">
          {menuItems.map((item) => (
            <Button
              key={item.label}
              variant={item.active ? "default" : "ghost"}
              className={`w-full justify-start gap-3 h-12 ${
                item.active 
                  ? "bg-primary text-white" 
                  : "text-muted-foreground hover:text-foreground hover:bg-sidebar-hover"
              }`}
            >
              <item.icon className="h-5 w-5" />
              {item.label}
            </Button>
          ))}
        </div>

        {/* Account Section */}
        <div className="mt-8">
          <p className="text-sm text-muted-foreground mb-3 px-3">Account</p>
          <div className="space-y-1">
            {accountItems.map((item) => (
              <Button
                key={item.label}
                variant="ghost"
                className="w-full justify-start gap-3 h-12 text-muted-foreground hover:text-foreground hover:bg-sidebar-hover relative"
              >
                <item.icon className="h-5 w-5" />
                {item.label}
                {item.badge && (
                  <span className="absolute right-3 bg-primary text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                    {item.badge}
                  </span>
                )}
              </Button>
            ))}
          </div>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;