import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { FormControlLabel, FormGroup, Typography } from "@mui/material";
import { Checkbox, Button } from "@mui/material";

export default function NewCage(props) {
  const [checked, setChecked] = React.useState(false);
  const [submit, setSubmit] = React.useState(false);

  const cageIdRef = React.useRef();
  const nameRef = React.useRef();
  const experimentIdRef = React.useRef();
  const animalNumberRef = React.useRef();

  const tagRef = React.useRef();
  const genderRef = React.useRef();
  const genotypeRef = React.useRef();
  const phenotypeRef = React.useRef();
  const birthDateRef = React.useRef();

  const handleCheck = () => {
    if (!checkbox) {
      //update isBreeding to false is not checked
      isBreeding = false;
    }
    //updtae isBreeeding to true if checked
    isBreeding = true;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    //on Submit, data is passed to the database
    const cageData = {
      cageId: cageIdRef.current.value,
      cageName: nameRef.current.value,
      experimentId: experimentIdRef.current.value,
      animalNumber: animalNumberRef.current.value,
      // isBreeding: { checked },
      // Adding state of breeding cage
    };
    const animalData = {
      tag: tagRef.current.value,
      gender: genderRef.current.value,
      genotype: genotypeRef.current.value,
      phenotype: phenotypeRef.current.value,
      birthDate: birthDateRef.current.value,
      experimentId: experimentIdRef.current.value,
      phenotype: phenotypeRef.current.value,
    };

    if (
      animalNumberRef.current.value === "" ||
      animalNumberRef.current.value <= 0
    ) {
      return alert(`Error! Please ensure "Date" field is filled in`);
    }
    console.log("animals are inside");

    const url = "/users/newcage";
    const res = await fetch(url, {
      method: "PUT",
      body: JSON.stringify(cageData),
      headers: { "content-type": "application/json" },
    });
    console.log("animals sent");
    setSubmit(true);
  };

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
          ref={cageIdRef}
        />
        <TextField
          id="outlined-cageName"
          label="Cage name"
          // defaultValue={props.cage_id}
          ref={nameRef}
        />
        <TextField
          id="outlined-experiementID"
          label="Experiment ID"
          ref={experimentIdRef}
        />
        <TextField
          id="outlined-phenotype"
          label="Phenotype"
          ref={phenotypeRef}
        />

        <TextField
          id="outlined-number"
          label="Number of animals"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          ref={animalNumberRef}
        />
        <TextField id="outlined-search" label="Search field" type="search" />

        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                defaultChecked
                checkbox={checked}
                onChange={handleCheck}
              />
            }
            label="Breeding Cage"
          />
          <Button onClick={handleSubmit}>ADD CAGE</Button>
        </FormGroup>
        <br />
        <br />
      </div>
    </Box>
  );
}
