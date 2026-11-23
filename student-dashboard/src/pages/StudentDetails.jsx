
import { useParams, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  User,
  Mail,
  BookOpen,
  Hash,
  GraduationCap,
} from "lucide-react";

function StudentDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const students = [
    {
      id: "1",
      registerNumber: "STU001",
      name: "Arun Kumar",
      email: "arun@gmail.com",
      department: "Computer Science",
      year: "3rd Year",
    },
    {
      id: "2",
      registerNumber: "STU002",
      name: "Priya Sharma",
      email: "priya@gmail.com",
      department: "Information Technology",
      year: "2nd Year",
    },
    {
      id: "3",
      registerNumber: "STU003",
      name: "Rahul Kumar",
      email: "rahul@gmail.com",
      department: "Artificial Intelligence",
      year: "1st Year",
    },
  ];

  const student = students.find((item) => item.id === id);

  const detailItems = student
    ? [
        { label: "Student Name", value: student.name, icon: User },
        { label: "Register Number", value: student.registerNumber, icon: Hash },
        { label: "Email Address", value: student.email, icon: Mail },
        { label: "Department", value: student.department, icon: BookOpen },
        { label: "Academic Year", value: student.year, icon: GraduationCap },
      ]
    : [];

  if (!student) {
    return (
      <div
        style={{
          background: "#F8DCCB",
          minHeight: "100%",
          color: "#B76E79",
          textAlign: "center",
          padding: "60px 20px",
        }}
      >
        <h2>Student Not Found</h2>
        <button
          onClick={() => navigate("/students")}
          style={{
            background: "#B76E79",
            color: "#F8DCCB",
            border: "none",
            borderRadius: "8px",
            padding: "12px 20px",
            cursor: "pointer",
          }}
        >
          Back to Students
        </button>
      </div>
    );
  }

  return (
    <div
      style={{
        background: "#F8DCCB",
        minHeight: "100%",
        color: "#B76E79",
      }}
    >
      <button
        onClick={() => navigate("/students")}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          background: "#B76E79",
          color: "#F8DCCB",
          border: "none",
          borderRadius: "8px",
          padding: "11px 17px",
          cursor: "pointer",
          fontWeight: "600",
          marginBottom: "25px",
        }}
      >
        <ArrowLeft size={18} />
        Back to Students
      </button>

      <h1 style={{ fontSize: "28px", marginBottom: "8px" }}>
        Student Details
      </h1>

      <p style={{ marginBottom: "25px", fontSize: "14px" }}>
        Complete information about the selected student.
      </p>

      <div
        style={{
          background: "#B76E79",
          color: "#F8DCCB",
          borderRadius: "15px",
          padding: "30px",
          maxWidth: "750px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "18px",
            paddingBottom: "25px",
            borderBottom: "1px solid #F8DCCB",
            marginBottom: "20px",
          }}
        >
          <div
            style={{
              width: "65px",
              height: "65px",
              borderRadius: "50%",
              background: "#F8DCCB",
              color: "#B76E79",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <User size={32} />
          </div>

          <div>
            <h2 style={{ margin: "0 0 7px", fontSize: "23px" }}>
              {student.name}
            </h2>
            <p style={{ margin: 0, fontSize: "14px" }}>
              {student.registerNumber}
            </p>
          </div>
        </div>

        <div style={{ display: "grid", gap: "20px" }}>
          {detailItems.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.label}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "15px",
                }}
              >
                <Icon size={21} />

                <div>
                  <p style={{ margin: "0 0 5px", fontSize: "12px" }}>
                    {item.label}
                  </p>
                  <h3 style={{ margin: 0, fontSize: "15px" }}>
                    {item.value}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default StudentDetails;
