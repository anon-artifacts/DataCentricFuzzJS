const v13 = {
    packed_smi: "packed smi elements",
    packed: "packed elements",
    packed_double: "packed double elements",
    dictionary: "dictionary elements",
    external_byte: "external byte elements",
    external_unsigned_byte: "external unsigned byte elements",
    external_short: "external short elements",
    external_unsigned_short: "external unsigned short elements",
    external_int: "external int elements",
    external_unsigned_int: "external unsigned int elements",
    external_float: "external float elements",
    external_double: "external double elements",
    external_pixel: "external pixel elements",
};
var elements_kind = v13;
function getKind(a16) {
}
function isHoley(a18) {
    return false;
}
function assertKind(a21, a22, a23) {
    getKind(a22);
}
function get_literal(a26) {
    var literal = [1,2,a26];
    return literal;
}
get_literal(3);
a = get_literal(3);
get_literal(3);
get_literal();
a[0] = 3.5;
b = get_literal(3);
[1,2,3];
get_literal();
get_literal(3);
b = get_literal(3);
get_literal();
function f55() {
    function bar(a57, a58, a59) {
        return [a57,a58,a59];
    }
    a = bar(1, 2, 3);
    a[0] = 3.5;
    a[1] = "hi";
    b = bar(1, 2, 3);
    elements_kind.packed;
}
f55();
function changeOptimizedEmptyArrayKind() {
    function f() {
        const v76 = new Array();
        return v76;
    }
    var a = f();
    a = f();
    a = f();
    a.push(0.5);
    a = f();
}
changeOptimizedEmptyArrayKind();
function changeOptimizedArrayLiteralKind() {
    function f() {
        return [1,2];
    }
    var a = f();
    a = f();
    a.push(0.5);
    a = f();
    isHoley(a);
    a = f();
    a.push(undefined);
    isHoley(a);
    a = f();
    isHoley(a);
    a = f();
    isHoley(a);
    a = f();
    isHoley(a);
}
changeOptimizedArrayLiteralKind();
function changeOptimizedEmptyArrayLiteralKind() {
    function f() {
        return [];
    }
    var a = f();
    isHoley(a);
    a = f();
    a.push(0.5);
    isHoley(a);
    a = f();
    isHoley(a);
    a = f();
    isHoley(a);
    a = f();
    isHoley(a);
}
changeOptimizedEmptyArrayLiteralKind();
function changeEmptyArrayLiteralKind2() {
    function f() {
        var literal = [];
        return literal;
    }
    var a = f();
    isHoley(a);
    a = f();
    a.push(0.5);
    isHoley(a);
    a = f();
    isHoley(a);
    a = f();
    a.push(undefined);
    isHoley(a);
    a = f();
    isHoley(a);
    a = f();
    a[10] = 1;
    isHoley(a);
    a = f();
    isHoley(a);
    a = f();
    a[10000] = 1;
    isHoley(a);
    a = f();
    isHoley(a);
}
changeEmptyArrayLiteralKind2();
