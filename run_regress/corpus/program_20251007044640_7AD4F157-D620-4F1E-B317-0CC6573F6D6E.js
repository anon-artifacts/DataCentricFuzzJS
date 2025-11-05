console.log("This tests that array construction via a host call works.");
function constructArray(a4) {
    const v6 = new a4(100);
    return v6;
}
for (let i8 = 0; i8 < 3; ++i8) {
    var array = constructArray(Array);
    array instanceof Array;
    array.length;
}
