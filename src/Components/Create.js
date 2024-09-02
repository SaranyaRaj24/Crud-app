
import React, { useEffect, useState } from "react";
import axios from "axios";
import "../Components/Create.css";
import Button from "react-bootstrap/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import Spinner from 'react-bootstrap/Spinner'

function Create() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false); 
  const [loadingType, setLoadingType] = useState(""); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3030/users");
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleNavigate = () => {
    navigate("/Cre");
  };

  const handleDelete = (id) => {
    const confirm = window.confirm("Do you like to delete?");
    if (confirm) {
      axios.delete("http://localhost:3030/users/" + id).then((res) => {
        alert("Record Deleted");
        navigate("/");
      });
    }
  };

  const handleUpdate = (id) => {
    setLoading(true); 
    setLoadingType(""); 
    setTimeout(() => {
      navigate(`Update/${id}`); 
      setLoading(false); 
    }, 2000); 
  };

  const handleRead = (id) => {
    setLoading(true); 
    setLoadingType("read"); 
    setTimeout(() => {
      navigate(`Read/${id}`); 
      setLoading(false); 
    }, 2000); 
  };

  return (
    <div
      style={{
        backgroundColor: "#b8bbc0",
        width: "80rem",
        height: "56.5rem",
        display: "flex",
      }}
    >
      <div className="container">
        <Typography variant="h5" align="center" gutterBottom>
          Crud App with JSON Server
        </Typography>
        <Button
          onClick={handleNavigate}
          style={{
            backgroundColor: "#24305E",
            border: "none",
            color: "#fff",
            padding: "0.5rem 1rem",
            fontSize: "1rem",
          }}
        >
          Create+
        </Button>
        <table className="tab">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((d) => (
              <tr key={d.id}>
                <td>{d.id}</td>
                <td>{d.name}</td>
                <td>{d.email}</td>
                <td>
                  <div className="but">
                    <Button
                      onClick={() => handleRead(d.id)}
                      style={{
                        display: "inline-block",
                        backgroundColor: "#24305E",
                        color: "#fff",
                        padding: "0.5rem 1rem",
                        fontSize: "1rem",
                        border: "none",
                        borderRadius: "0.25rem",
                        cursor: "pointer",
                        transition: "background-color 0.3s ease",
                      }}
                    >
                      Read
                    </Button>
                    <Button
                      onClick={() => handleUpdate(d.id)}
                      style={{
                        display: "inline-block",
                        backgroundColor: "#24305E",
                        color: "#fff",
                        padding: "0.5rem 1rem",
                        fontSize: "1rem",
                        border: "none",
                        borderRadius: "0.25rem",
                        cursor: "pointer",
                        transition: "background-color 0.3s ease",
                      }}
                    >
                      Update
                    </Button>
                    <Button
                      onClick={() => handleDelete(d.id)}
                      style={{
                        backgroundColor: "#24305E",
                        border: "none",
                        color: "#fff",
                        padding: "0.5rem 1rem",
                        fontSize: "1rem",
                      }}
                    >
                      Delete
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {loading && (
          <div
            style={{
              position: "fixed",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              backgroundColor: "rgba(0, 0, 0, 0.7)",
              color: "#fff",
              padding: "1rem",
              borderRadius: "0.25rem",
              zIndex: 1000,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
           
              <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
          </div>
        )}
      </div>
    </div>
  );
}

export default Create;
