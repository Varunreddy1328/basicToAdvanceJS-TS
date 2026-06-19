//1. Reverse of a string.....
function reverseWord(str) {
    var res = "";
    for (var i = str.length - 1; i >= 0; i--) {
        res += str[i];
    }
    return res;
}
function highestNumberInArray(arr) {
    var high = 0;
    for (var i = 0; i <= arr.length - 1; i++) {
        if (arr[i] > high) {
            high = arr[i];
        }
    }
    return high;
}
console.log(reverseWord("array"));
console.log(highestNumberInArray([1, 2, 6, 5, 3]));
