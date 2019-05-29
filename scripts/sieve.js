const sieve = arg => {
  const arr = [];
  for (let i = 2; i <= arg; i++) arr.push(i);
  const sqr = Math.sqrt(arg);
  const newArr = [];
  for (let i = 2; i <= sqr; i++) newArr.push(i);
  arr.forEach((el, index) => {
    newArr.forEach(num => {
      if (el !== num && !(el % num)) arr[index] = 0;
    });
  });
  newArr.length = 0;
  arr.forEach(el => {
    if (el !== 0) newArr.push(el);
  });
  return `Prime numbers from the given range are the following: ${newArr}`;
};
const arg = process.argv.slice(2);
if (Number(arg[0]) + 0 != arg[0] || Number(arg[0]) < 2)
  console.log("Please, insert an integer higher than one as an argument");
else console.log(sieve(arg[0]));
