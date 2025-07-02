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
export var growLoop = function (arr) {
    var solution = 1;
    for (var i = 0; i < arr.length; i++) {
        solution *= arr[i];
    }
    return solution;
};
