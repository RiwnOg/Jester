interface pageProps {
  id: string;
}

const page: React.FC<pageProps> = ({ id }) => {
  return <div>Im {id}</div>;
};

export default page;
