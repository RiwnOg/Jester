import toastData from './ToastData.json';
import { GiJesterHat } from 'react-icons/gi';

interface ToastGenProps {
  origin?: 'login' | 'register';
  type?: 'success' | 'error' | 'loading';
  messege?: string;
}

const ToastGen: React.FC<ToastGenProps> = ({
  type = 'generic',
  origin = 'generic',
  messege,
}) => {
  const jsonData: { [key: string]: any } = toastData;
  const {
    title = 'Toast not Found.',
    quotes = ['Have a 🍺 instead!'],
  }: { title: string; quotes: string[] } = jsonData[origin]?.[type] || {};

  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

  return (
    <div>
      <p className='font-bold'>{title}</p>
      <div className='flex flex-row gap-3 opacity-70'>
        <GiJesterHat /> {randomQuote}
      </div>
      <p className='font-thin'>{messege}</p>{' '}
    </div>
  );
};

export default ToastGen;
