import getUser from '@/actions/getUser';

export default async function Home() {
  const currentUser = await getUser();
  return (
    <main>
      <h1 className='text-2xl underline'>Welcome To Jester! 👋</h1>
      {currentUser && <p>Hello, {currentUser.name}</p>}
    </main>
  );
}
