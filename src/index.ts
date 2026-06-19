//1. Reverse of a string.....
function reverseWord(str:string){


    let res = ""
    for(let i=str.length-1;i>=0;i-- ){
        res+=str[i];
    }

    return res;

}

//2. Highest of Array.....
function highestNumberInArray(arr:number[]):number{


    let high=0;
    for(let i=0;i<=arr.length-1;i++){
        if(arr[i]>high){
            high = arr[i]
        }
    }
    return high;
}

console.log(reverseWord("array"));
console.log(highestNumberInArray([1,2,6,5,3]))