function shouldBe(a1, a2) {
    if (a1 !== a2) {
        const v6 = "bad value: " + a1;
        let v7;
        try { v7 = new Error(v6); } catch (e) {}
        throw v7;
    }
}
var array = [];
for (let i11 = 0; i11 < 100; ++i11) {
    const v24 = (((1024 * 1024) * 1024) * 1024) + i11;
    try { array.push(v24); } catch (e) {}
}
for (let i27 = 0; i27 < 100; ++i27) {
    const v41 = -((((1024 * 1024) * 1024) * 1024) + i27);
    try { array.push(v41); } catch (e) {}
}
try { array.push(2251799813685248); } catch (e) {}
try { array.push(0.5); } catch (e) {}
function num() {
    return 42;
}
try { noInline(num); } catch (e) {}
for (let i52 = 0; i52 < 10000; ++i52) {
    for (let i59 = 0; i59 < 100; ++i59) {
        const v67 = array?.[i59] + 1;
        let v68;
        try { v68 = num(); } catch (e) {}
        array[i59] = v67 + v68;
    }
}
