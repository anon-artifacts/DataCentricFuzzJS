var o = {};
var failureCode = 0;
try {
    if (o.a || o.b) {
        failureCode = 1;
    }
} catch(e8) {
    failureCode = 2;
}
