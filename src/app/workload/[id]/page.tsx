interface IParams {
  id?: string;
}

export default function Page({ params }: { params: IParams }) {
  return (
    <div>
      <h1>My Page</h1>
      <p>ID: {params.id}</p>
    </div>
  );
}
