// 1. 单独指定参数 和 返回值的类型
function add(one: number, two: number): number {
    return one + two
}

const adds = (one: number, two: number): number => {
    return one + two
}

// 2. 同事指定参数和返回值类型
const addss: (num1: number, num2: number) => number = (num1, num2) => {
    return num1 + num2
}