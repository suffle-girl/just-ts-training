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

// You were camping with your friends far away from home, but when it's time to go back, you realize that your fuel is running out and the nearest pump is 50 miles away! You know that on average, your car runs on about 25 miles per gallon. There are 2 gallons left.
export const zeroFuelIf = (
  distance: number,
  mpg: number,
  fuelLeft: number
): boolean => {
  if (distance <= mpg * fuelLeft) {
    return true;
  }
  return false;
};

export const zeroFuel = (
  distance: number,
  mpg: number,
  fuelLeft: number
): boolean => {
  return distance <= mpg * fuelLeft;
};
