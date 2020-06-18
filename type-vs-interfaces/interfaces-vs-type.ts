interface GameCollection extends Game, DLC {}

//implements
//class CreateGame implements GameCollection {}

//declarar funcao
interface getSimilars {
    (title: string): void;
};

// =================== Diferenças =================== //
interface ID extends Number {};

// não consigo definir Tuplas na iterface
interface Tuple {
    0: number,
    1: number
}

[1, 2, 3, 4, ""] as Tuple;

//Pode ter múltiplas declarações e ele une de mesmo nome

interface Jquery {
    a: string;
}

interface Jquery {
    b: string;
}

const $: Jquery = {
    a: "bla",
    b: "foo"
};

// vantagem: quanto estiver criando libs, prefira Interfaces, poque são mais extensíveis!

// criando objetos/classes (POO)

