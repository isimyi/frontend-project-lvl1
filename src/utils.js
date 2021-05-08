const getRandomNumber = () => {
  const min = 0;
  const max = 10000;

  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export default getRandomNumber;
