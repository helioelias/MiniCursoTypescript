//AccountInfo
//CharInfo
//PlayerInfo

type AccountInfo = {
    id: number,
    name: string,
    email?: string
};

const account: AccountInfo = {
    id: 123,
    name: 'Helio'
};

console.log(account);

type CharInfo = {
    nickname: string,
    level: number
};

const charInfo: CharInfo = {
    nickname: 'Teste',
    level: 0
};

console.log(charInfo);

//intersection
type PlayerInfo = AccountInfo & CharInfo;

const player: PlayerInfo = {
    id: 123,
    name: 'Helio',
    nickname: 'Teste',
    level: 100
};