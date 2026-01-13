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

export const reverseString = (str: string): string => {
  return str.split("").reverse().join("");
};
console.log("reverseString: ", reverseString("world"));
console.log("reverseString: ", reverseString("is on fire!"));

export const showTimeInMilliseconds = (
  h: number,
  m: number,
  s: number
): number => {
  return Number(h * 3.6e6 + m * 60000 + s * 1000);
};

export const showTimeInMilliseconds2 = (
  h: number,
  m: number,
  s: number
): number => {
  const seconds = (s: number) => s * 1000;
  const minutes = (m: number) => m * 60 * 1000;
  const hours = (h: number) => h * 60 * 60 * 1000;

  return hours(h) + minutes(m) + seconds(s);
};

export const makeUpperCase = (str: string): string => {
  return str.toUpperCase();
};

export const reverseSeq = (n: number): number[] => {
  const reverseArray: number[] = [];
  for (let i = n; i > 0; i--) {
    reverseArray.push(i);
  }
  return reverseArray;
};

// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.
export const isIsogram = (str: string): boolean => {
  const array = str.toLowerCase().split("");
  for (let i = 0; i <= str.length; i++) {
    let count = 0;
    const letter = str[i];
    array.forEach((item) => (item === letter ? count++ : null));
    if (count > 1) return false;
  }
  return true;
};

export const DNAtoRNA = (dna: string): string => {
  const dnaArray = dna.split("");
  const rnaArray = dnaArray.map((letter) => (letter === "T" ? "U" : letter));

  return rnaArray.join("");
};
