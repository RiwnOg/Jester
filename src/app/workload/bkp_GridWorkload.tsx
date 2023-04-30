'use client';

import { createTheme, ThemeProvider } from '@mui/material';
import {
  DataGrid,
  GridColDef,
  GridColumnHeaderParams,
  GridToolbar,
} from '@mui/x-data-grid';
import { Workload } from '@prisma/client';
import { useTheme } from 'next-themes';
import { FC } from 'react';
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai';
import { useRouter } from 'next/navigation';

type ModifiedRequestType<K extends keyof Workload> = Omit<Workload, K> & {
  dt_inicio: string;
  dt_final: string;
};

interface TableProps {
  userRequests: ModifiedRequestType<'dt_inicio' | 'dt_final'>[];
}

const columnsDraft: GridColDef[] = [
  { field: 'col1', flex: 1, headerName: 'Sistema', minWidth: 120 },
  { field: 'col2', flex: 1, headerName: 'Solicitante', minWidth: 120 },
  { field: 'col3', flex: 1, headerName: 'Demanda', minWidth: 120 },
  { field: 'col4', flex: 1, headerName: 'Data Inicio', minWidth: 120 },
  { field: 'col5', flex: 1, headerName: 'Data Final', minWidth: 120 },
  {
    field: 'col6',
    headerName: 'Ações',
    sortable: false,
    filterable: false,
    disableColumnMenu: true,
    width: 150,
    renderCell: (params) => (
      <div className='flex flex-row gap-3'>
        <button onClick={() => useRouter().push(`/workload/${params.id}`)}>
          <AiOutlineEdit size={25} />
        </button>
        <button onClick={() => console.log('deleting: ', params.id)}>
          <AiOutlineDelete size={25} />
        </button>
      </div>
    ),
  },
];

const columns = columnsDraft.map((col) => {
  return {
    ...col,
    renderHeader(params: GridColumnHeaderParams<any, any, any>) {
      return (
        <strong className='font-semibold'>{params.colDef.headerName}</strong>
      );
    },
  };
});

const Table: FC<TableProps> = ({ userRequests }) => {
  const { theme: applicationTheme } = useTheme();

  const darkTheme = createTheme({
    palette: {
      mode: applicationTheme === 'light' ? 'light' : 'dark',
    },
  });

  const rows = userRequests.map((request) => ({
    id: request.id,
    col1: request.sistema,
    col2: request.solicitante,
    col3: request.demanda,
    col4: request.dt_inicio,
    col5: request.dt_final,
  }));
  return (
    <ThemeProvider theme={darkTheme}>
      <div style={{ height: 250, width: '100%' }}>
        <DataGrid
          slots={{
            toolbar: GridToolbar,
          }}
          style={{
            backgroundColor: applicationTheme === 'light' ? 'white' : '#152238',
            fontSize: '1rem',
          }}
          pageSizeOptions={[5]}
          disableRowSelectionOnClick
          autoHeight
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          columns={columns}
          rows={rows}
        />
      </div>
    </ThemeProvider>
  );
};

export default Table;
