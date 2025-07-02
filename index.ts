export const numberToString = (num: number): string => {
  return String(num);
};
console.log(
  "numberToString: ",
  numberToString(6),
  "type: ",
  typeof numberToString(6)
);

export const setAlarm = (employed: boolean, vacation: boolean) => {
  if (employed === true && vacation === false) return true;
  return false;
};

export const setAlarmLean = (employed: boolean, vacation: boolean) => {
  return employed && !vacation;
};

// Given a non-empty array of integers, return the result of multiplying the values together in order.
export const growLoop = (arr: number[]): number => {
  let solution = 1;
  for (let i = 0; i < arr.length; i++) {
    solution *= arr[i];
  }
  return solution;
};

export const grow = (arr: number[]): number => {
  return arr.reduce((acc, curr) => acc * curr, 1);
};
