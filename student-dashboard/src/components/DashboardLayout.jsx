
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

function DashboardLayout() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#FFF0E3",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Navbar />

      <div
        style={{
          display: "flex",
          flex: 1,
          alignItems: "stretch",
        }}
      >
        <Sidebar />

        <main
          style={{
            flex: 1,
            minWidth: 0,
            background: "#FFF0E3",
            padding: "30px",
            boxSizing: "border-box",
          }}
        >
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default DashboardLayout;
