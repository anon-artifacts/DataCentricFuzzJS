function* prime(a1) {
    let isPrime = Array(a1 + 1);
    for (let i8 = 2; i8 <= a1; i8++) {
        isPrime[i8] = true;
    }
    for (let i15 = 2; i15 <= a1; i15++) {
        if (isPrime[i15]) {
            for (let i22 = i15 + i15; i22 <= a1; i22 += i15) {
                isPrime[i22] = false;
            }
            yield i15;
        }
    }
}
function sieve() {
    let sum = 0;
    for (let i32 = 1; i32 <= 3; i32++) {
        let m = (1 << i32) * 10000;
        let count = 0;
        for (const v46 of prime(m)) {
            count++;
        }
        sum += count;
    }
    return sum;
}
let result = sieve();
let expected = 14302;
if (result != expected) {
    throw (("ERROR: bad result: expected " + expected) + " but got ") + result;
}
