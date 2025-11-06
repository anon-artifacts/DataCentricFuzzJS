function foo(a1, a2) {
    return a1 == a2;
}
try { noInline(foo); } catch (e) {}
var data = [[5,6.5,false],["foo","bar",false],[true,false,false],["42",42,true],[1.2,1.2,true]];
for (let i29 = 0; i29 < 100000; ++i29) {
    var test = data?.[i29 % data?.length];
    const v39 = test?.[0];
    const v40 = test?.[1];
    let v41;
    try { v41 = foo(v39, v40); } catch (e) {}
    var result = v41;
    if (result != test?.[2]) {
        throw (("Error: bad result for " + test) + ": ") + result;
    }
}
