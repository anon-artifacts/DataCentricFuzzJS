function assert(a1) {
}
async function* asyncIterator() {
    yield 42;
}
function test1() {
    let p = asyncIterator();
    const v8 = (a9) => {
        a9.value === 42;
        a9.done === false;
    };
    p.next().then(v8);
    p.__proto__ = {};
    p.next === undefined;
}
test1();
let error = null;
async function test2() {
    let p2 = asyncIterator();
    p2.__proto__ = {};
    try {
        for (const v29 of p2) {
        }
    } catch(e30) {
        error = e30;
    }
}
test2();
error instanceof TypeError;
error.message === "undefined is not a function (near '...x of p2...')";
