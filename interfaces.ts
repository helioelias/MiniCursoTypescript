interface Game {
    id: string | number;
    title: string;
    description: string;
    readonly genre: string;
    plataform?: string[];
    getSimilars?: (title: string) => void;
}

const tlou: Game = {
    id: 1,
    title: 'The Last of Us',
    description: 'The best game in the world',
    genre: 'Action',
    plataform: ['PS3', 'PS4'],
    getSimilars:(title: string) => {
        console.log(`Similar games to ${title}: Uncharted, A Plague Tale, Metro`);
    }
}

console.log(tlou);
if(tlou.getSimilars){
    console.log(tlou.getSimilars('Dark Souls'));
}

interface DLC extends Game {
    originalGame: Game;
    newContent: string[];
}

const leftbehind: DLC = {
    id: 2,
    title: 'The Last of US - Left Behind',
    description: 'You play as Ellie before the original game',
    genre: 'Action',
    plataform: ['PS4'],
    originalGame: tlou,
    newContent: ['3 hours story', 'new characters']
}

console.log(leftbehind);

class CreateGame implements Game {
  id : number | string;
  title: string;
  description: string;
  genre: string;
  
  constructor(id:number, t: string, d:string, g:string){
      this.id = id;
      this.title = t;
      this.description = d;
      this.genre = g;
  }
}

let cg = new CreateGame(2, "Red Dead", "This a action game", "Action");

console.log(cg);