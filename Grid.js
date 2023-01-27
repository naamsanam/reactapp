import React, { useState, useEffect } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';
import axios from 'axios';

const Grid = ({ selectedDataSet }) => {
  const [columnDefs, setColumnDefs] = useState([]);
  const [rowData, setRowData] = useState([]);
  const [gridApi, setGridApi] = useState(null);

  useEffect(() => {
    axios
      .get(https://api.example.com/data/${selectedDataSet})
      .then((res) => {
        setColumnDefs(res.data.columnDefs);
        setRowData(res.data.rowData);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [selectedDataSet]);

  const onGridReady = (params) => {
    setGridApi(params.api);
  };

  return (
    <div
      className="ag-theme-material"
      style={{ height: '400px', width: '100%' }}
    >
      <AgGridReact
        columnDefs={columnDefs}
        rowData={rowData}
        onGridReady={onGridReady}
        pagination={true}
        paginationPageSize={10}
        onGridSizeChanged={() => gridApi.sizeColumnsToFit()}
      />
    </div>
  );
};

export default Grid;