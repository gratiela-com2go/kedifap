import { useTable, useSortBy } from "react-table";
import DATA from './data.json';
import { COLUMNS } from './columns';
import { useMemo } from "react";
import { GoArrowSmallDown, GoArrowSmallUp } from 'react-icons/go';

export const DataTable = () => {
    const columns = useMemo(() => COLUMNS, []);
    const data = useMemo(() => DATA, []);

    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({
        columns,
        data
    },
    useSortBy);

    return (
        <table {...getTableProps()} className="table-auto w-full shadow-xl">
            <thead>
                {headerGroups.map((headerGroup) => (
                     <tr {...headerGroup.getHeaderGroupProps()} className="shadow-lg">
                        {headerGroup.headers.map((column) => (
                            <th {...column.getHeaderProps(column.getSortByToggleProps())} className="cursor-pointer hover:bg-grey-100">
                                <div className="flex items-center justify-between px-2">
                                    {column.render('Header')}
                                    {column.isSorted ? (column.isSortedDesc ?  <GoArrowSmallDown /> : <GoArrowSmallUp /> ) :  <div>
                <GoArrowSmallUp /><GoArrowSmallDown /></div>}
                                </div>    
                            </th>
                        ))}
                    </tr>
                ))}
            </thead>
            <tbody {...getTableBodyProps()}>
                {rows.map((row) => {
                    prepareRow(row);
                    return (
                        <tr {...row.getRowProps()}>
                            {row.cells.map((cell) => {
                                return <td {...cell.getCellProps()} className="p-3 border">{cell.render('Cell')}</td>
                            })}    
                        </tr>
                    )
                })}

            </tbody>
        </table>
    );
}