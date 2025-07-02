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
