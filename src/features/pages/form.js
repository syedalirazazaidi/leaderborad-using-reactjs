import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import { updateDoc, doc } from "firebase/firestore";

import DeleteIcon from "@material-ui/icons/Delete";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import ReactPaginate from "react-paginate";

import { db, increment } from "../../fire_base.config";
import Pagagination from "./pagination";
import Paginate from "./utils/paginate";
function Form() {
  const [allplayer, setAllPlayer] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const [pageSize, setPageSize] = useState(4);
  const [currentPage, setCurrenPage] = useState(1);

  React.useEffect(() => {
    getPlayerData();
  }, []);
  function getPlayerData() {
    db.collection("addnewplayer").onSnapshot((queryOnsnapShot) => {
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
  const player = Paginate(allplayer, currentPage, pageSize);

  const onIncrement = async (id, points) => {
    const userDoc = doc(db, "addnewplayer", id);
    const newFields = { points: points + 1 };
    await updateDoc(userDoc, newFields);
  };
  const onDecrement = async (id, points) => {
    const userDoc = doc(db, "addnewplayer", id);
    const newFields = { points: points - 1 };
    await updateDoc(userDoc, newFields);
  };
  function deletePlayer(id) {
    db.collection("addnewplayer").doc(id).delete();
  }

  const handlePageChange = (page) => {
    setCurrenPage(page);
  };

  return (
    <>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow style={{ backgroundColor: "#F7F7F7" }}>
            <TableCell style={{ fontWeight: "bold" }}>
              Participant Name
            </TableCell>
            <TableCell style={{ fontWeight: "bold" }}>Location</TableCell>
            <TableCell style={{ fontWeight: "bold" }}>Unit</TableCell>
            <TableCell style={{ fontWeight: "bold" }}>Type</TableCell>
            <TableCell style={{ fontWeight: "bold" }}>Points</TableCell>
            <TableCell style={{ fontWeight: "bold" }}>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {player.length !== 0 ? (
            player.map((player) => (
              <TableRow key={player.id}>
                <TableCell style={{ textTransform: "capitalize" }}>
                  {player.participant}
                </TableCell>
                <TableCell>{player.location}</TableCell>
                <TableCell>{player.units}</TableCell>
                <TableCell>{player.type}</TableCell>
                <TableCell>
                  <ToggleButtonGroup
                    color="primary"
                    exclusive
                    style={{ width: "20px" }}
                  >
                    <ToggleButton
                      value="minus"
                      onClick={() => onDecrement(player.id, player.points)}
                    >
                      -
                    </ToggleButton>
                    <ToggleButton value="val">{player.points}</ToggleButton>
                    <ToggleButton
                      value="plus"
                      onClick={() => onIncrement(player.id, player.points)}
                    >
                      +
                    </ToggleButton>
                  </ToggleButtonGroup>
                </TableCell>
                <TableCell>
                  <DeleteIcon
                    style={{ color: "red", marginLeft: "15px" }}
                    onClick={() => deletePlayer(player.id)}
                  />
                </TableCell>
              </TableRow>
            ))
          ) : (
            <p>no data in the board ...</p>
          )}
        </TableBody>
      </Table>
      {player.length !== 0 ? (
        <Pagagination
          playercount={player.length}
          pageSize={pageSize}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      ) : null}
    </>
  );
}

export default Form;
