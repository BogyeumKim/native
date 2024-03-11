export default function () {}

let msesage: string = 'Hello';
let value : number = 1;

let nullableString : string | null = null;
nullableString = 'hi';

let undefinedOrNumber : undefined | number;
undefinedOrNumber = 10;

let numberOrStringOrNull : number | string | null = nullableString;
numberOrStringOrNull = 1;
numberOrStringOrNull = 'Bye';
numberOrStringOrNull = null;

let isComplted : boolean = true;
isComplted = false;

let anyValue : any = true;
anyValue = undefined;
anyValue = 1;
anyValue = 'hello';


