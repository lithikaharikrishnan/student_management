
import { Search, Bell, UserCircle } from "lucide-react";

function Navbar() {
  return (
    <header
      style={{
        height: "76px",
        width: "100%",
        background: "#713B25",
        color: "#FFF0E3",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 30px",
        boxSizing: "border-box",
      }}
    >
      <h2
        style={{
          margin: 0,
          fontSize: "23px",
          fontWeight: "700",
          letterSpacing: "0.3px",
          color: "#FFF0E3",
        }}
      >
        Student Portal
      </h2>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "22px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            background: "#FFF0E3",
            padding: "11px 15px",
            borderRadius: "10px",
            width: "210px",
          }}
        >
          <Search size={19} color="#713B25" />

          <input
            type="text"
            placeholder="Search students..."
            style={{
              border: "none",
              outline: "none",
              background: "transparent",
              color: "#713B25",
              width: "100%",
              fontSize: "14px",
            }}
          />
        </div>

        <Bell size={21} color="#FFF0E3" />

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <UserCircle size={35} color="#FFF0E3" />

          <div>
            <p
              style={{
                margin: 0,
                fontSize: "14px",
                fontWeight: "600",
                color: "#FFF0E3",
              }}
            >
              Admin
            </p>
            <p
              style={{
                margin: 0,
                fontSize: "11px",
                color: "#FFF0E3",
              }}
            >
              Administrator
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
