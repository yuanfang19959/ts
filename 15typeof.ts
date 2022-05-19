let persons: { name: number, x: string } = {
    x: '123',
    name: 123
}


function kl(p: typeof persons) { }
kl({
    x: '123',
    name: 12321
})

let num:typeof persons.x = '123'
