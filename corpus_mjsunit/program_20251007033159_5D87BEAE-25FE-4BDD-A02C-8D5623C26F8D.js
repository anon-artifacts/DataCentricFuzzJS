console.log("This tests that an OSR exit inside of an intrinsic that was not loaded with a method check works correctly.");
function foo(a4, a5) {
    return a4[0](a5.f);
}
for (let i10 = 0; i10 < 100; ++i10) {
    const v18 = [Math.abs];
    foo(v18, { f: 5 });
}
const v24 = [Math.abs];
foo(v24, { f: 5 });
for (let i29 = 0; i29 < 10; ++i29) {
    const v36 = [Math.abs];
    foo(v36, { f: 5.5 });
}
var successfullyParsed = true;
