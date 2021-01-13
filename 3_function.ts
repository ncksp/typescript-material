function getName(): string {
  return "Hello, this function is returning a string";
}

function getAge(): number {
  return 20;
}

function doWalk(times: number = 0): void {
  for (let index = 0; index < times; index++) {
    console.log("Walking");
  }
}

type Additional = (val1: number, val2: number) => number

const add : Additional = (val1 : number, val2: number): number => {
    return val1 + val2
}


//optional params
const parseToInt = (num : any) :number => parseInt(num) || 0;

const addWithOptional = (val1 : number, val2?: number): number => {
    return parseToInt(val1) + parseToInt(val2)
}

console.log(addWithOptional(1));
