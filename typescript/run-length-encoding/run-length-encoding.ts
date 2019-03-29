class RunLengthEncoding {
    static encode(stringToEncode: string): string {
        return stringToEncode.replace(/(.)\1*/g, (matches, letter) => {
            const length = matches.length;
            const lengthString = (length === 1) ? "" : length
            return `${lengthString}${letter}`
        })
    }

    static decode(stringToDecode: string): string {
        return stringToDecode.replace(/(\d+)([a-zA-Z ])/g, (
            _,
            numberOfRepetitions,
            character
        ) => new Array(parseInt(numberOfRepetitions, 10) + 1).join(character));
    }
}

export default RunLengthEncoding
