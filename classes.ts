abstract class UserAccount {
    public name: string;
    protected age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    logDetails(): void {
        console.log(`The player ${this.name} is ${this.age} years old.`)
    }
}

// const helio = new UserAccount("Helio", 42);
// console.log(helio);
// console.log(helio.logDetails());


class CharAccount extends UserAccount {
    private nickname: string;
    private level: number;

    constructor(name: string, age: number, nickname: string, level: number) {
        super(name, age);
        this.nickname = nickname;
        this.level = level;
    }

    get getLevel() {
        console.log('------GET------')
        return this.level;
    }

    set setLevel(level: number) {
        this.level = level;
    }

    logCharDetails(): void {
        console.log(`The player ${this.name} is ${this.age} and has the char ${this.nickname} at level ${this.level}`);
    }
}

const john = new CharAccount("John", 45, "johnmaster", 80);
console.log(john);
console.log(john.logDetails());
console.log(john.logCharDetails());

john.setLevel = 499;

console.log(john.getLevel);