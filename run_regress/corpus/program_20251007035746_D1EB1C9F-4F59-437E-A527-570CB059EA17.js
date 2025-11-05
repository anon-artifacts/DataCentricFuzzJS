function Message(a1) {
    this.message = a1;
}
function Inlined(a4) {
    var dummy = arguments[1] === undefined;
    if (a4 instanceof Message) {
        return a4;
    }
    print("unreachable, but we must create register allocation complexity");
    return [];
}
function Process(a16) {
    var ret = [];
    ret.push(Inlined(a16[0], 1, 2));
    return ret;
}
const v25 = new Message("TEST PASS");
var input = [v25];
Process(input);
Process(input);
var result = Process(input);
result[0].message;
