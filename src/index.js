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
//4. smallest of array
function smallestOfArray(arr) {
    var small = +Infinity;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < small) {
            small = arr[i];
        }
    }
    return small;
}
//5.average of an arrray
function avgOfArray(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    return sum / arr.length;
}
///6. Reverse of an array
function reverseOfArray(arr) {
    var reverse = [];
    var a = 0;
    for (var i = arr.length - 1; i >= 0; i--) {
        reverse[a] = arr[i];
        a++;
    }
    return reverse;
}
//7. remove duplicates in array
function removeDuplicates(arr) {
    var result = [];
    for (var i = 0; i < arr.length - 1; i++) {
        // if(!result.includes(arr[i])){
        //     result.push(arr[i]);
        // }
        if (result.indexOf(arr[i]) === -1) {
            result.push(arr[i]);
        }
    }
    return result;
}
console.log(removeDuplicates([111, 333, 111, 333, 4, 1, 55, 4, 1]));
console.log(reverseOfArray([4, 12, 5, 76, 9]));
console.log(smallestOfArray([9, 2, 4, 6,]));
// console.log(reverseWord("array"));
// console.log(highestNumberInArray([1,2,6,5,3]))
// console.log(secondHighArray([1,2,6,5,3]))
function factorialOfNumber(num) {
    var fact = 1;
    while (num >= 1) {
        fact = fact * num;
        num--;
    }
    return fact;
}
console.log(factorialOfNumber(5));
