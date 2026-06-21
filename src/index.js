//1. Reverse of a string.....
function reverseWord(str) {
    var res = "";
    for (var i = str.length - 1; i >= 0; i--) {
        res += str[i];
    }
    return res;
}
//2. Highest of Array.....
function highestNumberInArray(arr) {
    var high = 0;
    for (var i = 0; i <= arr.length - 1; i++) {
        if (arr[i] > high) {
            high = arr[i];
        }
    }
    return high;
}
// console.log(reverseWord("array"));
// console.log(highestNumberInArray([1,2,6,5,3]))
console.log(secondHighArray([1, 2, 6, 5, 3]));
//3. second highest of Array...
function secondHighArray(arr) {
    var sec_high = -Infinity, high = -Infinity;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > high) {
            sec_high = high;
            high = arr[i];
        }
        else if (arr[i] > sec_high && sec_high !== high) {
            sec_high = arr[i];
        }
    }
    return sec_high;
}
