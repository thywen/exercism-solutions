export const isLeap = (year) => {
    return (year & 3) === 0 && ((year % 25) !== 0 || (year & 15) === 0);
};