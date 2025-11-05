function foo(a1, a2) {
    return a1[a2] + 0.5;
}
foo({}, 1);
Array.prototype.unshift(1.5);
Number.isNaN(foo({}, 1));
Number.isNaN(foo({}, 1));
