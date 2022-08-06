import React from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Typography } from "@mui/material";
import Modal from "@mui/material";
import Button from "@mui/material";
import Box from "@mui/material";

export default function Newcage(props) {
  //   const handleSubmit = (event) => {
  //     event.preventDefault();
  //     const data = new FormData(event.currentTarget);
  //     console.log({
  //       email: data.get("email"),
  //       password: data.get("password"),
  //     });
  //   };

  return (
    <div>
      <Modal
        open={props.open}
        onClose={props.onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
          <Button onClick={props.toggleCageModal}>Close</Button>
        </Box>
      </Modal>
    </div>
  );
}
