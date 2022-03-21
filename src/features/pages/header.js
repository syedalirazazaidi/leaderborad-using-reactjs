// import React from "react";
import styles from "./header.module.css";

import TextField from "@mui/material/TextField";
// function Header() {
//   return (
//     <div className={styles.header}>
//       <h1>Leaderboard</h1>
//       {/* <button>add player</button> */}
//     </div>
//   );
// }

// export default Header;
import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
// import firebase from "firebase";

import { useDispatch } from "react-redux";
import { db } from "./fire_base.config";
import { addPlayer } from "../counter/counterSlice";
export default function Header() {
  const dispatch = useDispatch();
  const initialValues = {
    participant: "",
    location: "",
    units: "",
    type: "",
    points: 0,
  };
  const [open, setOpen] = React.useState(false);
  const [value, setValues] = React.useState(initialValues);
  const [player, setAllPlayer] = React.useState([]);
  React.useEffect(() => {
    getPlayerData();
  });
  function getPlayerData() {
    db.collection("leader").onSnapshot((queryOnsnapShot) => {
      setAllPlayer(
        queryOnsnapShot.docs.map((doc) => ({
          id: doc.id,
          participant: doc.data().participant,
          location: doc.data().location,
          units: doc.data().units,
          type: doc.data().type,
          points: doc.data().points,
        }))
      );
    });
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleChange = (e) => {
    console.log(e.target.name);
    setValues((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    db.collection("addnewplayer").add({
      participant: value.participant,
      location: value.location,
      units: value.units,
      type: value.type,
      points: Number(value.points),
    });
    setValues("");
  };

  return (
    <div className={styles.header}>
      <h1>Leaderboard</h1>
      <Button
        variant="outlined"
        onClick={handleClickOpen}
        style={{
          backgroundColor: "rgb(96, 93, 158)",
          color: "white",
          textTransform: "capitalize",
          width: " 150px",
          padding: " 10px",
          borderRadius: "7px",
          cursor: "pointer",
          fontWeight: "bold",
          border: "none",
        }}
      >
        add player
      </Button>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        {/* <div style={{ border: "5px solid rgb(96, 93, 158)" }}> */}
        <DialogTitle
          id="alert-dialog-title"
          style={{
            color: "rgb(96, 93, 158)",
            textTransform: "capitalize",
            marginLeft: "17px",
            fontWeight: "bold",
          }}
        >
          {"Add New Player!"}
        </DialogTitle>
        <form onSubmit={handleSubmit}>
          <DialogContent style={{ height: "300px" }}>
            <DialogContentText
              id="alert-dialog-description"
              style={{ margin: "15px" }}
            >
              <div style={{ width: "540px" }}>
                <TextField
                  fullWidth
                  label="participant's name"
                  placeholder="participant"
                  id="fullWidth"
                  name="participant"
                  value={value.participant}
                  onChange={handleChange}
                  required
                />
                {""}
                <TextField
                  id="outlined-textarea"
                  label="Location"
                  placeholder="Location"
                  multiline
                  style={{ margin: "10px", width: "250px" }}
                  value={value.location}
                  onChange={handleChange}
                  name="location"
                  required
                />
                <TextField
                  id="outlined-textarea"
                  label="Points"
                  placeholder="Points"
                  multiline
                  style={{ margin: "10px", width: "250px" }}
                  value={value.points}
                  name="points"
                  onChange={handleChange}
                  required
                />
                <TextField
                  id="outlined-textarea"
                  label="Units"
                  placeholder="Units"
                  multiline
                  style={{ margin: "10px", width: "250px" }}
                  value={value.units}
                  name="units"
                  required
                  onChange={handleChange}
                />
                <TextField
                  id="outlined-textarea"
                  label="type"
                  required
                  placeholder="type"
                  multiline
                  style={{ margin: "10px", width: "250px" }}
                  value={value.type}
                  name="type"
                  onChange={handleChange}
                />
              </div>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={handleClose}
              type="submit"
              autoFocus
              style={{
                backgroundColor: "rgb(96, 93, 158)",
                color: "white",
                textTransform: "capitalize",
                width: " 150px",
                padding: " 10px",
                borderRadius: "7px",
                cursor: "pointer",
                fontWeight: "bold",
                border: "none",
                margin: "0 auto",
              }}
            >
              Submit
            </Button>
          </DialogActions>
        </form>
        {/* </div> */}
      </Dialog>
    </div>
  );
}
