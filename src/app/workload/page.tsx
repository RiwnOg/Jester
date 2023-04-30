import getWorkload from '@/actions/getWorkload';
import Heading from '@/components/Heading';
import Workload from './Workload';

export default async function page() {
  const data = await getWorkload();

  return (
    <div>
      <Heading
        title='Workload'
        center
      />
      <div className='my-10 border'>FILTROS</div>
      <div className='flex flex-col gap-2'>
        <div className='flex flex-row items-center justify-between border'>
          <p>botão de relatorio</p>
          <p>botão de novo</p>
        </div>
        <div className='w-4/5 self-center'>
          <Workload data={data} />
        </div>
      </div>
    </div>
  );
}
