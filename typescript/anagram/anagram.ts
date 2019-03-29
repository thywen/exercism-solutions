class Anagram {
    private masterWord: string[]
    private sortedMasterWord: string[];

    constructor(masterWord: string) {
        this.masterWord = masterWord.toLocaleLowerCase().split('')
        this.sortedMasterWord = this.masterWord.slice(0);
        this.sortedMasterWord.sort()
    }

    public matches(...candidates: string[]): string[] {
        return candidates.filter((candidate: string) => this.isAnagramOf(candidate))
    }

    private isAnagramOf(right: string): boolean {
        if (this.arrayEquals(this.masterWord, right.toLocaleLowerCase().split(''))) {
            return false
        }
        const word = right.toLocaleLowerCase().split('').sort()
        return this.arrayEquals(word, this.sortedMasterWord)
    }

    private arrayEquals(left: string[], right: string[]): boolean {
        if (left.length !== right.length) {
            return false
        }
        return left.every((element, index) => {
            return element === right[index]
        })
    }
}

export default Anagram
