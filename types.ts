//boolean (ture/false)
let isOpen: boolean;
isOpen = true;

//string ('foo', "foo", `foo`)
let message: string;
message = 'foo';

//number (int, float, hex, binary)
let total: number;
total = 20;

//array (type[])
let items: number[];
items = [1,2,3];

let totals: Array<number>;
totals = [1,2,3];

//tuple
let title: [number, string, string];
title = [1, 'foo', "bar"];

//enum
enum Colors {
    white = '#fff',
    black = '#000'
}

//any (qualquer coisa)
let coisa: any;
coisa = "foo";

//void

function logger():void {
    console.log('');
}

//null | undefined
type Bla = string | undefined;

//never
function error(): never {
    throw new Error("erro");
}

//object
let cart: object;
cart = {
    key: "fi"
};

//Type Inference
let message1 = "mensagem";

window.addEventListener("click", (e) => {
   console.log(e.target);
})

