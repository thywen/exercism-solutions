class Luhn {
    static valid(n: string): boolean {
        const numberToControl = n.replace(/\s/g, "")
        if (numberToControl === "0") { return false }
        const luhn: number = numberToControl
            .split('')
            .reverse()
            .map((num) => parseInt(num, 10))
            .map((num, index) => index % 2 ? num * 2 : num)
            .map((num) => num > 9 ? (num % 10) + 1 : num)
            .reduce((accumulator, num) => accumulator += num)
        return luhn % 10 === 0
    }
}

export default Luhn
