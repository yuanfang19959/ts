interface Caonima {
    kapa():void
}

// 通过implements让class实现接口，意味着person类中必须提供接口种指定的所有方法和属性
class Person implements Caonima {
    kss:number;
    static kkk:number = 123
    constructor(assss:number) {
        this.kss = assss
    }
    
    kapa() {}  
}