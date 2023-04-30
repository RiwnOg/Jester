'use client';
import { Workload } from '@prisma/client';
import { AiOutlineCheck, AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  createTheme,
  ThemeProvider,
} from '@mui/material';
import { useRouter } from 'next/navigation';
import { useTheme } from 'next-themes';

type ModifiedRequestType<K extends keyof Workload> = Omit<Workload, K> & {
  dt_inicio: string;
  dt_final?: string;
};

interface WorkloadProps {
  data: ModifiedRequestType<'dt_inicio' | 'dt_final'>[];
}

const Workload: React.FC<WorkloadProps> = ({ data }) => {
  const router = useRouter();

  const { theme: applicationTheme } = useTheme();

  const darkTheme = createTheme({
    palette: {
      mode: applicationTheme === 'light' ? 'light' : 'dark',
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <TableContainer className='rounded-lg  border-[1px]  dark:bg-slate-700'>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Ações</TableCell>
              <TableCell>Sistema</TableCell>
              <TableCell>Solicitante</TableCell>
              <TableCell>Demanda</TableCell>
              <TableCell>Data Inicio</TableCell>
              <TableCell>Data Final</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((item) => (
              <TableRow key={item.id}>
                <TableCell>
                  <div className='flex '>
                    <IconButton
                      // onClick={() => router.push(`/workload/${item.id}`)}
                      onClick={() => console.log('Go to: ', item.id)}
                    >
                      <AiOutlineEdit size={25} />
                    </IconButton>
                    <IconButton
                      onClick={() => console.log('Delete: ', item.id)}
                    >
                      <AiOutlineDelete size={25} />
                    </IconButton>
                    <IconButton onClick={() => console.log('Close: ', item.id)}>
                      <AiOutlineCheck size={25} />
                    </IconButton>
                  </div>
                </TableCell>
                <TableCell>{item.sistema}</TableCell>
                <TableCell>{item.solicitante}</TableCell>
                <TableCell>{item.demanda}</TableCell>
                <TableCell>{item.dt_inicio}</TableCell>
                <TableCell>{item.dt_final || '---'}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </ThemeProvider>
  );
};

export default Workload;
