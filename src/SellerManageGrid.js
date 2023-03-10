/* 
This file is 
to customize the ui of the grid and 
to integrate with a communication with backend.  
 */

import * as React from "react";
import FullEditDataGrid from "mui-datagrid-full-edit";
import { useEffect, useState } from "react";
import sellerController from "./seller";
import moment from "moment";

export default function SellerManageGrid() {
  const [rows, setRawRows] = useState([]);
  const [loading, setLoading] = useState(false);

  const setRows = (rows) => {
    return setRawRows([...rows.map((r, i) => ({ ...r, no: i + 1 }))]);
  };
  useEffect(() => {
    setLoading(true);
    sellerController
      .getAll()
      .then((res) => {
        setRows(res.data);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const onSaveRow = (id, updatedRow, rows, oldRow) => {
    sellerController
      .saveRow(updatedRow)
      .then((res) => {
        const dbRow = res.data;
        setRows(rows.map((r) => (r.id === updatedRow.id ? { ...dbRow } : r)));
      })
      .catch((err) => {
        setRows(rows);
      });
  };

  const onDeleteRow = (id, oldRow, rows) => {
    sellerController
      .deleteRow(id)
      .then((res) => {
        const dbRow = res.data;
        setRows(rows.filter((r) => r.id !== dbRow.id));
      })
      .catch((err) => {
        setRows(rows);
      });
  };

  const createRowData = (rows) => {
    const newId = Math.max(...rows.map((r) => (r.id ? r.id : 0) * 1)) + 1;
    const newNo = Math.max(...rows.map((r) => (r.no ? r.no : 0) * 1)) + 1;
    return { id: newId, no: newNo };
  };

  return (
    <FullEditDataGrid
      columns={columns}
      rows={rows}
      onSaveRow={onSaveRow}
      onDeleteRow={onDeleteRow}
      createRowData={createRowData}
      loading={loading}
    />
  );
}

const columns = [
  {
    field: "no",
    headerName: "No",
    width: 50,
    align: "center",
    type: "number",
    editable: false
  },
  {
    field: "id",
    headerName: "Id",
    width: 50,
    hide: true,
    align: "center",
    type: "number",
    editable: true
  },
  {
    field: "login",
    headerName: "Login",
    width: 100,
    headerAlign: "center",
    type: "string",
    align: "center",
    editable: true
  },
  {
    field: "title",
    headerName: "Title",
    width: 150,
    headerAlign: "center",
    type: "string",
    align: "center",
    editable: true
  },
  {
    field: "desc",
    headerName: "Description",
    width: 250,
    headerAlign: "center",
    type: "string",
    editable: true
  },
  {
    field: "dateCreated",
    headerName: "DateCreated",
    width: 150,
    headerAlign: "center",
    type: "date",
    editable: false,
    align: "center",
    renderCell: ({ value }) => moment(value).format("MM/DD/yyyy")
  }
];
