class RunLengthEncoding {
    static encode(stringToEncode: string): string {
        return stringToEncode.replace(/(.)\1*/g, (matches, letter) => {
            const length = matches.length;
            const lengthString = (length === 1) ? "" : length
            if (letter === " ") {
                return matches
            }
            return `${lengthString}${letter}`
        })
    }

    static decode(stringToDecode: string): string {
        return stringToDecode.replace(/(\d+)(\w)/g, (
            _,
            numberOfRepetitions,
            character
        ) => new Array(parseInt(numberOfRepetitions, 10) + 1).join(character));
    }
}

export default RunLengthEncoding
