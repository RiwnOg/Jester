import data from './ToastData.json';
import { GiJesterHat } from 'react-icons/gi';

interface jsonData {
  [key: string]: any; // allow any property name and value type
}

interface ToastGenProps {
  type?: string;
  origin?: string;
}

const ToastGen: React.FC<ToastGenProps> = ({ type, origin }) => {
  const title = 'title';
  const quotes = 'quotes';

  if (!origin) origin = 'generic';
  if (!type) {
    origin = 'generic';
    type = 'generic';
  }

  const jsonData: jsonData = data;
  const dataTitle = jsonData[origin][type][title];
  const dataQuotes = jsonData[origin][type][quotes];

  let randomNum = Math.floor(Math.random() * dataQuotes.length);
  let randomQuote = dataQuotes[randomNum];

  return (
    <div>
      <p className='font-bold'>{dataTitle}</p>
      <div className='flex flex-row gap-3 opacity-70'>
        <GiJesterHat /> {randomQuote}
      </div>
    </div>
  );
};

export default ToastGen;
