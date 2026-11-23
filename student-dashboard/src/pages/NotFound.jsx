
import { useNavigate } from "react-router-dom";
import { AlertTriangle, Home } from "lucide-react";

function NotFound() {
  const navigate = useNavigate();
 
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#F8DCCB",
        color: "#B76E79",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "24px",
        textAlign: "center",
      }}
    >
      <div
        style={{
          maxWidth: "500px",
          background: "#B76E79",
          color: "#F8DCCB",
          borderRadius: "18px",
          padding: "45px 35px",
        }}
      >
        <AlertTriangle size={55} />

        <h1 style={{ fontSize: "64px", margin: "15px 0" }}>
          404
        </h1>

        <h2>Page Not Found</h2>

        <p>
          The page you are looking for does not exist
          or may have been moved.
        </p>

        <button
          onClick={() => navigate("/")}
          style={{
            background: "#F8DCCB",
            color: "#B76E79",
            border: "none",
            padding: "12px 18px",
            borderRadius: "8px",
            fontWeight: "600",
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            cursor: "pointer",
          }}
        >
          <Home size={18} />
          Go to Dashboard
        </button>
      </div>
    </div>
  );
}

export default NotFound;
