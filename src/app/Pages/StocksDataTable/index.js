import { DataTable, DataTableHeader, DataTableRow, DataTableCell,DataTablePagination } from 'material-bread';
import React, { useEffect, useState } from 'react';

const StocksDataTable = (props) => {

    const [page, setPage] = useState(0);
    const [perPage, setPerPage] = useState(10);

    return (
        <DataTable>
            <DataTableRow>
                <DataTableCell type={'header'} text={'Security Id'} />
                <DataTableCell type={'header'} text={'Security Name'} />
                <DataTableCell type={'header'} text={'Face Value'} />
            </DataTableRow>
            {props.stocks
                .slice(
                    page * perPage,
                    page * perPage + perPage,
                )
                .map(row => (
                    <DataTableRow key={row["Security Id"]} onPress={()=>props.onClick(row)}>
                        <DataTableCell text={String(row["Security Id"])} right />
                        <DataTableCell text={row["Security Name"]} right />
                        <DataTableCell text={String(row["Face Value"])} right />
                    </DataTableRow>
                ))}

            <DataTablePagination
                page={page}
                numberOfPages={props.stocks.length / perPage}
                numberOfRows={props.stocks.length}
                perPage={perPage}
                onChangePage={page => setPage(page)}
                onChangeRowsPerPage={perPage => setPerPage(perPage)}
            />
        </DataTable>
    );
}

export default StocksDataTable;