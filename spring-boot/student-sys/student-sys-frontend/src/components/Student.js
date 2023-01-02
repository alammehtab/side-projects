import { Button, Container, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import React, { useEffect, useState } from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

export default function Student() {
  const paperStyle = {
    padding: "10px 20px",
    width: "50% ",
    margin: "10px auto",
  };
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [students, setStudents] = useState([]);
  const [studentsFetchingErr, setStudentsFetchingErr] = useState(false);
  const classes = useStyles();

  const handleClick = (e) => {
    e.preventDefault();
    const student = { name, address };
    fetch("http://localhost:8080/students/new", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(student),
    }).then(() => {
      setName("");
      setAddress("");
      alert("New Student added");
    });
  };

  useEffect(() => {
    fetch("http://localhost:8080/students")
      .then((res) => res.json())
      .then((result) => {
        setStudents(result);
      })
      .catch((err) => {
        console.log(err?.message);
        setStudentsFetchingErr(true);
      });
  }, [students]);

  return (
    <Container>
      <Paper elevation={3} style={paperStyle}>
        <h1>Add Student</h1>
        <form className={classes.root} noValidate autoComplete="off">
          <TextField
            id="outlined-basic"
            label="Student Name"
            variant="outlined"
            fullWidth
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            id="outlined-basic"
            label="Student Adress"
            variant="outlined"
            fullWidth
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <Button variant="contained" color="secondary" onClick={handleClick}>
            Submit
          </Button>
        </form>
      </Paper>
      <h1>Students</h1>
      {studentsFetchingErr && <h6>Something went wrong fetching students.</h6>}
      <Paper elevation={3} style={paperStyle}>
        {students.map((student) => (
          <Paper
            elevation={6}
            style={{
              margin: "10px",
              padding: "15px",
              textAlign: "left",
              display: "flex",
              justifyContent: "space-between",
            }}
            key={student.id}
          >
            <div>
              Id:{student.id}
              <br />
              Name:{student.name}
              <br />
              Address:{student.address}
            </div>
            <Button
              color="secondary"
              onClick={() => alert("Delete button clicked.")}
            >
              Delete
            </Button>
          </Paper>
        ))}
      </Paper>
    </Container>
  );
}
