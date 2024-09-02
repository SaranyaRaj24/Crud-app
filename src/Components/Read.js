
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Read() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:3030/users/${id}`)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  if (!data) {
    return <p>Loading...</p>;
  }

  return (
    <div
      style={{
        backgroundColor: "#b8bbc0",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        padding: "2rem", 
      }}
    >
      <Card
        style={{
          width: "18rem",
          border: "1px solid #ddd",
          borderRadius: "0.5rem",
          boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
          padding: "1rem",
          backgroundColor: "#ffffff", 
        }}
      >
        <Card.Body>
          <Card.Title
            style={{
              fontSize: "1.25rem",
              marginBottom: "1rem",
              fontWeight: "bold",
            }}
          >
            User Details
          </Card.Title>
          <Card.Subtitle
            className="mb-2 text-muted"
            style={{
              marginBottom: "0.5rem",
            }}
          >
            ID: {data.id}
          </Card.Subtitle>
          <Card.Text
            style={{
              marginBottom: "0.5rem",
            }}
          >
            <strong>Name:</strong> {data.name}
          </Card.Text>
          <Card.Text
            style={{
              marginBottom: "1rem",
            }}
          >
            <strong>Email:</strong> {data.email}
          </Card.Text>
          <Button
            style={{
              backgroundColor: "#24305E",
              border: "none",
              color: "#fff",
              padding: "0.5rem 1rem",
              fontSize: "1rem",
              borderRadius: "0.25rem",
              boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
            }}
            onClick={() => navigate(-1)}
          >
            Back
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Read;

