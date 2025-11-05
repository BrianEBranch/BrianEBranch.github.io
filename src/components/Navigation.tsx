import { Link, useLocation } from "react-router-dom";
import { Home, User, Briefcase, BookOpen, Send } from "lucide-react";

const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { path: "/", label: "TERMINAL", icon: Home },
    { path: "/about", label: "PROFILE", icon: User },
    { path: "/projects", label: "MODULES", icon: Briefcase },
    { path: "/blog", label: "LOGS", icon: BookOpen },
    { path: "/contact", label: "TRANSMIT", icon: Send },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-sm border-b-2 border-brass retro-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Brand */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary/20 border-2 border-primary rounded flex items-center justify-center animate-glow-pulse">
              <span className="terminal-glow pixel-font text-xs">BT</span>
            </div>
            <span className="terminal-font text-xl terminal-glow hidden sm:block">
              BRIAN'S TERMINAL v1.0
            </span>
          </div>

          {/* Navigation Links */}
          <div className="flex items-center gap-1 sm:gap-2">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              const Icon = item.icon;
              
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`
                    relative px-3 sm:px-4 py-2 sm:py-2.5
                    flex items-center gap-2
                    border-2 transition-all duration-200
                    pixel-font text-xs
                    btn-press
                    ${
                      isActive
                        ? "border-primary bg-primary/20 terminal-glow"
                        : "border-brass bg-card hover:bg-primary/10 brass-text hover:border-primary"
                    }
                  `}
                >
                  <Icon className="w-4 h-4" />
                  <span className="hidden sm:inline">{item.label}</span>
                  
                  {/* Active indicator lights */}
                  {isActive && (
                    <>
                      <span className="absolute top-1 right-1 w-1.5 h-1.5 bg-primary rounded-full animate-flicker" />
                      <span className="absolute bottom-1 right-1 w-1.5 h-1.5 bg-primary rounded-full animate-flicker" style={{ animationDelay: "0.5s" }} />
                    </>
                  )}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
