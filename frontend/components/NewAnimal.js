import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { FormControlLabel, FormGroup } from "@mui/material";
import { Checkbox } from "@mui/material";

export default function Newcage(props) {
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
        <TextField
          disabled
          id="outlined-disabled"
          label="Animal ID"
          // defaultValue={props.animal_id}
          variant="outlined"
        />
        <TextField id="outlined-tag" label="Tag" />
        <TextField id="outlined-gender" label="gender" defaultValue="tbc" />
        <TextField id="outlined-gender" label="genotype" defaultValue="tbc" />
        <TextField
          id="outlined-experiementID"
          label="Experiment ID"
          defaultValue="NULL"
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
      </div>
    </Box>
  );
}
