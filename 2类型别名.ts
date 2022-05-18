// 接口
interface IObj {
    id:string;
    name: string;
}

// 类型别名
type Customer = (IObj | number)[];

let p:Customer = [];
p.push({ id: "1", name:'2222' }, 1)