// readonly

class Test {
    readonly age:number = 123
    constructor(age?:number) {
        this.age = age;
    }
}

let t= new Test()

interface lp {
    readonly name:string
}

let ji:lp ={
    name: 'kkk'
}
ji.name = 123