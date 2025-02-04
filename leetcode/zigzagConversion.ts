function convert(s: string, numRows: number): string {
    const arr: [string[]] = [[]];
    let direction = 'zig';
    let i = 0;
    let columnIndex = 0;
    let lineIndex;

    for (let x = 0; x < s.length; x++) {
        if (i === 0) {
            arr[columnIndex] = [];
            for (let y = 0; y < numRows; y++) {
                arr[columnIndex].push('_');
            }
        }

        switch (direction) {
            case 'zig':
                lineIndex = i;
                arr[columnIndex][lineIndex] = s[x];
                i++;
                if (i >= numRows) {
                    i = 0;
                    columnIndex++;
                    if (numRows <= 2) break; // no need to zag in this case
                    direction = 'zag';
                }
                break;

            case 'zag':
                lineIndex = (numRows - 2) - i; // adding in arr from end to begining
                arr[columnIndex][lineIndex] = s[x];
                i++;
                if (lineIndex === 1) {
                    i = 0;
                    columnIndex++;
                    direction = 'zig';
                }
                break;
        }
    }


    let convertedStr = '';
    for (let y = 0; y < numRows; y++) {
        for (let x = 0; x < arr.length; x++) {
            if (arr[x][y] !== '_')
                convertedStr += arr[x][y];
        }
    }
    return convertedStr;
};

console.log(convert('PAYPALISHIRING', 3));
console.log(convert('PAYPALISHIRING', 4));
console.log(convert('12', 1));
console.log(convert('123456789', 5));
console.log(convert('ABCD', 2));
console.log(convert('PAYPALISHIRING', 5));

/*
P   A   H   N
A P L S I I G
Y   I   R

P     I    N
A   L S  I G
Y A   H R
P     I

P       H
A     S I
Y   I   R
P L     I G
A       N
*/




function convert2(s: string, numRows: number): string {
    if (numRows === 1) return s;

    const rows = new Array(numRows).fill('');

    let currRow = -1;
    let ascending = true;

    for (let i = 0; i < s.length; i++) {
        currRow += ascending ? 1 : -1;
        rows[currRow] += s[i];

        if (currRow === numRows - 1) {
            ascending = false;
        } else if (currRow === 0) {
            ascending = true;
        }
    }

    return rows.join('');
};
