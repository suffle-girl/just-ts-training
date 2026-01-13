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
export var reverseSeq = function (n) {
    var reverseArray = [];
    for (var i = n; i > 0; i--) {
        reverseArray.push(i);
    }
    return reverseArray;
};
// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.
export var isIsogram = function (str) {
    var array = str.toLowerCase().split("");
    var _loop_1 = function (i) {
        var count = 0;
        var letter = str[i];
        array.forEach(function (item) { return (item === letter ? count++ : null); });
        if (count > 1)
            return { value: false };
    };
    for (var i = 0; i <= str.length; i++) {
        var state_1 = _loop_1(i);
        if (typeof state_1 === "object")
            return state_1.value;
    }
    return true;
};
// Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.
// (1, 0) --> 1 (1 + 0 = 1)
// (1, 2) --> 3 (1 + 2 = 3)
// (0, 1) --> 1 (0 + 1 = 1)
// (1, 1) --> 1 (1 since both are same)
// (-1, 0) --> -1 (-1 + 0 = -1)
// (-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)
export var getSum = function (a, b) {
    var newArray = [];
    newArray.push(a);
    console.log("newArray", newArray);
    var nextNumber = a + 1;
    for (var i = 1; i <= b; i++) {
        //const nextNumber = a + i;
        newArray.push(nextNumber);
        nextNumber++;
        //console.log("newArray", newArray);
    }
    console.log(newArray);
    // let sum = 0;
    // if (a < b) {
    //   //(3, 6) => 3 + 4 + 5 + 6 = 18
    //   for (let i = 0; i++; i < b) {
    //     sum++;
    //   }
    // }
    return 1;
};
getSum(-1, 5);
