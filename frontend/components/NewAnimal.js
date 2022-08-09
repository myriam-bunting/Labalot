import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Typography, Button } from "@mui/material";

export default function NewAnimal(props) {
  //formatting date
  const today = new Date();
  const yyyy = today.getFullYear();
  let mm = today.getMonth() + 1;
  let dd = today.getDate();

  if (dd < 10) dd = "0" + dd;
  if (mm < 10) mm = "0" + mm;

  const formattedToday = dd + "/" + mm + "/" + yyyy;
  //Refs
  const tagRef = React.useRef();
  const genderRef = React.useRef();
  const genotypeRef = React.useRef();
  const phenotypeRef = React.useRef();
  const birthDateRef = React.useRef();

  const handleSubmit = async (event) => {
    event.preventDefault();
    //Sending in input data from new animal
    const animalData = {
      tag: tagRef.current.value,
      gender: genderRef.current.value,
      genotype: genotypeRef.current.value,
      phenotype: phenotypeRef.current.value,
      birthDate: birthDateRef.current.value,
      experimentId: experimentIdRef.current.value,
    };
    //checking animal number is not 0
    if (animalNumberRef.current.value < 0) {
      return alert(`Error! Please add animals`);
    }
    console.log("animals are inside");
    //fetch
    const url = "/users/newanimal";
    const res = await fetch(url, {
      method: "PUT",
      body: JSON.stringify(animalData),
      headers: { "content-type": "application/json" },
    });

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
        <TextField
          id="outlined-phenotype"
          label="Phenotype"
          ref={phenotypeRef}
        />

        <TextField id="outlined-experiementID" label="Experiment ID" />
        <TextField id="outlined-search" label="Search field" type="search" />
        <Button onClick={handleSubmit}>ADD ANIMAL</Button>
      </div>
    </Box>
  );
}
