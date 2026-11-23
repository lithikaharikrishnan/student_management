
import {
  LayoutDashboard,
  Users,
  Info,
  GraduationCap,
} from "lucide-react";
import { NavLink } from "react-router-dom";

function Sidebar() {
  const menuItems = [
    { name: "Dashboard", path: "/", icon: LayoutDashboard },
    { name: "Students", path: "/students", icon: Users },
    { name: "About", path: "/about", icon: Info },
  ];

  return (
    <aside
      style={{
        width: "240px",
        minWidth: "240px",
        minHeight: "calc(100vh - 76px)",
        background: "#713B25",
        color: "#FFF0E3",
        padding: "28px 16px",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
          padding: "0 10px 30px",
        }}
      >
        <GraduationCap size={30} color="#FFF0E3" />
        <div>
          <h3 style={{ margin: 0, fontSize: "17px" }}>
            Student
          </h3>
          <p style={{ margin: 0, fontSize: "12px" }}>
            Management
          </p>
        </div>
      </div>

      <p
        style={{
          fontSize: "11px",
          fontWeight: "700",
          letterSpacing: "1.5px",
          padding: "0 12px",
          marginBottom: "14px",
        }}
      >
        MAIN MENU
      </p>

      <nav style={{ display: "grid", gap: "9px" }}>
        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/"}
              style={({ isActive }) => ({
                display: "flex",
                alignItems: "center",
                gap: "13px",
                padding: "13px 14px",
                borderRadius: "10px",
                textDecoration: "none",
                fontSize: "14px",
                fontWeight: "600",
                background: isActive ? "#FFF0E3" : "transparent",
                color: isActive ? "#713B25" : "#FFF0E3",
                transition: "0.2s ease",
              })}
            >
              <Icon size={19} />
              {item.name}
            </NavLink>
          );
        })}
      </nav>
    </aside>
  );
}

export default Sidebar;
