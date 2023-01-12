function Table({data, config, keyFn}) {

    const renderedHeaders = config.map((column) => {
        return <th key={column.label}>{column.label}</th>
    });

    const renderedRows = data.map((rowData) => {

        const renderedCells = config.map((column) => {
            return <td key={column.label} className="p-3 border">{column.render(rowData)}</td>
        });

        return (
            <tr key={keyFn(rowData)}>
                {renderedCells}
            </tr>
        );
    });

    return (
        <table className="table-auto shadow-xl">
            <thead>
                <tr className="shadow-lg">
                    {renderedHeaders}
                </tr>
            </thead>
            <tbody>
                {renderedRows}
            </tbody>
        </table>
    );
}

export default Table;