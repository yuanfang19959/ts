type obj = {
    name: string;
    age: number;
    say(): void;
    greet(): void;
}

let person: obj = {
    name: '',
    age: 0,
    say() { },
    greet() {
        console.log(this.name)
    }
}

person.name = 'zzb'
person.greet()