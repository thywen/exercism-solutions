export default function (numToCalculate: number): number[] {
    let currentNumber: number = numToCalculate
    const factors: number[] = []

    for (let i: number = 2; i <= currentNumber / i; i++) {
        while (currentNumber % i === 0) {
            factors.push(i)
            currentNumber /= i
        }
    }
    if (currentNumber > 1) {
        factors.push(currentNumber)
    }
    return factors
}
