const v1 = ["hello"];
const v4 = new Array(64);
const v6 = new Array(64);
var result = v6.concat(v4).concat(v1);
var value = result[0];
if (value !== void 0) {
    throw "Error: bad result: " + value;
}
