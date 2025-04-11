function staircase(n: number): void {
    for (let i = 1; i <= n; i++) {
        let str = '';
        for (let y = 1; y <= n; y++) {
            if (y > n - i) str += '#';
            else str += ' ';
        }
        console.log(str);
    }
}

staircase(100);
