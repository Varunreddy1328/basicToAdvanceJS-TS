const greet = (name: string): string => `Hello, ${name}!`;
console.log(greet('World'));

// any  ---> dont check type

let value: any = 10;
value = "varun"

console.log(value)

let value1: unknown = 10;
console.log(typeof value1)


// any disables type checking, while unknown requires type checking before using the value

type Status = "success" | "error" | "pending";

function handleStatus(status: Status) {
   switch (status) {
        case "success":
            return "Done";

        case "error":
            return "Failed";

        case "pending":
            return "Pending";

        default:
            var x : never = status;
            return x;
   }
}

handleStatus("pending");

