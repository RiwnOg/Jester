interface ToastGenProps {
  type?: string;
}

const ToastGen: React.FC<ToastGenProps> = ({ type }) => {
  let dataQuotes = [{ template: 'Wrong Toast' }];
  if (type === 'success')
    dataQuotes = [
      { template: 'Well done, rockstar!' },
      { template: 'You slayed that, legend!' },
      { template: 'Congrats, superhero!' },
    ];
  if (type === 'error') dataQuotes = [{ template: 'User Guest Logged in' }];

  let randomNum = Math.floor(Math.random() * dataQuotes.length);
  let randomQuote = dataQuotes[randomNum];

  return <>{randomQuote.template}</>;
};

export default ToastGen;
