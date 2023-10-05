import { DataGrid } from "@mui/x-data-grid"

interface Props {
    typeList: {  
        id: string
        typeValue: number
        items: {
            value: boolean
            name: string
        }[] 
    }[]
}

export default function Table({typeList}: Props) {

    console.log(typeList)
    const columns = [
        {field: "id", headerName: "name", width: 200},
        {
            field: "items",
            headerName: "values",
            width: 200,
            renderCell: (paramas: any) => (
                <ul>
                    {(paramas.value as any[]).map(item => ( 
                        <li key={item.name}>{item.name} : {item.value}</li>
                        ))}
                </ul>
            )
        }
    ]

    return(
        <div>
            <DataGrid rows={typeList} columns={columns} />            
        </div>
    )
}