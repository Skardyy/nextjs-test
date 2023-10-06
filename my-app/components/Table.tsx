import { DataTable, DataTableExpandedRows, DataTableRowToggleEvent } from 'primereact/datatable';
import { Column, ColumnEditorOptions } from 'primereact/column';
import { useState } from 'react';
import React from 'react';
import { InputText } from 'primereact/inputtext';
import { InputSwitch } from 'primereact/inputswitch';
        
        

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
        return location.items.reduce((acc, val) => (val.type == type ? acc + 1 : acc), 0)
    }
    let falseCount = (type: string): number => {
        return location.items.reduce((acc, val) => (val.type == type && val.value == false ? acc + 1 : acc), 0)
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
        let donePrec = (done/c) * 100.0 + "%"
        return (
            <React.Fragment>
                <td colSpan={5}>
                    <div className="flex justify-content-end font-bold w-full">Total: {c}  False: {fc}  True: {done}  Done%: {donePrec}</div>
                </td>
            </React.Fragment>
        );
    };
    const flagTemplate = (data:Item) => {
        return data.value
    };
    const onCellEditComplete = (e: any) => {
        let { rowData, newValue, field, originalEvent: event } = e;

        switch (field) {
            case "value":
                rowData[field] = newValue
                break;
            default:
                if (newValue.trim().length > 0) rowData[field] = newValue;
                else event.preventDefault();
                break;
        }
    };
    const cellEditor = (options: ColumnEditorOptions) => {
        if (options.field === 'value') return flagEditor(options);
        else return nameEditor(options);
    };

    const nameEditor = (options: ColumnEditorOptions) => {
        return <InputText type="text" value={options.value} onChange={(e) => options.editorCallback!(e.target.value)} />;
    };

    const flagEditor = (options: ColumnEditorOptions) => {
        return <InputSwitch checked={options.value} onChange={(e) => {options.editorCallback!(e.value)}}/>;
    };

    
    return(
        <DataTable value={items}
        sortField='type' dataKey='name' editMode="cell" key="type"
        onError={() => {}}
        rowGroupMode="subheader" groupRowsBy="type"
        expandableRowGroups expandedRows={expandedRows} onRowToggle={(e: DataTableRowToggleEvent) => setExpandedRows(e.data)}
        rowGroupHeaderTemplate={headerTemplate} rowGroupFooterTemplate={footerTemplate}
        size="small"
        emptyMessage="No entry found.">
            <Column key="field" header="#" headerStyle={{ width: '3rem' }} body={(data, options) => options.rowIndex + 1}></Column>
            <Column key="name" field="name" header="name" filter sortable onCellEditComplete={onCellEditComplete} editor={(options) => cellEditor(options)}></Column>
            <Column key="value" field="value" header="value" filter sortable body={flagTemplate} onCellEditComplete={onCellEditComplete} editor={(options) => cellEditor(options)}></Column>
        </DataTable>
    )
}