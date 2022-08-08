import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Typography } from "@mui/material";

export default function NewAnimal(props) {
  const today = new Date();
  const yyyy = today.getFullYear();
  let mm = today.getMonth() + 1;
  let dd = today.getDate();

  if (dd < 10) dd = "0" + dd;
  if (mm < 10) mm = "0" + mm;

  const formattedToday = dd + "/" + mm + "/" + yyyy;

  //   document.getElementById("DATE").value = formattedToday;

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <Typography>Add new animals: </Typography>
        <TextField
          disabled
          id="outlined-disabled"
          label="Animal ID"
          // defaultValue={props.animal_id}
          variant="outlined"
        />
        <TextField id="outlined-tag" label="Tag" />
        <TextField id="outlined-gender" label="Gender" defaultValue="tbc" />
        <TextField id="outlined-genotype" label="Genotype" defaultValue="tbc" />
        <TextField
          id="outlined-birth-date"
          label="Birth date"
          defaultValue={formattedToday}
        />
        <TextField id="outlined-experiementID" label="Experiment ID" />

        <TextField id="outlined-search" label="Search field" type="search" />
      </div>
    </Box>
  );
}
