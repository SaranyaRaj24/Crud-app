
import { useState } from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "../Components/Cre.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Cre() {
  const navigate = useNavigate();


  const [inputData, setInputData] = useState({
    id:10,
    name: "",
    email: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();

   
    axios
      .post("http://localhost:3030/users", inputData)
      .then((response) => {
        alert("Data Posted Successfully!");
        navigate("/");
      })
      .catch((error) => {
        console.error("There was an error posting the data!", error);
        alert("Failed to post data.");
      });
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
          Add Details
        </Typography>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
              placeholder="Enter the Name"
              value={inputData.name}
              onChange={(e) =>
                setInputData({ ...inputData, name: e.target.value })
              }
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="text"
              placeholder="Enter the Email"
              value={inputData.email} 
              onChange={(e) =>
                setInputData({ ...inputData, email: e.target.value })
              }
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
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Cre;


