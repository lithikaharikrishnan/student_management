
import {
  GraduationCap,
  Users,
  BookOpen,
  ShieldCheck,
  LayoutDashboard,
  Heart,
} from "lucide-react";

function About() {
  const features = [
    {
      icon: Users,
      title: "Student Management",
      description:
        "Add, edit, delete and manage student information easily.",
    },
    {
      icon: BookOpen,
      title: "Academic Records",
      description:
        "Organize student departments, register numbers and academic years.",
    },
    {
      icon: LayoutDashboard,
      title: "Dashboard Overview",
      description:
        "View student statistics and recent student records in one place.",
    },
    {
      icon: ShieldCheck,
      title: "Simple Navigation",
      description:
        "Navigate between dashboard pages through an easy sidebar menu.",
    },
  ];

  return (
    <div
      style={{
        background: "#F8DCCB",
        minHeight: "100%",
        color: "#B76E79",
      }}
    >
      <div style={{ marginBottom: "30px" }}>
        <h1 style={{ fontSize: "29px", marginBottom: "8px" }}>
          About Student Management
        </h1>

        <p style={{ fontSize: "14px", margin: 0 }}>
          Learn more about our student management dashboard.
        </p>
      </div>

      <div
        style={{
          background: "#B76E79",
          color: "#F8DCCB",
          borderRadius: "15px",
          padding: "35px",
          marginBottom: "25px",
          display: "flex",
          alignItems: "center",
          gap: "22px",
          flexWrap: "wrap",
        }}
      >
        <GraduationCap size={55} />

        <div style={{ flex: 1, minWidth: "200px" }}>
          <h2 style={{ fontSize: "24px", marginBottom: "10px" }}>
            Student Management System
          </h2>

          <p style={{ fontSize: "14px", lineHeight: "1.8", margin: 0 }}>
            A simple and organized platform designed to manage student
            information, academic records and student activities through
            a user-friendly dashboard.
          </p>
        </div>
      </div>

      <h2 style={{ fontSize: "21px", marginBottom: "18px" }}>
        Main Features
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "18px",
          marginBottom: "25px",
        }}
      >
        {features.map((feature) => {
          const Icon = feature.icon;

          return (
            <div
              key={feature.title}
              style={{
                background: "#B76E79",
                color: "#F8DCCB",
                padding: "24px",
                borderRadius: "13px",
                minHeight: "180px",
              }}
            >
              <Icon size={28} />

              <h3 style={{ fontSize: "17px", marginTop: "16px" }}>
                {feature.title}
              </h3>

              <p style={{ fontSize: "13px", lineHeight: "1.7", margin: 0 }}>
                {feature.description}
              </p>
            </div>
          );
        })}
      </div>

      <div
        style={{
          background: "#B76E79",
          color: "#F8DCCB",
          borderRadius: "13px",
          padding: "22px",
          display: "flex",
          alignItems: "center",
          gap: "12px",
        }}
      >
        <Heart size={22} />

        <p style={{ margin: 0, fontSize: "14px" }}>
          Designed to make student record management simple and organized.
        </p>
      </div>
    </div>
  );
}

export default About;
