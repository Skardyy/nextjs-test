import { AgGridReact } from "ag-grid-react"
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";


export default function Table({data}) {

    console.log(data)
    const gridOptions = {
        columnDefs: [
            { field: 'type', cellDataType: 'text', rowGroup: true},
            { field: 'name', cellDataType: 'text'},
            { field: 'value', cellDataType: 'boolean'}
        ],
        rowData: data,
        defaultColDef: {
            flex: 1,
            minWidth: 100,
            sortable: true,
            resizable: true,
        },
        autoGroupColumnDef: {
            headerName: "type",
            field: "type",
            cellRenderer: 'agGroupCellRenderer',
            minWidth: 200,
            cellRendererParams: {
                checkbox: true,
            },
        },
        groupDisplayType: "singleColumn",
        animateRows: true,
    }

    return(
        <div className="w-screen h-96 ag-theme-alpine-dark">
            <AgGridReact
                gridOptions={gridOptions}
                />
        </div>
    )
}