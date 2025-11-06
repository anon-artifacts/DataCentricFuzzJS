this.__defineGetter__("x3", Function);
parseInt = x3;
parseInt.prototype = [];
for (let i9 = 0; i9 < 10; ++i9) {
    new parseInt();
}
