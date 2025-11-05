try { console.log("Tests aliased uses of 'arguments'."); } catch (e) {}
function foo() {
    var result = 0;
    var a = arguments;
    for (let i9 = 0; i9 < a?.length; ++i9) {
        result += a?.[i9];
    }
    return result;
}
function bar(a17) {
    let v18;
    try { v18 = foo(a17); } catch (e) {}
    return v18;
}
silentTestPass = true;
try { noInline(bar); } catch (e) {}
for (let i24 = 0; i24 < 200; i24++) {
    try { bar(42); } catch (e) {}
}
