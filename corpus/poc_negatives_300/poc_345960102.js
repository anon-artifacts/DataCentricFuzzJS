y = BigInt("0xffffffffffffffff") // #6
function b() {
    let x = BigInt.asIntN(64, -1n);
    console.log("x: ", x);
    console.log("y: ", y);
    let lol = x >> (y);
    return BigInt.asIntN(64, lol); // #7
}

console.log("lol: ", b());
console.log("lol: ", b());
% OptimizeFunctionOnNextCall(b)
console.log("lol: ", b());
