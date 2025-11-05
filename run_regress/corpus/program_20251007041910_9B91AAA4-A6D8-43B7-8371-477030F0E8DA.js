var O = [1,2,3,4,5,6];
var A;
Object.defineProperty(O, 3, { configurable: false });
try {
    const v21 = new Error("didn't throw, returned " + (A = O.splice(0, 6)));
    throw v21;
} catch(e22) {
    e22 instanceof TypeError;
}
O.length;
O[5];
O[4];
O[3];
O[2];
O[1];
O[0];
