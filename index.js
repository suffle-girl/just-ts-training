export var numberToString = function (num) {
    return String(num);
};
console.log("numberToString: ", numberToString(6), "type: ", typeof numberToString(6));
export var setAlarm = function (employed, vacation) {
    if (employed === true && vacation === false)
        return true;
    return false;
};
export var setAlarmLean = function (employed, vacation) {
    return employed && !vacation;
};
// Given a non-empty array of integers, return the result of multiplying the values together in order.
export var growLoop = function (arr) {
    var solution = 1;
    for (var i = 0; i < arr.length; i++) {
        solution *= arr[i];
    }
    return solution;
};
export var grow = function (arr) {
    return arr.reduce(function (acc, curr) { return acc * curr; }, 1);
};
// You were camping with your friends far away from home, but when it's time to go back, you realize that your fuel is running out and the nearest pump is 50 miles away! You know that on average, your car runs on about 25 miles per gallon. There are 2 gallons left.
export var zeroFuelIf = function (distance, mpg, fuelLeft) {
    if (distance <= mpg * fuelLeft) {
        return true;
    }
    return false;
};
export var zeroFuel = function (distance, mpg, fuelLeft) {
    return distance <= mpg * fuelLeft;
};
export var reverseString = function (str) {
    return str.split("").reverse().join("");
};
console.log("reverseString: ", reverseString("world"));
console.log("reverseString: ", reverseString("is on fire!"));
export var showTimeInMilliseconds = function (h, m, s) {
    return Number(h * 3.6e6 + m * 60000 + s * 1000);
};
export var showTimeInMilliseconds2 = function (h, m, s) {
    var seconds = function (s) { return s * 1000; };
    var minutes = function (m) { return m * 60 * 1000; };
    var hours = function (h) { return h * 60 * 60 * 1000; };
    return hours(h) + minutes(m) + seconds(s);
};
export var makeUpperCase = function (str) {
    return str.toUpperCase();
};
