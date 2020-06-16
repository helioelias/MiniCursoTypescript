function logDetails(uid: number | string, item: string){
    console.log(`A product with ${uid} has a title as ${item}`);
}

logDetails(123, "sapato");
logDetails("123", "sapato");

type Uid = number | string;

function logUser(uid: Uid, item: string){
    console.log(`An a user with ${uid} has a name as ${item}`);
}

logUser(123, "Helio Elias");
logUser("123", "Helio");


type Plataform = 'Windows' | 'Linux' | 'Mac Os' | 'ios';

function renderPlataform(plataform:Plataform){
    return plataform;
}

renderPlataform('ios');