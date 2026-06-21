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

// console.log(reverseWord("array"));
// console.log(highestNumberInArray([1,2,6,5,3]))
console.log(secondHighArray([1,2,6,5,3]))

//3. second highest of Array...
function secondHighArray(arr:number[]):number{

    let sec_high=-Infinity,high=-Infinity;
    for(let i=0;i<arr.length;i++){
        if(arr[i]>high){
            sec_high = high;
            high = arr[i];
        }else if(arr[i]>sec_high && sec_high!==high){
            sec_high = arr[i];
        }

    }

    return sec_high;
    
}