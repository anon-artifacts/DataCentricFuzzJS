var arr = [Math,Math,Math,Math,{}];
var obj = {};
var x;
var result = "no error";
try {
    for (let i11 = 0; i11 < arr.length; i11++) {
        x = obj instanceof arr[i11];
    }
} catch(e19) {
    result = e19.constructor.name;
}
