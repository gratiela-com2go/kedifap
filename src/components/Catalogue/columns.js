import { format } from "date-fns";

export const COLUMNS = [
    {
        Header: 'Κωδικός',
        accessor: 'code'
    },
    {
        Header: "Περιγραφή",
        accessor: 'description'
    },
    {
        Header: "Απόθεμα",
        accessor: 'availableQuantity'
    },
    {
        Header: "Ημ.Λήξης",
        accessor: 'expiryDate',
        Cell: ({value}) => { return format(new Date(value), 'dd/MM/yyyy')}
    },
    {
        Header: "ΧΤ",
        accessor: 'wholeSalePrice'
    },
    {
        Header: "ΛΤ",
        accessor: 'retailPrice'
    },
];