// 这种数字枚举他会自增
enum Direction {
    Up = 2,
    Down,
    Left,
    Right
}

enum St {
    Ab = "ab",
    Bd = "bd"
}

function changeWay(direction: Direction) {}

changeWay(Direction.Up)