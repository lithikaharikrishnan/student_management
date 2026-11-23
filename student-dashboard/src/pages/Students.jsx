
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Search,
  UserPlus,
  Edit,
  Trash2,
  Eye,
  X,
} from "lucide-react";

function Students() {
  const navigate = useNavigate();

  const [students, setStudents] = useState([
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
  ]);

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [showForm, setShowForm] = useState(false);
  const [editId, setEditId] = useState(null);

  const emptyForm = {
    name: "",
    registerNumber: "",
    email: "",
    department: "",
    year: "",
  };

  const [formData, setFormData] = useState(emptyForm);

  const departments = [
    "Computer Science",
    "Information Technology",
    "Artificial Intelligence",
    "Data Science",
    "Electronics",
  ];

  const inputStyle = {
    width: "100%",
    padding: "12px",
    border: "1px solid #B76E79",
    borderRadius: "8px",
    outline: "none",
    background: "#F8DCCB",
    color: "#B76E79",
    marginTop: "7px",
  };

  const buttonStyle = {
    background: "#B76E79",
    color: "#F8DCCB",
    border: "none",
    borderRadius: "8px",
    padding: "11px 16px",
    cursor: "pointer",
    fontWeight: "600",
    display: "flex",
    alignItems: "center",
    gap: "8px",
  };

  const filteredStudents = students.filter((student) => {
    const matchesSearch =
      student.name.toLowerCase().includes(search.toLowerCase()) ||
      student.registerNumber.toLowerCase().includes(search.toLowerCase());

    const matchesDepartment =
      filter === "All" || student.department === filter;

    return matchesSearch && matchesDepartment;
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editId) {
      setStudents(
        students.map((student) =>
          student.id === editId
            ? { ...student, ...formData }
            : student
        )
      );
    } else {
      setStudents([
        ...students,
        {
          id: Date.now().toString(),
          ...formData,
        },
      ]);
    }

    setFormData(emptyForm);
    setEditId(null);
    setShowForm(false);
  };

  const handleEdit = (student) => {
    setFormData({
      name: student.name,
      registerNumber: student.registerNumber,
      email: student.email,
      department: student.department,
      year: student.year,
    });

    setEditId(student.id);
    setShowForm(true);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this student?")) {
      setStudents(students.filter((student) => student.id !== id));
    }
  };

  const handleCancel = () => {
    setShowForm(false);
    setEditId(null);
    setFormData(emptyForm);
  };

  return (
    <div
      style={{
        background: "#F8DCCB",
        minHeight: "100%",
        color: "#B76E79",
      }}
    >
      {/* Page Heading */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "15px",
          marginBottom: "25px",
        }}
      >
        <div>
          <h1 style={{ marginBottom: "7px", fontSize: "28px" }}>
            Students Management
          </h1>
          <p style={{ margin: 0, fontSize: "14px" }}>
            Manage, search and update student records.
          </p>
        </div>

        <button
          style={buttonStyle}
          onClick={() => {
            setFormData(emptyForm);
            setEditId(null);
            setShowForm(true);
          }}
        >
          <UserPlus size={18} />
          Add Student
        </button>
      </div>

      {/* Add / Edit Form */}
      {showForm && (
        <div
          style={{
            background: "#B76E79",
            color: "#F8DCCB",
            padding: "25px",
            borderRadius: "13px",
            marginBottom: "25px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "20px",
            }}
          >
            <h2 style={{ margin: 0, fontSize: "20px" }}>
              {editId ? "Edit Student" : "Add New Student"}
            </h2>

            <button
              onClick={handleCancel}
              style={{
                background: "transparent",
                color: "#F8DCCB",
                border: "none",
                cursor: "pointer",
              }}
            >
              <X size={22} />
            </button>
          </div>

          <form onSubmit={handleSubmit}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                gap: "18px",
              }}
            >
              <label>
                Student Name
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter student name"
                  required
                  style={inputStyle}
                />
              </label>

              <label>
                Register Number
                <input
                  name="registerNumber"
                  value={formData.registerNumber}
                  onChange={handleChange}
                  placeholder="Enter register number"
                  required
                  style={inputStyle}
                />
              </label>

              <label>
                Email Address
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter email"
                  required
                  style={inputStyle}
                />
              </label>

              <label>
                Department
                <select
                  name="department"
                  value={formData.department}
                  onChange={handleChange}
                  required
                  style={inputStyle}
                >
                  <option value="">Select Department</option>
                  {departments.map((department) => (
                    <option key={department} value={department}>
                      {department}
                    </option>
                  ))}
                </select>
              </label>

              <label>
                Academic Year
                <select
                  name="year"
                  value={formData.year}
                  onChange={handleChange}
                  required
                  style={inputStyle}
                >
                  <option value="">Select Year</option>
                  <option>1st Year</option>
                  <option>2nd Year</option>
                  <option>3rd Year</option>
                  <option>4th Year</option>
                </select>
              </label>
            </div>

            <div style={{ display: "flex", gap: "12px", marginTop: "22px" }}>
              <button type="submit" style={buttonStyle}>
                {editId ? "Update Student" : "Save Student"}
              </button>

              <button
                type="button"
                onClick={handleCancel}
                style={{
                  ...buttonStyle,
                  background: "#F8DCCB",
                  color: "#B76E79",
                }}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Search and Filter */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "15px",
          marginBottom: "22px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            background: "#B76E79",
            color: "#F8DCCB",
            padding: "11px 15px",
            borderRadius: "9px",
            flex: 1,
            minWidth: "220px",
          }}
        >
          <Search size={19} />

          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by name or register number..."
            style={{
              border: "none",
              outline: "none",
              background: "transparent",
              color: "#F8DCCB",
              width: "100%",
            }}
          />
        </div>

        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          style={{
            background: "#B76E79",
            color: "#F8DCCB",
            border: "none",
            borderRadius: "9px",
            padding: "11px 15px",
            minWidth: "190px",
          }}
        >
          <option value="All">All Departments</option>
          {departments.map((department) => (
            <option key={department} value={department}>
              {department}
            </option>
          ))}
        </select>
      </div>

      {/* Student Table */}
      <div
        style={{
          background: "#B76E79",
          color: "#F8DCCB",
          padding: "22px",
          borderRadius: "13px",
          overflowX: "auto",
        }}
      >
        <h2 style={{ fontSize: "19px", marginBottom: "20px" }}>
          Student Records ({filteredStudents.length})
        </h2>

        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            minWidth: "850px",
          }}
        >
          <thead>
            <tr style={{ borderBottom: "1px solid #F8DCCB" }}>
              {[
                "Register No.",
                "Student Name",
                "Email",
                "Department",
                "Year",
                "Actions",
              ].map((heading) => (
                <th
                  key={heading}
                  style={{
                    padding: "13px 10px",
                    textAlign: "left",
                    fontSize: "13px",
                  }}
                >
                  {heading}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {filteredStudents.map((student) => (
              <tr
                key={student.id}
                style={{ borderBottom: "1px solid #F8DCCB" }}
              >
                <td style={{ padding: "15px 10px", fontSize: "13px" }}>
                  {student.registerNumber}
                </td>

                <td style={{ padding: "15px 10px", fontSize: "13px" }}>
                  {student.name}
                </td>

                <td style={{ padding: "15px 10px", fontSize: "13px" }}>
                  {student.email}
                </td>

                <td style={{ padding: "15px 10px", fontSize: "13px" }}>
                  {student.department}
                </td>

                <td style={{ padding: "15px 10px", fontSize: "13px" }}>
                  {student.year}
                </td>

                <td style={{ padding: "15px 10px" }}>
                  <div style={{ display: "flex", gap: "12px" }}>
                    <button
                      title="View Details"
                      onClick={() => navigate(`/students/${student.id}`)}
                      style={{
                        background: "transparent",
                        color: "#F8DCCB",
                        border: "none",
                        cursor: "pointer",
                      }}
                    >
                      <Eye size={18} />
                    </button>

                    <button
                      title="Edit Student"
                      onClick={() => handleEdit(student)}
                      style={{
                        background: "transparent",
                        color: "#F8DCCB",
                        border: "none",
                        cursor: "pointer",
                      }}
                    >
                      <Edit size={18} />
                    </button>

                    <button
                      title="Delete Student"
                      onClick={() => handleDelete(student.id)}
                      style={{
                        background: "transparent",
                        color: "#F8DCCB",
                        border: "none",
                        cursor: "pointer",
                      }}
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}

            {filteredStudents.length === 0 && (
              <tr>
                <td
                  colSpan="6"
                  style={{
                    textAlign: "center",
                    padding: "30px",
                  }}
                >
                  No students found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Students;
