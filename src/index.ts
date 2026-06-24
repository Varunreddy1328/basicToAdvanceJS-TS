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

//4. smallest of array
function smallestOfArray(arr:number[]){

    let small = +Infinity;
    for(let i=0;i<arr.length;i++){
        if(arr[i]<small){
            small = arr[i]
        }
    }
    return small;

}

//5.average of an arrray
function avgOfArray(arr:number[]){

    let sum = 0;
    for(let i = 0;i<arr.length;i++){
        sum = sum+arr[i]
    }
    return sum/arr.length;
}

///6. Reverse of an array
function reverseOfArray(arr:number[]){
    let reverse = []
    let a=0;
    for(let i=arr.length-1;i>=0;i--){
        reverse[a] = arr[i]
        a++;
    }
    return reverse;
}

//7. remove duplicates in array
function removeDuplicates(arr:number[]):number[]{

    let result :number[] = [];
    for(let i = 0;i<arr.length-1;i++){
        // if(!result.includes(arr[i])){
        //     result.push(arr[i]);
        // }
        if(result.indexOf(arr[i]) === -1){
            result.push(arr[i]);
        }
    }
    return result
}



console.log(removeDuplicates([111,333,111,333,4,1,55,4,1]))
console.log(reverseOfArray([4,12,5,76,9]))
console.log(smallestOfArray([9,2,4,6,]))
// console.log(reverseWord("array"));
// console.log(highestNumberInArray([1,2,6,5,3]))
// console.log(secondHighArray([1,2,6,5,3]))
console.log(factorialOfNumber(5));
console.log(printHighToSmall(5));


function factorialOfNumber(num:number):Number{
    let fact = 1;

    while(num>=1){
        fact = fact * num;
        num--;
    }
    return fact
}

function printHighToSmall(n:number):void{

    if(n===0){
        return;
    }

    console.log(n);
    printHighToSmall(n-1);
    console.log(n);
}






// practice questions 

// extract letters,special char and numbers

function extractSym(str:string){

    let specialChar = ""
    let num = ""
    let letters = ""
    for(let i=0;i<str.length;i++){

        if((str[i]>='a' && str[i]<='z') || str[i]>='A' && str[i]<='Z'){
            letters += str[i];
        }
        else if(str[i]>='0' && str[i]<='9'){
            num += str[i];
        }
        else{
            specialChar += str[i];
        }
    }
    console.log(letters);
    console.log(num);
    console.log(specialChar)
}


extractSym("Varun@123#");

// remove duplicates in string

function duplicatesCheck(str:string):string{

    let result = ""
    for(let i=0;i<str.length;i++){
        if(!result.includes(str[i])){
            result +=str[i]
        }
    }
    return result;
}

console.log(duplicatesCheck("sndsndfsdfjnrwsafn"))


// if there is no includes () method then how to do this 


reverseOfWordAndSentence("I love Coding")

function reverseOfWordAndSentence(str:string){

    let words = []
    let result = []
    let sentence = []
    words = str.split(" ")
     let final = "";

    for(let i=0;i<words.length;i++){
        result[i] = reverseWord(words[i]);
    }

   for(let i=result.length-1;i>=0;i--){
     
      final = final + result[i] + " "

   }
   console.log(final)

    function reverseWord(stri:string){
        let revWord = stri.split("");
        for(let i=0,j=revWord.length-1;i<j;i++,j--){

            let temp = revWord[i];
            revWord[i] = revWord[j];
            revWord[j] = temp

        }
        return revWord.join('');
    }
}