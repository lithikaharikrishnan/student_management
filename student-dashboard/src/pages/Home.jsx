
import {
  Users,
  UserCheck,
  UserX,
  GraduationCap,
  ArrowUpRight,
  UserPlus,
  BookOpen,
  ClipboardList,
} from "lucide-react";

import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const stats = [
    {
      title: "Total Students",
      value: "1,250",
      detail: "Registered students",
      icon: Users,
    },
    {
      title: "Active Students",
      value: "1,100",
      detail: "Currently enrolled",
      icon: UserCheck,
    },
    {
      title: "Inactive Students",
      value: "150",
      detail: "Not currently active",
      icon: UserX,
    },
    {
      title: "Departments",
      value: "08",
      detail: "Academic departments",
      icon: GraduationCap,
    },
  ];

  const students = [
    {
      id: "STU001",
      name: "Arun Kumar",
      department: "Computer Science",
      year: "3rd Year",
    },
    {
      id: "STU002",
      name: "Priya Sharma",
      department: "Information Technology",
      year: "2nd Year",
    },
    {
      id: "STU003",
      name: "Rahul Kumar",
      department: "Artificial Intelligence",
      year: "1st Year",
    },
    {
      id: "STU004",
      name: "Sneha Devi",
      department: "Computer Science",
      year: "3rd Year",
    },
    {
      id: "STU005",
      name: "Vikram Raj",
      department: "Electronics",
      year: "4th Year",
    },
  ];

  return (
    <div
      style={{
        width: "100%",
        color: "#713B25",
      }}
    >
      {/* Welcome Section */}
      <div
        style={{
          background: "#713B25",
          color: "#FFF0E3",
          padding: "30px",
          borderRadius: "18px",
          marginBottom: "28px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "20px",
        }}
      >
        <div>
          <p style={{ fontSize: "14px", marginBottom: "10px" }}>
            STUDENT MANAGEMENT SYSTEM
          </p>

          <h1 style={{ fontSize: "30px", marginBottom: "10px" }}>
            Welcome Back, Admin!
          </h1>

          <p style={{ fontSize: "14px", margin: 0 }}>
            Here's what's happening in your institution today.
          </p>
        </div>

        <GraduationCap size={75} strokeWidth={1.5} />
      </div>

      {/* Page Heading */}
      <div style={{ marginBottom: "22px" }}>
        <h2 style={{ fontSize: "23px", marginBottom: "6px" }}>
          Dashboard Overview
        </h2>

        <p style={{ fontSize: "14px", margin: 0 }}>
          Academic Year 2026 - 2027
        </p>
      </div>

      {/* Statistics */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(190px, 1fr))",
          gap: "18px",
          marginBottom: "32px",
        }}
      >
        {stats.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              style={{
                background: "#713B25",
                color: "#FFF0E3",
                padding: "23px",
                borderRadius: "16px",
                minHeight: "155px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "18px",
                }}
              >
                <span style={{ fontSize: "14px" }}>
                  {item.title}
                </span>

                <Icon size={25} />
              </div>

              <h2 style={{ fontSize: "32px", marginBottom: "7px" }}>
                {item.value}
              </h2>

              <p style={{ fontSize: "12px", margin: 0 }}>
                {item.detail}
              </p>
            </div>
          );
        })}
      </div>

      {/* Quick Actions */}
      <div style={{ marginBottom: "32px" }}>
        <h2 style={{ fontSize: "21px", marginBottom: "16px" }}>
          Quick Actions
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: "15px",
          }}
        >
          {[
            {
              title: "Add Student",
              icon: UserPlus,
              action: () => navigate("/students"),
            },
            {
              title: "View Students",
              icon: Users,
              action: () => navigate("/students"),
            },
            {
              title: "Academic Records",
              icon: BookOpen,
              action: () => navigate("/students"),
            },
            {
              title: "Student Reports",
              icon: ClipboardList,
              action: () => navigate("/students"),
            },
          ].map((item) => {
            const Icon = item.icon;

            return (
              <button
                key={item.title}
                onClick={item.action}
                style={{
                  background: "#713B25",
                  color: "#FFF0E3",
                  border: "none",
                  borderRadius: "13px",
                  padding: "18px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  fontWeight: "600",
                  fontSize: "14px",
                }}
              >
                <span style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                  <Icon size={20} />
                  {item.title}
                </span>

                <ArrowUpRight size={18} />
              </button>
            );
          })}
        </div>
      </div>

      {/* Recent Students */}
      <div
        style={{
          background: "#713B25",
          color: "#FFF0E3",
          borderRadius: "16px",
          padding: "24px",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "12px",
            marginBottom: "22px",
          }}
        >
          <div>
            <h2 style={{ fontSize: "21px", marginBottom: "6px" }}>
              Recent Students
            </h2>

            <p style={{ fontSize: "13px", margin: 0 }}>
              Recently registered student details
            </p>
          </div>

          <button
            onClick={() => navigate("/students")}
            style={{
              background: "#FFF0E3",
              color: "#713B25",
              border: "none",
              borderRadius: "8px",
              padding: "11px 16px",
              fontWeight: "700",
            }}
          >
            View All
          </button>
        </div>

        <div style={{ overflowX: "auto" }}>
          <table
            style={{
              width: "100%",
              minWidth: "600px",
              borderCollapse: "collapse",
              color: "#FFF0E3",
            }}
          >
            <thead>
              <tr>
                {["Student ID", "Student Name", "Department", "Year"].map(
                  (heading) => (
                    <th
                      key={heading}
                      style={{
                        padding: "15px 12px",
                        textAlign: "left",
                        fontSize: "13px",
                        borderBottom: "1px solid #FFF0E3",
                      }}
                    >
                      {heading}
                    </th>
                  )
                )}
              </tr>
            </thead>

            <tbody>
              {students.map((student) => (
                <tr key={student.id}>
                  <td style={{ padding: "17px 12px", fontSize: "13px" }}>
                    {student.id}
                  </td>

                  <td style={{ padding: "17px 12px", fontSize: "13px", fontWeight: "600" }}>
                    {student.name}
                  </td>

                  <td style={{ padding: "17px 12px", fontSize: "13px" }}>
                    {student.department}
                  </td>

                  <td style={{ padding: "17px 12px", fontSize: "13px" }}>
                    {student.year}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Home;
  