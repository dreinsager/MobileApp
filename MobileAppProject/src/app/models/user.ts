export interface User {

    email:string;
    password:string;
}

export interface Character {
    charName:string;
    gender:string;
    class:string;
    race:string;
    $key?:string
}

export interface Notes {
    title: string;
    describe: string;
    $key?:string;
}