export default function NavLoading() {
  return (
    <div className='fixed z-10 h-[66px] w-full bg-white shadow-sm dark:bg-stone-950'>
      <div className='mx-auto max-w-[2520px] px-5 py-4 sm:px-2 md:px-10 xl:px-20'>
        <div className='flex animate-pulse flex-row items-center justify-between space-x-4'>
          <div className='h-10 w-10 rounded-full bg-slate-300 dark:bg-slate-700' />
          <div className='flex flex-row items-center justify-between gap-3'>
            <div className='hidden h-7 w-24 rounded bg-slate-300 dark:bg-slate-700 md:block' />
            <div className='h-10 w-10 rounded-full bg-slate-300 dark:bg-slate-700' />
          </div>
        </div>
      </div>
    </div>
  );
}
