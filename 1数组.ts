// 接口
interface IObj {
    id:string;
    name: string;
}

// 以下是联合类型的数组
let list:(IObj | number)[] = []
list.push({ id: "1", name:'2222' }, 1)
