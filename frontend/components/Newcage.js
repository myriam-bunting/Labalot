import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { FormControlLabel, FormGroup, Typography } from "@mui/material";
import { Checkbox } from "@mui/material";

export default function NewCage(props) {
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
        <Typography>Add a new cage: </Typography>
        <TextField
          disabled
          id="outlined-disabled"
          label="Cage ID"
          // defaultValue={props.cage_id}
          variant="outlined"
        />
        <TextField
          id="outlined-cageName"
          label="Cage name"
          // defaultValue={props.cage_id}
        />
        <TextField
          id="outlined-experiementID"
          label="Experiment ID"
          defaultValue=""
        />

        <TextField
          id="outlined-number"
          label="Number of animals"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField id="outlined-search" label="Search field" type="search" />

        <FormGroup>
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Breeding Cage"
          />
        </FormGroup>
        <br />
        <br />
      </div>
    </Box>
  );
}
