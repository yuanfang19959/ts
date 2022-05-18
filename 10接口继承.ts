interface a {
    x: number;
    y: string;
}

interface c extends a {
    xx: string
}

// 相当于
c {
    x: number;
    y: string;
    xx: string;
}