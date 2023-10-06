import { DataTable, DataTableExpandedRows, DataTableRowToggleEvent } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { useState } from 'react';
import React from 'react';
        

interface Props {
    location: {  
        id: string
        items: [{
            value: boolean
            name: string
            type: string
        }] 
    }
    types: [{
        id: string
        value: number
    }]
}
interface Item{
    value: boolean
    name: string
    type: string
}

export default function Table({types, location}: Props) {
    const [expandedRows, setExpandedRows] = useState<DataTableExpandedRows | Item[]>([]);
    const [items, setItems] = useState<Item[]>(location.items);
    let count = (type: string): number => {
        return location.items.reduce((acc, val) => (val.type == type ? acc++ : acc), 0)
    }
    let falseCount = (type: string): number => {
        return location.items.reduce((acc, val) => (val.type == type && val.value == false ? acc++ : acc), 0)
    }
    const headerTemplate = (data:Item) => {
        return (
            <React.Fragment>
                <strong>{data.type}</strong>
            </React.Fragment>
        );
    };
    const footerTemplate = (data:Item) => {
        let c = count(data.type)
        let fc = falseCount(data.type)
        let done = c-fc
        let donePrec = (done/c) * 100.0
        return (
            <React.Fragment>
                <td colSpan={5}>
                    <div className="flex justify-content-end font-bold w-full">Total: {c}  False: {fc}  True: {done}  Done%: {donePrec}</div>
                </td>
            </React.Fragment>
        );
    };
    const flagTemplate = (data:Item) => {
        return (
            <React.Fragment>
                <input type='checkbox' checked={data.value}></input>
            </React.Fragment>
        );
    };
    const onToggle = ((e:DataTableRowToggleEvent) => {
        if (expandedRows.includes(e.data)) {
          setExpandedRows(expandedRows.filter(row => row !== e.data));
        } else {
          setExpandedRows([...expandedRows, e.data]);
        }
      })

    return(
        <DataTable value={items}
        sortField='type'
        rowGroupMode="subheader" groupRowsBy="type"
        expandableRowGroups expandedRows={expandedRows} onRowToggle={(e: DataTableRowToggleEvent) => setExpandedRows(e.data)}
        rowGroupHeaderTemplate={headerTemplate} rowGroupFooterTemplate={footerTemplate}
        size="small"
        emptyMessage="No entry found.">
            <Column header="#" headerStyle={{ width: '3rem' }} body={(data, options) => options.rowIndex + 1}></Column>
            <Column field="name" header="name" filter sortable></Column>
            <Column field="value" header="value" filter sortable body={flagTemplate}></Column>
        </DataTable>
    )
}