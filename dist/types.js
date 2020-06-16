"use strict";
//boolean (ture/false)
var isOpen;
isOpen = true;
//string ('foo', "foo", `foo`)
var message;
message = 'foo';
//number (int, float, hex, binary)
var total;
total = 20;
//array (type[])
var items;
items = [1, 2, 3];
var totals;
totals = [1, 2, 3];
//tuple
var title;
title = [1, 'foo', "bar"];
//enum
var Colors;
(function (Colors) {
    Colors["white"] = "#fff";
    Colors["black"] = "#000";
})(Colors || (Colors = {}));
//any (qualquer coisa)
var coisa;
coisa = "foo";
//void
function logger() {
    console.log('');
}
//never
function error() {
    throw new Error("erro");
}
//object
var cart;
cart = {
    key: "fi"
};
//Type Inference
var message1 = "mensagem";
window.addEventListener("click", function (e) {
    console.log(e.target);
});
