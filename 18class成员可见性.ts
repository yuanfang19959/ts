class Animal {
    // 公有属性
    public move() {
        console.log('nimabi')
    }

    // 受保护的 仅对其声明所在类和子类中（非实例对象）可见；
    protected up() {
        console.log('fuck')
    }

    // 私有的 对实力和子类都不可见
    private down() {}
}

let ppp = new Animal()

class B extends Animal {
    kl() {
        
    }
}

let b = new B();