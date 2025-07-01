export var numberToString = function (num) {
    return String(num);
};
console.log("numberToString: ", numberToString(6), "type: ", typeof numberToString(6));
export var setAlarm = function (employed, vacation) {
    if (employed === true && vacation === false)
        return true;
    return false;
};
