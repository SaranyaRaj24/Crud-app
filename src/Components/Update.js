
import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function Update() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [inputData, setInputData] = useState({
    name: "",
    email: "",
  });

  useEffect(() => {
    if (id) {
      axios
        .get(`http://localhost:3030/users/${id}`)
        .then((res) => setInputData(res.data))
        .catch((err) => console.error("Error fetching data:", err));
    }
  }, [id]);

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .put(`http://localhost:3030/users/${id}`, inputData)
      .then((res) => {
        alert("Data Updated Successfully");
        navigate("/");
      })
      .catch((err) => {
        console.error(
          "There was an error updating the data!",
          err.response ? err.response.data : err.message
        );
        alert("Failed to update data.");
      });
  };

  const handleChange = (event) => {
    const { id, value } = event.target;
    setInputData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  return (
    <div
      style={{
        backgroundColor: "#b8bbc0",
        width: "80rem",
        height: "36.5rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="contain">
        <Typography variant="h5" align="center" gutterBottom>
          Update Details
        </Typography>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
              placeholder="Enter the Name"
              value={inputData.name}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="text"
              placeholder="Enter the Email"
              value={inputData.email}
              onChange={handleChange}
            />
          </div>
          <Button
            style={{
              backgroundColor: "#24305E",
              border: "none",
              color: "#fff",
              padding: "0.5rem 1rem",
              fontSize: "1rem",
            }}
            type="submit"
          >
            Update
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Update;
