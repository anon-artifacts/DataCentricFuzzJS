let a = new Set();
let b = new Set();

b.keys = () => {
    a.clear();
    return b[Symbol.iterator]();
}

a.symmetricDifference(b);