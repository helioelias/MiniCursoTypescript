"use strict";
function logDetails(uid, item) {
    console.log("A product with " + uid + " has a title as " + item);
}
logDetails(123, "sapato");
logDetails("123", "sapato");
function logUser(uid, item) {
    console.log("An a user with " + uid + " has a name as " + item);
}
logUser(123, "Helio Elias");
logUser("123", "Helio");
function renderPlataform(plataform) {
    return plataform;
}
renderPlataform('ios');
