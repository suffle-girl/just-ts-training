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
