function plusOne(digits: number[]): number[] {
    let index = digits.length - 1;
    if (digits[index] !== 9) {
        digits[index]++;
        return digits;
    }

    while (digits[index] === 9) {
        digits[index] = 0;
        if (index === 0) digits.unshift(1);
        else if (digits[index - 1] === 9) index--;
        else digits[index - 1]++;
    }
    return digits;
};

// console.log(plusOne([1, 2, 3]));
// console.log(plusOne([1, 2, 9]));
// console.log(plusOne([8, 9, 9, 9]));
console.log(plusOne([9]));
