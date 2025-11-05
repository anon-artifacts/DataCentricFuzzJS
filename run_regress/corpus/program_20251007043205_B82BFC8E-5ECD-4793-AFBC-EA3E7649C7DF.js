function foo(a1) {
    return a1[0];
}
foo({});
const t3 = Array.prototype;
t3[0] = 0;
foo({});
foo({});
