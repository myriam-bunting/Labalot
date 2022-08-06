import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "id", headerName: "ID", width: 80 },
  { field: "tag", headerName: "Tag", width: 80 },
  { field: "gender", headerName: "Gender", width: 80 },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 80,
  },
  { field: "genotype", headerName: "Genotype", width: 100 },
  { field: "phenotype", headerName: "Phenotype", width: 100 },
  { field: "experiment_id", headerName: "experiment_id", width: 80 },
  //   {
  //     field: "selected",
  //     headerName: "",
  //     description: "This column has a value getter and is not sortable.",
  //     sortable: false,
  //     width: 160,
  //     valueGetter: (params) =>
  //       `${params.row.id || ""} ${params.row.genotype || ""}`,
  //   },
];

const rows = [
  {
    id: 6,
    tag: "652",
    gender: "female",
    age: 3,
    genotype: "APNKO",
    phenotype: "mental degradation",
    experiment_id: "54",
  },
  {
    id: 1,
    tag: "345",
    gender: "female",
    age: 8,
    genotype: "APNKO",
    phenotype: "mental degradation",
    experiment_id: "54",
  },
  {
    id: 2,
    tag: "243",
    gender: "male",
    age: 16,
    genotype: "APNKO",
    phenotype: "mental degradation",
    experiment_id: "24",
  },
  {
    id: 3,
    tag: "348",
    gender: "female",
    age: 8,
    genotype: "APNKO/5XFAD",
    phenotype: "none",
    experiment_id: "54",
  },
  {
    id: 4,
    tag: "352",
    gender: "male",
    age: 12,
    genotype: "APNKO/5XFAD",
    phenotype: "none",
    experiment_id: "NULL",
  },
  {
    id: 5,
    tag: "362",
    gender: "male",
    age: 13,
    genotype: "5XFAD",
    phenotype: "none",
    experiment_id: "NULL",
  },
];

export default function DataTable() {
  return (
    <div style={{ height: "90vh", width: "90vw", paddingRight: 8 }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={100}
        rowsPerPageOptions={[100]}
        checkboxSelection
      />
    </div>
  );
}
